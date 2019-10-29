'use strict'

import React from 'react';
import {StaticRouter} from 'react-router'
import {BrowserRouter} from 'react-router-dom';

const isServer = typeof window === 'undefined';

export default App => {
  return class AppWithReactRouter extends React.Component {
    render() {
      if (isServer) {
        return (
          <StaticRouter
            location={this.props.router.asPath}
          >
            <App {...this.props} />
          </StaticRouter>
        );
      }
      return (
        <BrowserRouter>
          <App {...this.props} />
        </BrowserRouter>
      );
    }
  };
};
