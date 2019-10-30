/**
 * Created By Nguyen Cong Thanh on 24/09/2019 11:11.
 *
 * Copyright Intelin 2019.
 */

'use strict'

import React, { Component, Fragment } from 'react';
import Router from 'next/router'

class HomePage extends Component {

  componentDidMount() {
    Router.push('/login')
  }

  render() {
    return (
      <Fragment></Fragment>
    )
  }

}

export default HomePage;
