import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import styled from 'react-emotion'

const PageWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})

class Home extends React.Component{
  render(){
    console.log(this.props)
    return(
      <PageWrapper>
        Home page
      </PageWrapper>
    )
  }
}

export default withRouteData(withSiteData(Home))
