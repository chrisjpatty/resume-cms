import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row'
})

const ProfileImage = styled('img')({
  
})

export default class HeroHeader extends React.Component{
  render(){
    const { header } = this.props;
    const { profileUrl } = header;
    console.log(header);
    return(
      <Wrapper>
        <ProfileImage src={profileUrl} />
      </Wrapper>
    )
  }
}
