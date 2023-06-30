import React, { PureComponent } from 'react'
import NavbarComponents from './Navbar.components'

export default class NavbarContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state={
    popup:false,
    postImageURL: "",
    }
  }
      handlePopup=()=>{
        this.setState((prev)=>({
            popup:!prev.popup
        }))
      }
  render() {
    const {handlePopup} =this.props
    return (
      <div>
        <NavbarComponents   {...this.state} 
        handlePopup={handlePopup}
      
        />
      </div>
    )
  }
}
