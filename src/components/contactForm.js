import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'

import * as yup from 'yup'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: auto 2fr;
  grid-gap: 10px;
  padding: 2rem;

  textarea {
    height: 100px;
    border-radius: 5px;
    font-family: inherit;
    font-weight: bold;
  }
  label {
    text-align: right;
    font-size: 1.5rem;
  }
  input {
    width: 250px;
    border-radius: 5px;
    font-size: 1.5rem;
  }
  fieldset input {
    width: 40px;
  }
  .invalid {
    background: #ff000055;
  }
  button {
    width: 250px;
    grid-column: 2 / 3;
    background: #2b2b2b;
    border: none;
    height: 3rem;
    border-radius: 5px;
    box-shadow: 0px 1px 5px #333;
    color: white;
    cursor: pointer;

    :disabled {
      background-color: #aaa;
    }
  }
`

class ContactForm extends Component {
  state = {
    formSubmitted: false,
  }

  render() {
    return (
      <>
        <Transition
          items={this.state.formSubmitted}
          native
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 'auto' }}
          leave={{ opacity: 0, height: 0 }}
        >
          {submitted =>
            !submitted
              ? props => (
                  <animated.div style={props}>
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        message: '',
                        formName: 'Contact',
                      }}
                      validationSchema={yup.object().shape({
                        name: yup.string().required('IDENTIFY YOURSELF!'),
                        email: yup
                          .string()
                          .email(
                            "We can't respond to you without a proper email"
                          )
                          .required(
                            "We can't respond you without a proper email"
                          ),
                        // message: yup
                        //   .string()
                        //   .required("Don't you have anything to tell us?"),
                      })}
                      onSubmit={async (values, actions) => {
                        console.log('Form submitted')
                        console.log(values)
                        this.setState({ formSubmitted: true })
                        const response = await (await fetch(
                          '/.netlify/functions/airtable',
                          {
                            method: 'PATCH',
                            headers: {
                              'Content-type': 'application/json',
                            },
                            body: JSON.stringify(values),
                          }
                        )).json()
                        console.log(response)
                      }}
                      render={({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleSubmit,
                        isValid,
                        setFieldValue,
                        validate,
                      }) => (
                        <StyledForm
                          onSubmit={handleSubmit}
                          onSubmitCapture={handleSubmit}
                        >
                          <label htmlFor="name">Name:</label>
                          <Field
                            className={
                              touched.name && errors.name ? 'invalid' : ''
                            }
                            id="name"
                            type="text"
                            name="name"
                            required
                          />
                          <label htmlFor="email">Email:</label>
                          <Field
                            className={
                              touched.email && errors.email ? 'invalid' : ''
                            }
                            id="email"
                            type="email"
                            name="email"
                            required
                          />
                          {/* <ErrorMessage className="error" name="email" component={Error} /> */}
                          <label htmlFor="message">Message</label>
                          <Field
                            className={
                              touched.message && errors.message ? 'invalid' : ''
                            }
                            id="message"
                            component="textarea"
                            name="message"
                            required
                          />
                          <button
                            type="submit"
                            disabled={isSubmitting || !isValid}
                          >
                            Submit
                          </button>
                        </StyledForm>
                      )}
                    />
                  </animated.div>
                )
              : props => (
                  <animated.h2 style={{ textAlign: 'center', ...props }}>
                    Thanks, and talk to you soon!
                  </animated.h2>
                )
          }
        </Transition>
      </>
    )
  }
}

export default ContactForm
