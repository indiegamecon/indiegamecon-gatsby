import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring/renderprops'
import { TermsConditions } from './TermsConditions'

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  padding: 2rem;

  h3 {
    text-align: right;
    line-height: 2rem;
  }
  p {
    background: #2b2b2b55;
    align-self: center;
    padding: 10px;
  }
  textarea {
    height: 150px;
    border-radius: 5px;
    font-family: inherit;
    font-weight: bold;
  }
  label,
  legend {
    text-align: right;
    font-size: 1.5rem;
  }
  input {
    width: 300px;
    border-radius: 5px;
    font-size: 1.5rem;
  }
  fieldset input {
    width: 40px;
  }
  .invalid {
    background: #ff000077;
  }
  .terms {
    text-align: center;
  }
  .termsButton {
    text-decoration: underline;
    font-size: inherit;
    background: none;
    color: #fff200;
  }
  .termsCheckbox {
    height: 2.5rem;
    width: 2.5rem;
  }
  button {
    margin: 0 auto;
    width: 250px;
    grid-column: 1 / 3;
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

  @media screen and (max-width: 750px) {
    padding: 0 0 20px 0;
    grid-template: auto / 1fr;

    input {
      width: auto;
    }
    h3 {
      font-size: 1.1rem;
    }
    label,
    textarea,
    input,
    button,
    p,
    legend {
      font-size: 1rem;
    }
  }
`

const GameForm = () => {
  const [formSubmitted, setFormSubmitted] = useState()
  const [termsOpen, setTermsOpen] = useState()
  return (
    <div>
      <Transition
        items={formSubmitted}
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
                      formName: 'Games',
                      acceptedTerms: false,
                    }}
                    validationSchema={yup.object().shape({
                      name: yup.string().required('IDENTIFY YOURSELF!'),
                      email: yup
                        .string()
                        .email("We can't hire you without a proper email")
                        .required("We can't hire you without a proper email"),
                      gameName: yup
                        .string()
                        .required('Please give us the name of your game'),
                      gameDescription: yup
                        .string()
                        .required('Please describe your game'),

                      acceptedTerms: yup
                        .bool()
                        .oneOf(
                          [true],
                          'Please accept the terms and conditions'
                        ),
                    })}
                    onSubmit={async (values, actions) => {
                      console.log('Form submitted')
                      console.log(values)
                      console.log(actions)

                      setFormSubmitted(true)

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
                        <h3>Contact Registration</h3>
                        <p>
                          We need contact information for the person submitting
                          the game
                        </p>
                        <label htmlFor="name">Your Name:</label>
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

                        <h3>Game Registration</h3>
                        <p>
                          Now we need some information about the game you are
                          submitting
                        </p>
                        <label htmlFor="teamName">Team Name:</label>
                        <Field
                          className={
                            touched.teamName && errors.teamName ? 'invalid' : ''
                          }
                          id="teamName"
                          type="text"
                          name="teamName"
                        />
                        <label htmlFor="teamMembers">Team Members:</label>
                        <Field
                          className={
                            touched.teamMembers && errors.teamMembers
                              ? 'invalid'
                              : ''
                          }
                          id="teamMembers"
                          type="text"
                          name="teamMembers"
                        />
                        <label htmlFor="gameName">Game Name:</label>
                        <Field
                          className={
                            touched.gameName && errors.gameName ? 'invalid' : ''
                          }
                          id="gameName"
                          type="text"
                          name="gameName"
                          required
                        />

                        <label htmlFor="gameDescription">
                          Game Description: What do you do? How do you play?
                        </label>
                        <Field
                          className={
                            touched.gameDescription && errors.gameDescription
                              ? 'invalid'
                              : ''
                          }
                          id="gameDescription"
                          component="textarea"
                          name="gameDescription"
                          required
                        />

                        <label htmlFor="gameLink">Link to Game:</label>
                        <Field
                          className={
                            touched.gameLink && errors.gameLink ? 'invalid' : ''
                          }
                          id="gameLink"
                          type="text"
                          name="gameLink"
                        />

                        <label htmlFor="excited">
                          What are you most excited about at Indie Game Con?
                        </label>
                        <Field
                          id="excited"
                          type="text"
                          component="textarea"
                          name="excited"
                        />
                        <div className="terms">
                          <label htmlFor="acceptedTerms">
                            Accept <br />
                          </label>
                          <button
                            onClick={() => setTermsOpen(true)}
                            className="termsButton"
                            type="button"
                          >
                            Terms and Conditions
                          </button>
                        </div>
                        <Field
                          id="acceptedTerms"
                          name="acceptedTerms"
                          type="checkbox"
                          className="termsCheckbox"
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting || !isValid}
                        >
                          Submit
                        </button>
                        <TermsConditions
                          open={termsOpen}
                          setOpen={setTermsOpen}
                        />
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
    </div>
  )
}

export default GameForm
