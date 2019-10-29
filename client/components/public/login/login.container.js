'use strict'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import LoginComponent from './login.component'

// import LoginAction from '../../../store/actions/public/login.action'

const mapStateToProps = (reducer) => {
  return {
    reducer: reducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent))
