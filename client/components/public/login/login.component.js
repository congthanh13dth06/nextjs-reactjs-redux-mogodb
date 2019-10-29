'use strict'

import React, { Fragment, Component } from 'react'

import LoginHtml from '../../base/public/login/login.html'

export default class LoginComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    console.log(this.props.reducer)

    return (
      <LoginHtml />

    )

  }

}
