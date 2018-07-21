import React from 'react'
import styled from 'react-emotion'
import Markdown from 'react-markdown'

export const Wrapper = styled('div')({
  background: '#fff',
  padding: 20,
  minWidth: 450,
  maxWidth: 450,
  marginBottom: 1
}, ({theme}) => ({
  boxShadow: theme.shadows.high,
  [theme.media.xs]: {
    padding: 15,
    boxShadow: theme.shadows.mid,
    width: '100%',
    maxWidth: 'none',
    // marginBottom: 0,
    borderTop: `1px solid ${theme.gray.extraExtraLight}`,
    minWidth: 'auto'
  }
}))

export const Title = styled('h3')({
  margin: 0,
  marginRight: 15,
  padding: 0
})

export const Content = styled('div')({
  margin: 0,
  padding: 0,
  '& p': {
    margin: 0,
    paddingTop: 10
  }
})

const TitleWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'center'
})

const StyledDate = styled('span')({
  fontStyle: 'italic',
  marginLeft: 'auto',
  fontWeight: 700,
  marginTop: 2,
  whiteSpace: 'nowrap'
})

export default class Event extends React.Component{
  render(){
    const { title, date, content } = this.props;
    return(
      <Wrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <StyledDate>{date}</StyledDate>
        </TitleWrapper>
        {
          content &&
          <Content>
            <Markdown source={content} escapeHtml />
          </Content>
        }
      </Wrapper>
    )
  }
}
