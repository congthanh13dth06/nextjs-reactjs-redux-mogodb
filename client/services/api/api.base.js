import axios from 'axios'

// import AppConfig from '../../../config/app.conf.json'
// import EnvConfig from '../../../config/env.conf.json'
// import LoggerService from '../logger/logger.service'
// import ValidatorCommonResponse from '../validation/response/common.response'
// import ApiConstant from '../constants/api'
// import CookiesService from '../cookies/cookies.service'

export default class BaseApiService {

  constructor() {
    // this.logger = LoggerService
    // this.config = AppConfig
    // this.validatorCommonResponse = ValidatorCommonResponse
    // this.apiConstant = ApiConstant
    // this.axios = axios.create({
    //   baseURL: EnvConfig[EnvConfig.CURRENT].API,
    //   timeout: this.config.REQUEST_TIMEOUT
    // });
    // this.action = ''
    // this.cookies = CookiesService
    // this.request = this.request.bind(this)
    // this.response = this.response.bind(this)
  }

  // request(options, action = '') {
  //   this.logger.info('BaseApiService exucte request')
  //   this.logger.debug(`Receive options`, options)
  //   this.logger.debug(`Receive action`, action)
  //   try {
  //     this.action = action
  //     return this.axios.request(options)
  //   } catch (e) {
  //     this.logger.error(`BaseApiService request error ${e.toString()}`)
  //   }
  // }
  //
  // response(response) {
  //   this.logger.info('BaseApiService excute response')
  //   this.logger.debug('Receive response', response)
  //   try {
  //     return this.validatorCommonResponse.common(response.status, response.data, this.action)
  //   } catch (e) {
  //     this.logger.error(`BaseApiService response ${e.message.toString()}`)
  //     return null
  //   }
  // }

}
