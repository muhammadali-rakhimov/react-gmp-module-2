import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styled from './Footer.module.scss'

function Footer() {
  return (
    <Container>
      <Row>
        <div className={`container-fluid ${styled.containerFooter} p-4`}>
          <a href="/" className={styled.logo}>
            <b>netflix</b>
            roulette
          </a>
        </div>
      </Row>
    </Container>
  )
}

export default Footer
