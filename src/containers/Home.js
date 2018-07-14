import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import HeroHeader from '../components/HeroHeader'
import Events from '../components/Events'
import globalTheme from '../theme'

const PageWrapper = styled('div')({})

class Home extends React.Component {
  render() {
    const { theme, header, events } = this.props
    return (
      <ThemeProvider theme={{ ...globalTheme, ...theme }}>
        <PageWrapper>
          <HeroHeader header={header} />
          <Events events={events} />
        </PageWrapper>
      </ThemeProvider>
    )
  }
}

export default withRouteData(withSiteData(Home))
