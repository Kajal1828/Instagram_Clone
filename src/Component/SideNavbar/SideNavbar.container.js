import React, { PureComponent } from 'react'
import SideNavbarComponents from './SideNavbar.components'

export default class SideNavbarContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state= {
         }
    }
  render() {
    return (
      <div>
        <SideNavbarComponents/>
      </div>
    )
  }
}
