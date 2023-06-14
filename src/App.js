import React, { Component } from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignupComponents from './Router/SignupPage'
import HomeComponents from './Router/HomePage'
import LoginComponents from './Router/LoginPage/Login.components'

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

