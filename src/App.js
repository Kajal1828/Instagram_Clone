import React, { Component } from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignupComponents from './Router/SignupPage'
import HomeComponents from './Router/HomePage'
import Authentication from './Router/Authentication/Authentication'
export default class App extends Component {
  
  render() {
    return (
      <div>
       
        <BrowserRouter > 
        <Routes>
          <Route path='/'  element={<Authentication/>}></Route>
          <Route path='/signup'  element={<SignupComponents/>}></Route>
          <Route path='/home'  element={<HomeComponents/>}></Route>
        </Routes>
        
        </BrowserRouter>
        

      </div>
    )
  }
}

