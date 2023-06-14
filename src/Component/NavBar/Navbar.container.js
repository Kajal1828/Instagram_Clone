import React, { PureComponent } from 'react'
import NavbarComponents from './Navbar.components'

export default class NavbarContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state={
          
        }
      }
  render() {
    return (
      <div>
        <NavbarComponents/>
      </div>
    )
  }
}
