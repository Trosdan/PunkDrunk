import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { Container, ImgBeer, InfoBeer } from './styles'

export default function Beeritem({ image_url, name, tagline, onClick }) {
  return (
    <Container onClick={onClick}>
      <ImgBeer>
        <img src={image_url} alt={name} />
      </ImgBeer>
      <InfoBeer>
        <p className="NameBeer">{name}</p>
        <p className="SubNameBeer">{tagline}</p>
      </InfoBeer>
      <MdKeyboardArrowRight size={32} />
    </Container>
  )
}
