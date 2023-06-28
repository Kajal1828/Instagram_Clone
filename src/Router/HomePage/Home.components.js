import React, { PureComponent } from 'react'
import MainContentContainer from '../MainContent';
import "./Home.scss"
import NavbarContainer from '../../Component/NavBar/Navbar.container';
import FooterContainer from '../../Component/Footer/Footer.container';

export default class HomeComponents extends PureComponent {
  render() {
    return (
      <div className='kk'>
      <NavbarContainer/>
      <MainContentContainer/>
      <FooterContainer/>
      </div>
    )
  }
}
