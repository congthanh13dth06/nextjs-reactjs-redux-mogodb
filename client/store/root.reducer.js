/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:33.
 *
 * Copyright Intelin 2019.
 */

import { combineReducers } from 'redux'

import authReducer from './reducers/auth'

export default combineReducers({
  auth: authReducer
})
