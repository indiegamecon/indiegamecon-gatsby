import React, { Component } from 'react'
import { FaBars } from "react-icons/fa";
import styled from 'styled-components' 

class HamburgerButton extends Component {

  render() {
    return (
      <FaBars className={this.props.className} onMouseDown={this.props.handleMouseDown} style={{fontSize: '2rem'}}/>
    )
  }
}

const StyledHamburgerButton = styled(HamburgerButton)`
  @media only screen and (min-width: 750px) {
    display: none;
  }
`

export default StyledHamburgerButton