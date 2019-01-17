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

/* .gatsby-resp-iframe-wrapper {
  max-width: 400px;
  height: 300px;
} */

/* .embedVideo-iframe {
  max-width: 500px;
  max-height: 300px;

} */
iframe {
  margin: 0 auto;
  display: block;
}
@media only screen and (max-width: 750px) {
  html {
    font-size: 100%;
  }
  iframe {
    width: 100%;
  }
}
`

export default GlobalStyle
