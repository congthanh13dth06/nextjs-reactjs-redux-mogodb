'use strict'

import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";

import { makeStore } from './app.store';
import withReactRouter from './app.route';

class AppComponent extends App {

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

}

export default withRedux(makeStore)(withReactRouter(AppComponent));
