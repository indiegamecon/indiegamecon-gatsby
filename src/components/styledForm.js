import styled from 'styled-components'
import { Form } from 'formik'

export const StyledForm = styled(Form)`
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
    width: auto;
    box-shadow: none;
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
