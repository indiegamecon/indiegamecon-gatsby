import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { Component } from 'react'
import Navbar from './navbar'
import IGCLogo from '../images/IGC White Logo Stroke Only.svg'
import styled, { css } from 'styled-components'

import HamburgerButton from './hamburgerMenu'
import BitforestSrc from '../images/vectors/bitforestBlack.svg'
import { Colors } from '../utilities'
import { Bar } from './bar'

const BitforestLogo = styled(BitforestSrc)`
  margin-right: auto;
  height: 30px;
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  width: auto;
  path {
    fill: ${Colors.PRIMARY_LIGHT} !important;
    stroke: ${Colors.PRIMARY_LIGHT} !important;
  }
`

const StyledHeader = styled.header<{ home: boolean }>`
  position: relative;
  height: 120px;
  padding: 0 1%;
  max-width: 960px;
  margin: 0 auto;
  z-index: 1;
  ${({ home }) =>
    home &&
    css`
      height: auto;
      padding: 0 0 3rem 0;
      display: flex;
    `}
`

const Logo = styled.img`
  height: 100%;
  max-width: 100%;
`

const Date = styled.div`
  align-self: center;
  margin-top: 2rem;

  h4 {
    font-size: 2rem;
  }

  & > * {
    margin: 0;
    padding: 0;
  }
`

const Year = styled.h2`
  text-shadow: 5px 5px 0 ${Colors.PINK_SHADOW};
  font-size: 5rem;
`

const Transparent = styled.div`
  position: absolute;
  top: 7%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 50%;
  z-index: -1;
`

const Image = styled(Img)`
  width: 100%;
  opacity: 0.2;
`

const ShowOnDesktop = styled.div`
  @media only screen and (max-width: 750px) {
    display: none;
  }
`
const Header: React.FC<{ isHomePage: boolean }> = ({ isHomePage }) => {
  const photo = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "igcphoto.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(photo)
  return (
    <>
      <HamburgerButton />
      <ShowOnDesktop>
        <Navbar navOpen={true} />
      </ShowOnDesktop>
      <StyledHeader home={isHomePage}>
        <Link to="/">
          <Logo src={IGCLogo} />
        </Link>
        {isHomePage && (
          <Date>
            <h4>November 2nd and 3rd</h4>
            <Year>2019</Year>
          </Date>
        )}
        <Transparent>
          {isHomePage && (
            <Image
              fluid={photo.file.childImageSharp.fluid}
              // style={{ width: '100%', height: '100%' }}
            />
          )}
        </Transparent>
        <a href="https://www.bitforest.co">
          <BitforestLogo />
        </a>
      </StyledHeader>
      <Bar />
    </>
  )
}

export default Header
