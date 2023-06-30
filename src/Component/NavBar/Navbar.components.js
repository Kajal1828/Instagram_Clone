
import React, { PureComponent } from 'react'
import "./Navbar.scss"
import Heart from '../Images/heart.png'
import Create from '../Images/add-button.png'




export default class NavbarComponents extends PureComponent {
  render() {
    const{ handlePopup, onImageUpload} = this.props
    return (
      <>
        <nav className='navbar'>
            <div className='navbar-logo'>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="" />
            </div>
            <div className='homeIcon'>               
               <img src={Create} alt=""  onClick={handlePopup}/>

            <input
             type="file"
             style={{ display: 'none' }}
             ref={(ref) => (this.uploadInput = ref)}
             onChange={onImageUpload}
           />

               
               <img src={Heart} alt="" />
            </div>            
        </nav>
      </>
    )
  }
}
