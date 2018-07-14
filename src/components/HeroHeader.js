import React from 'react'
import styled from 'react-emotion'
import curveSrc from '../img/curve.svg'

const Wrapper = styled('div')({
  minHeight: '60vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden'
}, ({theme}) => ({
  color: theme.textOnPrimaryColor,
  // boxShadow: theme.shadows.low
}))

const ProfileImageWrapper = styled('div')({
  minHeight: '20vw',
  height: '100%',
  width: '30vw',
  overflow: 'hidden',
  position: 'relative',
  flex: '0 0 auto'
}, ({theme, profileUrl}) => ({
  backgroundImage: `url(${profileUrl})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '&:before': {
    content: '" "',
    height: '110%',
    position: 'absolute',
    right: -26,
    top: -10,
    width: 50,
    background: theme.primaryColor,
    transform: 'rotate(-9deg)'
  }
}))

const BioWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 50
})

const Name = styled('h1')({
  margin: 0,
  padding: 0,
  fontSize: '3rem',
  paddingTop: 15
})

const Biography = styled('p')({

})

const Curve = styled('img')({
  position: 'absolute',
  width: 'calc(100% + 20px)',
  bottom: -2,
  left: -10
})

const BlurredImageWrapper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '99%',
  left: 0,
  top: 0,
  overflow: 'hidden'
})

const BlurredImage = styled('div')({
  position: 'absolute',
  width: '110%',
  height: '110%',
  left: '-5%',
  top: '-5%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  filter: 'blur(15px) brightness(.7)',
  // opacity: .8
}, ({profileUrl}) => ({
  backgroundImage: `url(${profileUrl})`,
}))

const ContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9
})

const CircularProfileImage = styled('div')({
  width: '20vw',
  height: '20vw',
  borderRadius: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  border: '7px solid #fff'
}, ({profileUrl, theme}) => ({
  backgroundImage: `url(${profileUrl})`,
  boxShadow: theme.shadows.high
}))

const Subtitle = styled('span')({
  width: '100%',
  fontStyle: 'italic',
  fontSize: 18,
  marginTop: 5
})

export default class HeroHeader extends React.Component{
  render(){
    const { header } = this.props;
    const { profileUrl, fullName, subtitle } = header;
    console.log(header);
    return(
      <Wrapper>
        <ContentWrapper>
          <CircularProfileImage profileUrl={profileUrl} />
          <Name>{fullName}</Name>
          <Subtitle>{subtitle}</Subtitle>
          {/* <SocialLinks></SocialLinks> */}
        </ContentWrapper>
        <BlurredImageWrapper>
          <BlurredImage profileUrl={profileUrl} />
        </BlurredImageWrapper>
        <Curve src={curveSrc} />
      </Wrapper>
    )
  }
}
