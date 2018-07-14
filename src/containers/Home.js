import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import HeroHeader from '../components/HeroHeader'

const PageWrapper = styled('div')({

})

class Home extends React.Component{
  render(){
    const { theme, header } = this.props;
    return(
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <HeroHeader header={header} />
        </PageWrapper>
      </ThemeProvider>
    )
  }
}

export default withRouteData(withSiteData(Home))
