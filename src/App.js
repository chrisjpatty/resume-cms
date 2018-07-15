import React, { Fragment } from 'react'
import { Router, Head } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import 'normalize.css'
import './app.css'

class App extends React.Component{
  componentDidUpdate = () => {
    if(process){
      if(process.env.NODE_ENV === 'development'){
        window.location.reload()
      }
    }
  }
  render(){
    return(
      <Router>
        <Fragment>
          <Head>
            <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700,700i" rel="stylesheet"/>
          </Head>
          <Routes />
        </Fragment>
      </Router>
    )
  }
}

export default hot(module)(App)
