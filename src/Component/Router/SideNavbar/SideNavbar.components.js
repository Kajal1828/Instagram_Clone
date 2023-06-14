import React, { PureComponent } from "react";
import "./SideNav.scss";
import Home from "../../Images/homee.svg"
import Search from "../../Images/search.png"
import Explore from "../../Images/explore.png"
import Reels from "../../Images/instagram-reels.svg"
import messenger from "../../Images/messenger.png"
import Heart from "../../Images/heart.png"
import Create from "../../Images/add-button.png"
import Avtar from "../../Images/Avtar.jpg"
import Menu from "../../Images/menu.png"

export default class SideNavbarComponents extends PureComponent {
  render() {
    return (
        <div className="sidenav">
        <img
          className="sidenav__logo"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          alt="Instagram Logo"
        />
  
        <div className="sidenav__buttons">
          <button className="sidenav__button">
            <img src={Home} alt="" />
            <span style={{marginLeft: "20px"}}>Home</span>
          </button>
          <button className="sidenav__button">
            <img src={Search} alt="" />
            <span style={{marginLeft: "15px"}}>Search</span>
          </button>
          <button className="sidenav__button">
            <img src={Explore} alt="" />
            <span style={{marginLeft: "20px"}}>Explore</span>
          </button>
          <button className="sidenav__button">
            <img src={Reels} alt="" width={30}/>
            <span style={{marginLeft: "15px"}}>Reels</span>
          </button>
          <button className="sidenav__button">
            <img src={messenger} alt=""/>
            <span style={{marginLeft: "20px"}}>Messages</span>
          </button>
          <button className="sidenav__button">
             <img src={Heart} alt="" />
            <span>Notifications</span>
          </button>
          <button className="sidenav__button">
          <img src={Create} alt="" />
            <span>Create</span>
          </button>
          <button className="sidenav__button">
              <img src={Avtar} alt="" className="sidenavimg"/>
              <span style={{marginLeft: "12px"}}>Profile</span>
            </button>
        </div>
        <div className="sidenav__more">
          <button className="sidenav__button">
            <img src={Menu} alt="" />
            <span className="sidenav__buttonText">More</span>
          </button>
        </div>
      </div>
    )
  }
}
