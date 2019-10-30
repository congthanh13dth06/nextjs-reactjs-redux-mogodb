/**
 * Created By Nguyen Cong Thanh on 29/10/2019 13:47.
 *
 * Copyright Intelin 2019.
 */

import React, { Component, Fragment } from 'react';
import aixos from 'axios'

import LoginComponent from '../components/login/login.container'

class LoginPage extends Component {

  static async getInitialProps() {
    // const users = await axios.get('/api/user')
    return {
      users: []
    }
  }

  render() {
    return (
      <LoginComponent {...this.props} />
    )
  }

}

export default LoginPage;
