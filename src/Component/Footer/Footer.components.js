import React, { PureComponent } from 'react'
import './Footer.scss'
import Home from '../Images/homee.svg'
import Messanger from '../Images/messenger.png'
import Search from '../Images/search.png'
import Reel from '../Images/instagram-reels.svg'
import Avtar from '../Images/Avtar.jpg'

export default class FooterComponents extends PureComponent {
  render() {
    const {LoghandlePopup , showLogoutPopup , handleLogout} = this.props;
    return (
      <>
      <div className='navbar2'>
            <img src={Home} alt='' />
            <img src={Search} alt="" />
            <img src={Reel} alt="" />
            <img src={Messanger} alt="" />
            <img src={Avtar} alt=""  className='avtar'  onClick={LoghandlePopup}/>
            {showLogoutPopup && (
              <div className="logout-popup">
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
      </div>
      </>
    )
  }
}
