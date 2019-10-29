import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import CssBaseline from "@material-ui/core/CssBaseline";

const UserComponent = props => {

  return (
    <Fragment>
      <Head>
        <title>REACT-FULLSTACK</title>
        // <link rel="shortcut icon" href="/static/fav.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <CssBaseline />
      {props.children}
    </Fragment>
  )
}

export default UserComponent
