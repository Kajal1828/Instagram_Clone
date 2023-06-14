import React, { PureComponent } from 'react';
import LoginComponents from './LoginComponents';

export default class LoginContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logging in...');
  }

  render() {
    return (
      <LoginComponents
        username={this.state.username}
        password={this.state.password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      >
        <div className="forgot-password">
          <Link to="/signup">Forgot Password?</Link>
          <p>
            Don't have an account?
            <Link to="/login"> SignUp</Link>
          </p>
        </div>
      </LoginComponents>
    );
  }
}

