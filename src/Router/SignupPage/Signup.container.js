import React, { PureComponent } from 'react';
import SignupComponents from './Signup.components';
import {
  Form,
  useLoaderData,
  redirect,
} from "react-router-dom";
import PropTypes from 'prop-types';

var users={
    name:'bddebashis',
    password:'debashis111249'
    }
 export default class SignupContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  static contextTypes = {
    router: PropTypes.object,
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('kkkkkkkkk');

    const { email, fullName, username, password } = this.state;

fetch('http://localhost:3000/user', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, fullName, username, password }),
})
  .then((res) => {
    console.log(res);
    if (res.status === 201) {
      // navigation.push('/home');
      console.log(true)
      this.context.router.history.push("/") 
      return redirect(`/`);
      
    } else {
      throw new Error('failed');
    }
  })
  .catch((error) => console.log(error));

  };

  render() {
    return (
      <>
        <SignupComponents
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

