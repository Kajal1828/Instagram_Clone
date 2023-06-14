import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import "./Login.scss"
export default class LoginComponents extends PureComponent {
  render() {
    const { username, password, handleChange, handleSubmit } = this.props;
    return (
      <div className="login-container">
        <div className="login-card">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            alt="Instagram logo"
            className="logo"
          />
          <form onSubmit={handleSubmit} className='login'>
            <input
              type="text"
              name="username"
              placeholder="Phone number, username, or email"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit" className='submit'>Log In</button>
          </form>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
            <p>
              Don't have an account?
              <Link to="/signup"> SignUp</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

