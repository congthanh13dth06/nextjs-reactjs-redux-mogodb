/**
 * Created By Nguyen Cong Thanh on 15/09/2019 13:46.
 *
 * Copyright Intelin 2019.
 */

import { takeLatest } from 'redux-saga/effects'

// import ActionType from '../actions/action.type'

class WatcherSaga {

  constructor() {
    if (!WatcherSaga.instance) {
      // this.actionType = ActionType
      WatcherSaga.instance = this
    }
    return WatcherSaga.instance
  }

  // * watchLoginCheckUsername() {
  //   yield takeLatest(this.actionType.LOGIN_CHECK_USERNAME, PublicLoginSaga.checkUsername.bind(PublicLoginSaga))
  // }
  //
  // * watchLoginCheckPassword() {
  //   yield takeLatest(this.actionType.LOGIN_CHECK_PASSWORD, PublicLoginSaga.checkPassword.bind(PublicLoginSaga))
  // }
  //
  
}

export default new WatcherSaga()
