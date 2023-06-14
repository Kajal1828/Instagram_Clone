import React, { Component } from 'react'
import LoginComponents from './Component/Router/LoginPage/Login.components'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignupComponents from './Component/Router/SignupPage'
// import HomeComponents from './Component/Router/HomePage/Home.components'
// import Home from './Component/Router/HomePage/Home'
// import NavbarContainer from './Component/Router/NavBar/Navbar.container'
import HomeComponents from './Component/Router/HomePage'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <LoginComponents/> */}
        {/* <SignupComponents/> */}
        <BrowserRouter > 
        <Routes>
          <Route path='/'  element={<LoginComponents/>}></Route>
          <Route path='/signup'  element={<SignupComponents/>}></Route>
          <Route path='/home'  element={<HomeComponents/>}></Route>
        </Routes>
        
        </BrowserRouter>
        {/* <Home/> */}
        

      </div>
    )
  }
}

