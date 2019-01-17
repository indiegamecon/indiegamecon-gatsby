import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bungee|Roboto+Mono');
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  padding: 1rem;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  background-color: #231f20;
}
body {
  margin: 0 auto;
  border: 1rem dashed #fff200 ;
  max-width: 1000px;
  background: #fff;
}

h1, h2, h3 {
  font-family: 'Bungee', cursive;
}
`

export default GlobalStyle
