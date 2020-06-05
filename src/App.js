import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './styles/global'
import Layout from './components/_layout'

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </Router>
  )
}
