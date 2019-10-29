'use strict'

import React, { Component, Fragment } from 'react';
import Router from 'next/router'

class IndexComponent extends Component {

  componentDidMount() {
    Router.push('/public/login')
  }

  render() {
    return (
      <Fragment></Fragment>
    )
  }

}

export default IndexComponent;
