import styled from 'styled-components'
import React from 'react'

const StyledStarfield = styled.div`
  z-index: -1;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 500px;
  width: 100%;
  background-image: radial-gradient(
      2px 2px at 20px 30px,
      #eee,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: zoom 5s infinite;
  opacity: 0;
  background-position: 50% 50%;
  animation-delay: ${props => props.delay || '0s'};

  @keyframes zoom {
    0% {
      opacity: 0;
      transform: scale(0.5);
      animation-timing-function: ease-in;
    }
    85% {
      opacity: 1;
      transform: scale(2.8);
      animation-timing-function: linear;
    }
    100% {
      opacity: 0;
      transform: scale(3.5);
    }
  }
`

const Starfield = () => (
  <>
    <StyledStarfield />
    <StyledStarfield delay="1s" />
    <StyledStarfield delay="2s" />
    <StyledStarfield delay="3s" />
    <StyledStarfield delay="4s" />
  </>
)

export default Starfield
