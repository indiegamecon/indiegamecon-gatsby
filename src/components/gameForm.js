import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'

const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 3fr;
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
  }
  input {
    width: 250px;
    border-radius: 5px;
  }
  fieldset input {
    width: 40px;
  }
  .invalid {
    background: #ff000055;
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
`

class GameForm extends Component {
  state = {
    formSubmitted: false,
  }

  render() {
    // function validateFile(value) {
    //   let error
    //   if (value === undefined) {
    //     error = 'No file!'
    //   }
    //   return error
    // }
    return (
      <div>
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
                        formName: 'Games',
                      }}
                      validationSchema={yup.object().shape({
                        name: yup.string().required('IDENTIFY YOURSELF!'),
                        email: yup
                          .string()
                          .email("We can't hire you without a proper email")
                          .required("We can't hire you without a proper email"),
                        // message: yup
                        //   .string()
                        //   .required("Don't you have anything to tell us?"),
                        // resume: yup.object().isValid(),
                        // coverLetter: yup.object().nullable(),
                      })}
                      onSubmit={async (values, actions) => {
                        console.log('Form submitted')
                        console.log(values)
                        console.log(actions)

                        // const { name, email, message } = values
                        // const data = {
                        //   name: name,
                        //   email: email,
                        //   message: message,
                        // }
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
                          <h3>Contact Registration</h3>
                          <p>
                            We need contact information for the person
                            submitting the game
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
                          <label htmlFor="teamName">Team Name</label>
                          <Field
                            className={
                              touched.teamName && errors.teamName
                                ? 'invalid'
                                : ''
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
                          <label htmlFor="gameName">Game Name</label>
                          <Field
                            className={
                              touched.gameName && errors.gameName
                                ? 'invalid'
                                : ''
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
                              touched.gameLink && errors.gameLink
                                ? 'invalid'
                                : ''
                            }
                            id="gameLink"
                            type="text"
                            name="gameLink"
                          />
                          <legend>What days will you attend?</legend>
                          <fieldset>
                            <div>
                              <Field
                                className={
                                  touched.day1 && errors.day1 ? 'invalid' : ''
                                }
                                id="day1"
                                type="checkbox"
                                value="day1"
                                name="day1"
                              />
                              <label htmlFor="day1">Day 1</label>
                            </div>
                            <div>
                              <Field
                                className={
                                  touched.day2 && errors.day2 ? 'invalid' : ''
                                }
                                id="day2"
                                type="checkbox"
                                value="day2"
                                name="day2"
                              />
                              <label htmlFor="day2">Day 2</label>
                            </div>
                          </fieldset>
                          {/* <legend>Dietary Restrictions:</legend> */}
                          {/* Dietary Restrictions Radio Buttons */}
                          <label htmlFor="excited">
                            What are you most excited about at Indie Game Con?
                          </label>
                          <Field
                            id="excited"
                            type="text"
                            component="textarea"
                            name="excited"
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
      </div>
    )
  }
}

export default GameForm
