import React, { PureComponent } from "react";
import "./SideNav.scss";
import Home from "../Images/homee.svg"
import Search from "../Images/search.png"
import Explore from "../Images/explore.png"
import Reels from "../Images/instagram-reels.svg"
import messenger from "../Images/messenger.png"
import Heart from "../Images/heart.png"
import Create from "../Images/add-button.png"
import Avtar from "../Images/Avtar.jpg"
import Menu from "../Images/menu.png"

export default class SideNavbarComponents extends PureComponent {
  render() {
    const { onImageUpload  , handlePopup , LoghandlePopup , showLogoutPopup , handleLogout} = this.props;
    return (
      <div>
        <div className="sidenav">
        <img
          className="sidenav__logo"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          alt="Instagram Logo"
        />
  
        <div className="sidenav__buttons">
          <button className="sidenav__button">
            <img src={Home} alt="" />
            <span>Home</span>
          </button>
          <button className="sidenav__button">
            <img src={Search} alt="" />
            <span>Search</span>
          </button>
          <button className="sidenav__button">
            <img src={Explore} alt="" />
            <span>Explore</span>
          </button>
          <button className="sidenav__button">
            <img src={Reels} alt="" width={30}/>
            <span>Reels</span>
          </button>
          <button className="sidenav__button">
            <img src={messenger} alt=""/>
            <span>Messages</span>
          </button>
          <button className="sidenav__button">
             <img src={Heart} alt="" />
            <span>Notifications</span>
          </button>
          <button className="sidenav__button" onClick={handlePopup}>
            <img src={Create} alt="" />
            <span>Create</span>
          </button>
          <input
            type="file"
            style={{ display: 'none' }}
            ref={(ref) => (this.uploadInput = ref)}
            onChange={onImageUpload}
          />
          <button className="sidenav__button">
              <img src={Avtar} alt="" className="sidenavimg"/>
              <span style={{marginLeft: "12px"}}>Profile</span>
          </button>

            

        {showLogoutPopup && (
              <div className="logout-popup">
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          <button className="sidenav__buttonn" onClick={LoghandlePopup}>
            <img src={Menu} alt="" />
            <span className="sidenav__buttonText">More</span>
          </button>
       
        </div>
        
      </div>

    
      </div>    
    )
  }
}
