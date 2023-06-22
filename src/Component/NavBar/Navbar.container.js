import React, { PureComponent } from 'react'
import NavbarComponents from './Navbar.components'

export default class NavbarContainer extends PureComponent {
    constructor(props){
        super(props);
      }
  render() {
    return (
      <div>
        <NavbarComponents/>
      </div>
    )
  }
}
