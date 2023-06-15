import React, { PureComponent } from 'react';
import LoginComponents from './Login.components';
import { Link } from 'react-router-dom';

export default class Login extends PureComponent {
  render() {
    return (
      <LoginComponents
      username={this.props.username}
      password={this.props.password}
      handleChange={this.props.handleChange}
      handleAuthication={this.props.handleAuthication}
      />

    );
  }
}

