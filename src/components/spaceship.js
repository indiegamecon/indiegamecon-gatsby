import React, { Component } from 'react'
import styled from 'styled-components'
import spaceship from '../images/IndieGameCon_spaceship.svg'

const StyledShip = styled.img`
  width: 300px;
  margin-left: auto;
  margin-right: 10px;
  position: relative;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  @media only screen and (max-width: 750px) {
    display: none;
  }
`

class Spaceship extends Component {
  state = {
    x: 0,
    y: 0,
  }

  handleMouseMove = e => {
    console.log(e.movementX)
    let x = e.movementX / 10
    let y = e.movementY / 10
    this.setState((prevState) => ({
      x: prevState.x + x,
      y: prevState.y + y,
    }))
  }

  handleKeydown = e => {
    let {keyCode} = e
    console.log(keyCode)
    switch (keyCode) {
      case 68:
      this.setState((prevState) => ({
        x: prevState.x + 4,
      })) 
        break;
      case 65:
      this.setState((prevState) => ({
        x: prevState.x - 4,
      })) 
      default:
        break;
    }
    
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('keydown', this.handleKeydown)
  }

  render() {
    return (
      <div>
        <StyledShip
          // onMouseMove={this.handleMouseMove}
          src={spaceship}
          style={{
            top: this.state.y + 'px',
            left: this.state.x + 'px',
          }}
        />
      </div>
    )
  }
}

export default Spaceship
