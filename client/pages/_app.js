/**
 * Created By Nguyen Cong Thanh on 30/10/2019 15:02.
 *
 * Copyright Intelin 2019.
 */

import React, { Fragment } from "react";
import { Provider } from "react-redux";
import App from "next/app";
import Head from 'next/head'
import withRedux from "next-redux-wrapper";
import { CssBaseline } from "@material-ui/core";

import { makeStore } from '../components/app.store';

class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    const pageProps = (Component.getInitialProps) ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  render() {

    const { Component, pageProps, store, router } = this.props;

    return (
      <Fragment>
        <Head>
          <title>IFDS-TELLER</title>
        </Head>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} router={router} />
        </Provider>
      </Fragment>
    );
  }

}

export default withRedux(makeStore)(MyApp);
