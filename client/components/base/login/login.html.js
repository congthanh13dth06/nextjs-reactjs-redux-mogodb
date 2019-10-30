/**
 * Created By Nguyen Cong Thanh on 29/10/2019 14:05.
 *
 * Copyright Intelin 2019.
 */

import React, { Fragment } from 'react'
import Router from 'next/router'

import ButtonCompoent from '../button/button.component'

const LoginHtml = props => {

  return (
    <Fragment>
      <h2>This is page Login</h2>
      <ButtonCompoent text={"Ahihi"} onClick={(event) => {event.preventDefault(); Router.push('/user/dashboard')}} />
    </Fragment>
  )

}

export default LoginHtml
