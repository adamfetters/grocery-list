import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';


class LoginPage extends Component {
  submit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1 className="login-header">Login Page</h1>

        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
