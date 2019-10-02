import styled from 'styled-components'
import React, { useEffect } from 'react'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #00000055;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${({ open }) => (open ? '' : 'none')};
`

const Modal = styled.div`
  max-width: 500px;
  background: #ffffffdd;
  color: black;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  p {
    background: inherit !important;
  }
`

const CloseButton = styled.button`
  margin: 0.5rem auto;
`

export const TermsConditions = ({ open, setOpen }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('keyup', handleEscape)
    }
    return () => document.removeEventListener('keyup', handleEscape)
  }, [setOpen, open])
  return (
    <Background open={open} onClick={() => setOpen(false)}>
      <Modal>
        <p>
          Bitforest reserves the right to use any photograph/video/screenshot
          taken at any event sponsored by Bitforest, without the expressed
          written permission of those included within the
          photograph/video/screenshot. Bitforest may use the
          photograph/video/screenshot in publications or other media material
          produced, used or contracted by Bitforest including but not limited
          to: brochures, invitations, books, newspapers, magazines, television,
          websites, etc.
        </p>
        <CloseButton onClick={() => setOpen(false)} type="button">
          Close
        </CloseButton>
      </Modal>
    </Background>
  )
}
