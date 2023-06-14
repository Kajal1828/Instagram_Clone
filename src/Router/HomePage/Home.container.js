import React, { PureComponent } from 'react'
import HomeComponents from './Home.components';

export default class HomeContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state = { }
  }
  render() {
    return (
      <>
      <HomeComponents {...this.props}/>
      </>
    )
  }
}
