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
