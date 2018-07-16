import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import { Wrapper, Title, Content } from './Event'
import Markdown from 'react-markdown'

const wrapperOverrides = css({
  padding: 0,
  display: 'flex',
  flexDirection: 'row'
})

const Thumb = styled('div')({
  width: 120,
  minHeight: 120,
  flex: '0 0 auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}, ({imageURL}) => ({
  backgroundImage: `url(${imageURL})`
}))

const ContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: 20
})

export default class ImageBlock extends React.Component{
  render(){
    const { imageURL, imageLayout, title, content } = this.props;
    return(
      <Wrapper className={wrapperOverrides}>
        {
          imageLayout === 'leftThumb' &&
          <Thumb imageURL={imageURL} />
        }
        <ContentWrapper>
          <Title>{title}</Title>
          <Content>
            <Markdown source={content} />
          </Content>
        </ContentWrapper>
      </Wrapper>
    )
  }
}
