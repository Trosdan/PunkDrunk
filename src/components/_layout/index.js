import React from 'react'

import { Container, Header } from './styles'
import Logo from '../../assets/logo.png'

export default function layout({ children }) {
  return (
    <Container>
      <Header>
        <div>
          <h2 className="title">PunkDrunk</h2>
          <p className="subTitle">find your favorite drink</p>
        </div>
        <div className="imgLogo">
          <img src={Logo} alt="PunkDrunk" />
        </div>
      </Header>
      {children}
      {/* <p>Made with ❤ by Jordan Oliveira</p> */}
    </Container>
  )
}
