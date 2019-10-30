/**
 * Created By Nguyen Cong Thanh on 04/04/2019 09:34.
 *
 * Copyright Intelin 2019.
 */

import { all } from 'redux-saga/effects'

// import WatcherSaga from './sagas/watcher.saga'

export default function* rootSaga() {

  yield all([
    // WatcherSaga.watchLoginCheckUsername(),
    // WatcherSaga.watchLoginCheckPassword(),
    // WatcherSaga.watchLoginCheckToken(),
    // WatcherSaga.watchLoginLogout(),
  ])

}
