import React from 'react'

export default class HeroHeader extends React.Component{
  render(){
    const { header } = this.props;
    console.log(header);
    return(
      <div>Hero Header</div>
    )
  }
}
