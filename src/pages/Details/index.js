import React, { useEffect, useCallback, useState } from 'react'

import { Container, BackButton, DetailsWrapper } from './styles'

import { useRouteMatch, useHistory } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import api from '../../service/api'

export default function Details() {
  const routeMatch = useRouteMatch()
  const history = useHistory()

  const [beer, setBeer] = useState(null)

  const fetchBeer = useCallback(async () => {
    const { data } = await api.get(`beers/${routeMatch.params.id}`)
    console.log({ data: data[0] })
    setBeer(data[0])
  }, [routeMatch.params.id])

  const handlerPressBack = useCallback(() => {
    history.push(`/`)
  }, [history])

  useEffect(() => {
    fetchBeer()
  }, [fetchBeer])

  return (
    <Container>
      <BackButton onClick={handlerPressBack}>
        <MdArrowBack />
        Back
      </BackButton>

      <DetailsWrapper>
        {/* <h2>Details</h2> */}
        {beer && (
          <>
            <h1>{beer.name}</h1>
            <img className="beerImg" src={beer.image_url} alt={beer.name} />
            <p className="tagline">{beer.tagline}</p>
            <p className="description">{beer.description}</p>
            <p className="firstBrewed">First brewer: {beer.first_brewed}</p>
            <h2>Ingredients</h2>
            <div className="ingredients">
              <div className="ingredientsItems">
                <h3>Hops</h3>
                <ul>
                  {beer.ingredients.hops.map((hop, index) => (
                    <li key={index}>* {hop.name}</li>
                  ))}
                </ul>
              </div>
              <div className="ingredientsItems">
                <h3>Malt</h3>
                <ul>
                  {beer.ingredients.malt.map((mal, index) => (
                    <li key={index}>* {mal.name}</li>
                  ))}
                </ul>
              </div>
              <div className="ingredientsItems">
                <h3>Yeast</h3>
                <p>{beer.ingredients.yeast}</p>
              </div>
            </div>
          </>
        )}
      </DetailsWrapper>
    </Container>
  )
}
