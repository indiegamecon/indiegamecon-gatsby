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
  max-width: 1000px;
  background: #ffffffee;
  box-shadow: 5px 5px 5px #000000aa;
}

h1, h2, h3 {
  font-family: 'Bungee', cursive;
  padding-left: 1.3rem;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.75rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.4rem;
}
h5 {
  font-size: 1.3rem;
}


p {
  font-size: 1.2rem;
  overflow-wrap: break-word;
  padding: 1.2rem;
}

ul, ol, li {
  margin-left: 1rem;
} 

button {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2rem;
}

iframe {
  margin: 0 auto;
  display: block;
}

.center {
  text-align: center;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 750px) {
  html {
    font-size: 90%;
  }
  h1, h2, h3, p, ul, li {
  padding-left: 0;
}

  iframe {
    width: 100%;
  }

}
`

export default GlobalStyle
