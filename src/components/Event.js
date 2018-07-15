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

const Paragraph = styled('p')({
  
})

export default class Event extends React.Component{
  render(){
    const { title, paragraph } = this.props;
    return(
      <Wrapper>
        <Title>{title}</Title>
        {
          paragraph &&
          <Paragraph>
            {paragraph}
          </Paragraph>
        }
      </Wrapper>
    )
  }
}
