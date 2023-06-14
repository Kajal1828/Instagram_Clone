import React, { PureComponent } from 'react'
import "./Navbar.css"
import Home from '../../Images/homee.svg'
import Messanger from '../../Images/messenger.png'
import Heart from '../../Images/heart.png'
import Explore from '../../Images/explore.png'
import Avtar from '../../Images/Avtar.jpg'



export default class NavbarComponents extends PureComponent {
  render() {
    return (
        <>
        <div>

<nav className='navbar'>
    <div className='navbar-logo'>
    <img src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="" />
    </div>
    <div className='navbar-search'>
        <form>
            <input type="text" placeholder="Search"/>
        </form>
    </div>
    <div className="homeIcon">
       <img src={Home} alt="home" />
       <img src={Messanger} alt="" />
       <img src={Explore} alt="" />
       <img src={Heart} alt="" />
       <img src={Avtar} alt=""  style={{"maxHeight": "28px","maxWidth": "28px" ,"border-radius" : "50%"}}/>

    </div>
</nav>
</div>
        </>
      
    )
  }
}
