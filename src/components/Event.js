import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')({
  background: '#fff',
  padding: 20
}, ({theme}) => ({
  boxShadow: theme.shadows.high
}))

const Title = styled('h3')({
  margin: 0,
  padding: 0
})

const Content = styled('p')({
  margin: 0,
  padding: 0
})

const TitleWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

const StyledDate = styled('span')({
  fontStyle: 'italic',
  marginLeft: 'auto',
  fontWeight: 700
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
            {content}
          </Content>
        }
      </Wrapper>
    )
  }
}
