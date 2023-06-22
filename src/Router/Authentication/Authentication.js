import React, { Component } from 'react'
import Login from '../LoginPage'
import HomeContainer from '../HomePage';
import { withRouterr } from './withRouterr';

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      toast:false,
      authenthication: false,
    };
  }
   
  handleAuthication = () =>{
    const {username, password} =this.state
    fetch('http://localhost:3000/user')
    .then((res) => res.json())
    .then((res) =>
      res.find((item)=>{
        console.log(item)
      if(item.username === username){
        if(item.password === password) {
          this.props.navigate('/home')
        }
      }
      else{
        this.setState({
          authenthication: false
          
        })
        return false
      }
   
    }))
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        {this.state.authenthication ? <HomeContainer /> :
        <Login 
         username={this.state.username}
         password={this.state.password}
         handleChange={this.handleChange}
         handleAuthication={this.handleAuthication}
         toast={this.state.toast}
        />}
      </div>
    )
  }
}
export default withRouterr(Authentication)

