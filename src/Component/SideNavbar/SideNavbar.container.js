import React, { PureComponent } from 'react'
import SideNavbarComponents from './SideNavbar.components'

export default class SideNavbarContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state= {
          uploadedImage: null,
         }
    }
    handleImageUpload = (event) => {
      const file = event.target.files[0];
      this.setState({ uploadedImage: file });
    };
  render() {
    return (
      <div>
        <SideNavbarComponents
          image={this.state.image}
          description={this.state.description}
          onImageChange={this.handleImageChange}
          onDescriptionChange={this.handleDescriptionChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
