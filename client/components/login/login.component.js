/**
 * Created By Nguyen Cong Thanh on 29/10/2019 14:05.
 *
 * Copyright Intelin 2019.
 */

'use strict'

import React, { Fragment, Component } from 'react'

import LoginHtml from '../base/login/login.html'

export default class LoginComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    console.log(this.props)

    return (
      <LoginHtml />

    )

  }

}
