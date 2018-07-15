import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import HeroHeader from '../components/HeroHeader'
import Blocks from '../components/Blocks'
import globalTheme from '../theme'

const PageWrapper = styled('div')({})

class Home extends React.Component {
  render() {
    const { theme, header, blocks } = this.props;
    console.log(blocks);
    return (
      <ThemeProvider theme={{ ...globalTheme, ...theme }}>
        <PageWrapper>
          <HeroHeader header={header} />
          <Blocks blocks={blocks} />
        </PageWrapper>
      </ThemeProvider>
    )
  }
}

export default withRouteData(withSiteData(Home))
