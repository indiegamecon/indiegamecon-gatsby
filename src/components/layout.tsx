import React from 'react'
import 'typeface-bungee'
import 'typeface-roboto-mono'

import Header from './header'
import GlobalStyle from './globalStyles'
//import './layout.css'

const Layout: React.FC<{ isHomePage?: boolean }> = ({
  children,
  isHomePage,
}) => {
  console.log(isHomePage)
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
