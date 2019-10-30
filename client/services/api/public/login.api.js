/**
 * Created By Nguyen Cong Thanh on 09/05/2019 11:26.
 *
 * Copyright Intelin 2019.
 */

import BaseApiService from '../base.api'

class LoginApiService extends BaseApiService {

  constructor() {
    if (!LoginApiService.instance) {
      super();
      LoginApiService.instance = this
    }
    return LoginApiService.instance
  }

  * checkToken(action) {
    this.logger.info('LoginApiService excute checkToken')
    this.logger.debug('Receive action', action)
    try {
      const options = {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          'token': action.token
        },
        url: this.apiConstant.USER.AUTH
      }
      return yield this.request(options)
        .then((this.response.bind(this)))
    } catch (e) {
      this.logger.error(`LoginApiService checkToken ${e.toString()}`)
      return null
    }
  }

}

export default new LoginApiService()
