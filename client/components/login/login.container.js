/**
 * Created By Nguyen Cong Thanh on 29/10/2019 14:05.
 *
 * Copyright Intelin 2019.
 */

'use strict'

import { connect } from 'react-redux';

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
