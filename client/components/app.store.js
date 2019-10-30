/**
 * Created By Nguyen Cong Thanh on 30/10/2019 15:02.
 *
 * Copyright Intelin 2019.
 */

'use strict'

import 'regenerator-runtime/runtime'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import combineReducers from '../store/root.reducer'
import rootSaga from '../store/root.saga'
// import CacheData from '../services/cache/cache.data'
// import AuthenType from '../services/authen/authen.type'
import Logger from '../services/logger/logger.service'

export const makeStore = (initialState, options) => {
  try {
    // const authen = CacheData.getAuthen()
    // const allReducer = CacheData.getAllReducer()
    const sagaMiddleware = createSagaMiddleware();
    // let store;
    // if (authen && authen !== AuthenType.PUBLIC && allReducer) {
    //   store = createStore(combineReducers, allReducer, applyMiddleware(sagaMiddleware));
    // } else {
    //   store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
    // }
    const store = createStore(combineReducers, initialState, applyMiddleware(sagaMiddleware));
    store.subscribe(() => {
      Logger.info('Store excute get state')
      Logger.log(store.getState())
    })
    sagaMiddleware.run(rootSaga)
    return store
  } catch (e) {
    console.log('Make Store Error', e.toString())
  }
}
