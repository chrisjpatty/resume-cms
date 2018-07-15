import React from 'react'
import styled from 'react-emotion'

const SectionWrapper = styled('h2')({
  fontSize: 36,
  fontWeight: 800
})

export default class SectionLabel extends React.Component {
  render() {
    const { label } = this.props;
    return <SectionWrapper>{label}</SectionWrapper>
  }
}
