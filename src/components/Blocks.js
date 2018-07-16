import React from 'react'
import styled from 'react-emotion'
import SectionLabel from './SectionLabel'
import Event from './Event'
import ImageBlock from './ImageBlock'

const BlocksWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 50
})

const BlockWrapper = styled('div')({})

const Link = styled('a')({
  textDecoration: 'none',
  color: 'initial'
})

export default class Blocks extends React.Component {
  getBlockByType = block => {
    switch (block.type) {
      case 'sectionLabel':
        return <SectionLabel label={block.title} />
      case 'event':
        return (
          <Event
            title={block.title}
            content={block.content}
            date={block.displayDate}
          />
        )
      case 'image':
        return (
          <ImageBlock
            title={block.title}
            content={block.content}
            imageURL={block.imageURL}
            imageLayout={block.imageLayout}
          />
        )
      default:
        return <div>{block.paragraph}</div>
    }
  }
  render() {
    const { blocks } = this.props
    return (
      <BlocksWrapper>
        {blocks.map((block, i) => {
          if(block.href){
            return (
              <Link href={block.href} target='_blank' key={i}>
                <BlockWrapper>{this.getBlockByType(block)}</BlockWrapper>
              </Link>
            )
          }
          return <BlockWrapper key={i}>{this.getBlockByType(block)}</BlockWrapper>
        })}
      </BlocksWrapper>
    )
  }
}
