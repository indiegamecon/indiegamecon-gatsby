import "typeface-bungee"
import "typeface-roboto-mono"

import React from "react"

import GlobalStyle from "./globalStyles"
import Header from "./header"

//import './layout.css'

const Layout: React.FC<{ isHomePage?: boolean }> = ({
  children,
  isHomePage,
}) => {
  return (
    <>
      <GlobalStyle />
      <Header isHomePage={isHomePage} />
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </main>
    </>
  )
}

export default Layout
