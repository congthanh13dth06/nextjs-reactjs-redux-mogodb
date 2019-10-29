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
