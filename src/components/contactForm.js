import React from 'react'
import { Formik, Form, Field } from 'formik'

const ContactForm = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={async (values, actions) => {
      console.log('Form submitted')
      console.log(values)
      console.log(actions)

      const { name, email, message } = values
      const data = {
        name: name,
        email: email,
        message: message,
      }

      const response = await (await fetch('/.netlify/functions/airtable', {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })).json()
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
      <Form onSubmit={handleSubmit} onSubmitCapture={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <Field
          className={touched.name && errors.name ? 'invalid' : ''}
          id="name"
          type="text"
          name="name"
          required
        />
        <label htmlFor="email">Email:</label>
        <Field
          className={touched.email && errors.email ? 'invalid' : ''}
          id="email"
          type="email"
          name="email"
          required
        />
        {/* <ErrorMessage className="error" name="email" component={Error} /> */}
        <label htmlFor="message">Anything you would like us to know?</label>
        <Field
          className={touched.message && errors.message ? 'invalid' : ''}
          id="message"
          component="textarea"
          name="message"
          placeholder="I love learning! ;)"
          required
        />
        <button type="submit" disabled={isSubmitting || !isValid}>
          Submit
        </button>
      </Form>
    )}
  />
)

export default ContactForm
