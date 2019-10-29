import { put } from 'redux-saga/effects'

// import AppServices from '../../app.services'
// import ActionType from '../actions/action.type'

class WorkerSaga {

  constructor() {
    if (!WorkerSaga.instance) {
      this.code = new Map([])
      // this.code.set(AppServices.code.message.OTP_REQUIRE_SUCCESS, this.putOtpUpdate.bind(this))

      WorkerSaga.instance = this
    }
    return WorkerSaga.instance
  }

  // * save(response, isMessageCenterUpdate = true) {
  //   AppServices.services.logger.info('WorkerSaga excute save')
  //   AppServices.services.logger.debug('Receive data', response)
  //   try {
  //     if (this.code.has(response.code)) {
  //       yield this.code.get(response.code)(response.data)
  //     }
  //     if (this.code.has(response.codeAction)) {
  //       yield this.code.get(response.codeAction)(response.data)
  //     }
  //     if (isMessageCenterUpdate) {
  //       yield this.putMessageCenterUpdate(response)
  //     }
  //   } catch (e) {
  //     AppServices.services.logger.error(`WorkerSaga save ${e.toString()}`)
  //   }
  // }
  //
  // * putMessageCenterUpdate(payload) {
  //   AppServices.services.logger.info('WorkerSaga excute putMessageCenterUpdate')
  //   AppServices.services.logger.debug('Receive data', payload)
  //   try {
  //     yield put({
  //       type: ActionType.MESSAGE_CENTER_UPDATE,
  //       payload: payload
  //     })
  //   } catch (e) {
  //     AppServices.services.logger.error(`WorkerSaga putMessageCenterUpdate ${e.toString()}`)
  //   }
  // }
  //

}

export default new WorkerSaga()
