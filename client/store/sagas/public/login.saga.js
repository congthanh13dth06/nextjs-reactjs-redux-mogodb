// import AppServices from '../../../app.services'
// import WorkerSaga from '../worker.saga'

class LoginSaga {

  constructor() {
    if (!LoginSaga.instance) {
      this.appService = AppServices
      LoginSaga.instance = this
    }
    return LoginSaga.instance
  }

  // * checkUsername(action) {
  //   this.appService.services.logger.info('LoginSaga excute checkUsername')
  //   this.appService.services.logger.debug('Receive action', action)
  //   try {
  //     const response = yield this.appService.apis.login.checkUsername(action)
  //     this.appService.services.logger.debug('LoginSaga checkUsername Receive response', response)
  //     this.appService.services.validator.isNotEmpty('', response, 'Response data is null')
  //     response.key = action.key
  //     yield WorkerSaga.save(response)
  //   } catch (e) {
  //     this.appService.services.logger.error(`LoginSaga checkUsername ${e.message}`)
  //   }
  // }

}

export default new LoginSaga()
