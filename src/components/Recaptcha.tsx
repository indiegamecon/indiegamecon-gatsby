import React from 'react'
import Reaptcha from 'reaptcha'

let captcha
export const executeCaptcha = e => {
  e.preventDefault()
  captcha.execute()
}

interface RecaptchaProps {
  setFieldValue: (field: any, value: any, shouldValidate?: boolean) => void
  handleSubmit: () => void
  isSubmitting: boolean
  isValid: boolean
}

export const Recaptcha: React.FC<RecaptchaProps> = ({
  setFieldValue,
  handleSubmit,
  isSubmitting,
  isValid,
}) => {
  return (
    <>
      <button
        type="submit"
        onSubmit={executeCaptcha}
        disabled={isSubmitting || !isValid}
      >
        Submit
      </button>
      <Reaptcha
        ref={e => (captcha = e)}
        sitekey="6Lfsx8QUAAAAAK25dZEFXPfGIGIDtQzpEfh3C06E"
        onVerify={response => {
          setFieldValue('recaptcha', response)
          handleSubmit()
        }}
        size="invisible"
        explicit
        onLoad={() => captcha.renderExplicitly()}
      />
    </>
  )
}
