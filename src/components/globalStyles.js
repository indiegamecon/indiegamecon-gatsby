import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bungee|Roboto+Mono');
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  background-color: #231f20;

  *, *::before, *::after {
    box-sizing: inherit;
  }
}
body {
  margin: 0 auto;
  background: #2e319277;
  box-shadow: 5px 5px 5px #000000aa;
  color: #eee;
}

h1, h2, h3 {
  font-family: 'Bungee', cursive;
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


p {
  font-size: 1.2rem;
}

a {
  color: #fff200;
}

li {
  margin-bottom: calc(1.45rem / 2);
}
ol li {
  padding-left: 0;
}
ul li {
  padding-left: 0;
}
li > ol {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li > ul {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);

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
  iframe {
    width: 100%;
  }

}
`

export default GlobalStyle
