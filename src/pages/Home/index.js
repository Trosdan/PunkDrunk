import React, { Component } from 'react'

import { Pagination } from './styles'

import api from '../../service/api'
import Beeritem from '../../components/BeerItem'

export default class Home extends Component {
  state = {
    beersList: [],
    loading: true,
    page: 1,
    per_page: 5,
  }

  fetchBeers = async (pageIndex = this.state.page) => {
    this.setState({ loading: true })
    const { per_page } = this.state

    const { data } = await api.get(
      `beers?page=${pageIndex}&per_page=${per_page}`
    )
    this.setState({ beersList: data, loading: false })
  }

  handlerBeerClick = (beer) => {
    const { history } = this.props
    history.push(`details/${beer.id}`)
  }

  componentWillMount() {
    this.fetchBeers()
  }

  handlerOnClickPagination = (pageIndex) => {
    this.setState({ page: pageIndex })
    this.fetchBeers(pageIndex)
  }

  _renderPagination = () => {
    const { page } = this.state

    let pagesArray = []

    for (let i = page - 2; i < page + 3; i++) {
      pagesArray.push(i)
    }

    let previous = true
    let next = true

    previous = !pagesArray.find((item) => item <= 0)

    console.log({ previous, next })
    console.log(pagesArray)

    return (
      <Pagination>
        {previous && (
          <div
            onClick={() => this.handlerOnClickPagination(page - 1)}
            className="PageItem"
          >
            <p>PREVIOUS</p>
          </div>
        )}
        {pagesArray.map((item) =>
          item > 0 ? (
            <div
              onClick={() => this.handlerOnClickPagination(item)}
              className={item === page ? 'PageItem PageItemSelect' : 'PageItem'}
            >
              <p>{item}</p>
            </div>
          ) : null
        )}
        {next && (
          <div
            onClick={() => this.handlerOnClickPagination(page + 1)}
            className="PageItem"
          >
            <p>NEXT</p>
          </div>
        )}
      </Pagination>
    )
  }

  render() {
    const { beersList } = this.state
    return (
      <>
        {beersList.map((beer) => (
          <div key={beer.id}>
            <Beeritem
              onClick={() => this.handlerBeerClick(beer)}
              image_url={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
            />
          </div>
        ))}
        {this._renderPagination()}
      </>
    )
  }
}
