import React, { PureComponent } from 'react'
import SideNavbarComponents from './SideNavbar.components'

export default class SideNavbarContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state= {
          uploadedImage: null,
          showLogoutPopup: false,
         }
    }
    handleImageUpload = (event) => {
      const file = event.target.files[0];
      this.setState({ uploadedImage: file });
    };

    LoghandlePopup = () => {
      this.setState((prevState) => ({
        showLogoutPopup: !prevState.showLogoutPopup,
      }));
    };

    handleLogout = () =>{
    
      window.location.href = '/'
    }
  render() {
    const {popup,handlePopup} =this.props
    return (
      <div>
        <SideNavbarComponents
          image={this.state.image}
          description={this.state.description}
          onImageChange={this.handleImageChange}
          onDescriptionChange={this.handleDescriptionChange}
          onSubmit={this.handleSubmit}
          handlePopup={handlePopup}
          LoghandlePopup={this.LoghandlePopup}
          showLogoutPopup={this.state.showLogoutPopup}
          handleLogout={this.handleLogout}
          
          
        />
      </div>
    )
  }
}
