import React, { PureComponent } from 'react'
import "./Signup.scss"
import { NavLink } from 'react-router-dom';

export default class SignupComponents extends PureComponent {
  render() {
    const {email, fullName, username, password, handleChange ,handleSubmit} = this.props;
    return (
    <>
    <div className='signup-container'>
        <div className='signup-card'>
        <img
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="Instagram logo"
            className="logo"
        />
        <h2 className='heading'>Sign up to see photos and videos from your friends.</h2>
        <button className='button1'><NavLink to="https://www.facebook.com/login/">Log in with Facebook</NavLink></button>
        <p className='line'> or </p>
        <form  onSubmit={handleSubmit} className='sign'>
            <input
              type="text"
              name="email"
              placeholder="Mobile Number, or Email"  
              value={email}
              onChange={handleChange} 
              required           
            />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={fullName} 
              onChange={handleChange} 
              required              
            />
            <input
              type="text"
              name="username"
              placeholder="Username"  
              value={username}
              onChange={handleChange}    
              required          
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required  
            />
            <p className='para'>People who use our service may have uploaded your contact information to Instagram.Learn More</p>
            <p className='para'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy</p>
            <button type="submit" >Sign up</button>
          </form>

          <div className='asking'>
            <p>Have an account? <NavLink to= "/">Log in</NavLink> </p>

          </div>



        </div>

    </div>

    </>
    )
  }
}
