import React, { PureComponent } from 'react'
import './SideNav.scss'
import Home from '../Images/homee.svg'
import Search from '../Images/search.png'
import Explore from '../Images/explore.png'
import Reels from '../Images/instagram-reels.svg'
import messenger from '../Images/messenger.png'
import Heart from '../Images/heart.png'
import Create from '../Images/add-button.png'
import Avtar from '../Images/Avtar.jpg'
import Menu from '../Images/menu.png'

export default class SideNavbarComponents extends PureComponent {
  render() {
    const { onImageUpload  , handlePopup , LoghandlePopup , showLogoutPopup , handleLogout} = this.props;
    return (
      <div className='sidebar'>
        <header className='sidebar-header'>
        <img
          className="logo-img"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          alt="Instagram Logo"
        />
        </header>
        <nav>

            <button>
                <span>
                <img src={Home} alt="" />
                <span>Home</span>
                </span>
            </button>

            <button>
                <span>
                <img src={Search} alt="" />
                <span>Search</span>
                </span>
            </button>

            <button>
                <span>
                <img src={Explore} alt="" />
                <span>Explore</span>
                </span>
            </button>

            <button>
                <span>
                <img src={Reels} alt="" width={30}/>
                <span>Reels</span>
                </span>
            </button>

            <button>
                <span>
                <img src={messenger} alt=""/>
                <span>Messages</span>
                </span>
            </button>

            <button>
                <span>
                <img src={Heart} alt="" />
                <span>Notifications</span>
                </span>
            </button>

            <button onClick={handlePopup}>
                <span>
                <img src={Create} alt="" />
                <span>Create</span>
                </span>
            </button>

            <input
             type="file"
             style={{ display: 'none' }}
             ref={(ref) => (this.uploadInput = ref)}
             onChange={onImageUpload}
           />

            <button>
                <span>
                <img src={Avtar} alt="" />
                <span>Profile</span>
                </span>
            </button>

            {showLogoutPopup && (
              <div className="logout-popup">
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}

            <button onClick={LoghandlePopup}>
                <span>
                <img src={Menu} alt="" />
                <span>More</span>
                </span>
            </button>
        </nav>

      </div>
    )
  }
}
