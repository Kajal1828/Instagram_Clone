import React, { PureComponent } from 'react'
import FooterComponents from './Footer.components'

export default class FooterContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state= {
      uploadedImage: null,
      showLogoutPopup: false,
     }
}

  LoghandlePopup = () => {
    this.setState((prevState) => ({
      showLogoutPopup: !prevState.showLogoutPopup,
    }));
  };

  handleLogout = () =>{
  
    window.location.href = '/'
  }
  render() {
    return (
      <>
       <FooterComponents
       LoghandlePopup={this.LoghandlePopup}
       handleLogout={this.handleLogout}
       showLogoutPopup={this.state.showLogoutPopup}
       />
       
       
      </>
    )
  }
}
