import React, { PureComponent } from 'react';
import SignupComponents from './Signup.components';
import {withRouter} from '../../Router/SignupPage/WithRouter';


  class SignupContainer extends PureComponent {
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
      this.props.navigate('/home')
      console.log(true)
    
      
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

export default withRouter(SignupContainer);

