import React, { Fragment } from 'react'
import { Router, Head } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import 'normalize.css'
import './app.css'

const App = () => (
  <Router>
    <Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700" rel="stylesheet"/>
      </Head>
      <Routes />
    </Fragment>
  </Router>
)

export default hot(module)(App)
