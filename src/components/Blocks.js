import React from 'react'
import styled from 'react-emotion'
import SectionLabel from './SectionLabel'
import Event from './Event'

const BlocksWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 50
})

const BlockWrapper = styled('div')({

})

export default class Blocks extends React.Component{
  getBlockByType = block => {
    switch (block.type) {
      case 'sectionLabel':
        return <SectionLabel label={block.title} />
      case 'event':
        return <Event title={block.title} content={block.content} date={block.displayDate} />
      default:
        return <div>{block.paragraph}</div>
    }
  }
  render(){
    const { blocks } = this.props;
    return(
      <BlocksWrapper>
        {
          blocks.map((block, i) => (
            <BlockWrapper key={i}>
              {this.getBlockByType(block)}
            </BlockWrapper>
          ))
        }
      </BlocksWrapper>
    )
  }
}
