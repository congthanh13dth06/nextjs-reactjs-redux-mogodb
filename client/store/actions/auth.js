/**
 * Created By Nguyen Cong Thanh on 07/10/2019 10:27.
 *
 * Copyright Intelin 2019.
 */

// import ActionType from './action.type'
// import AppServices from '../../app.services'

class MessageCenterReducer {

  constructor() {
    if (!MessageCenterReducer.instance) {
      // this.actionType = ActionType
      // this.logger = AppServices.services.logger
      MessageCenterReducer.instance = this
    }
    return MessageCenterReducer.instance
  }

  // update(response) {
  //   this.logger.info('MessageCenterReducer excute update')
  //   this.logger.debug('Receive response', response)
  //   try {
  //     return {
  //       type: this.actionType.MESSAGE_CENTER_UPDATE,
  //       payload: response
  //     }
  //   } catch (e) {
  //     this.logger.error(`MessageCenterReducer update ${e.message.toString()}`)
  //   }
  // }

}

export default new MessageCenterReducer()
