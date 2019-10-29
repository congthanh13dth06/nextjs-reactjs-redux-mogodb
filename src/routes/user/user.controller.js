'use strict'

import UserModel from './user.model'
import AppService from '../../services/app.service'

class UserController {

  constructor() {
    if (!UserController.instance) {
      this.userModel = UserModel
      this.logger = AppService.logger
      this.httpCode = AppService.httpCode
      this.responseCode = AppService.responseCode
      UserController.instance = this
    }
    return UserController.instance
  }

  async getAll(request, response, next) {
    this.logger.info('UserController excute getAll')
    try {
      const result = await this.userModel.getAll()
      const responseData = {
        code: this.responseCode.GET_ALL_USER_SUCCESS,
        data: result,
        message: this.responseCode[this.responseCode.GET_ALL_USER_SUCCESS]
      }
      this.logger.response(`Response data`, responseData)
      response
        .status(this.httpCode.OK)
        .json(responseData)
    } catch (e) {
      this.logger.error(`UserController getAll ${e.toString()}`)
      const responseData = {
        code: this.responseCode.SYSTEM_ERROR,
        data: {},
        message: this.responseCode[this.responseCode.SYSTEM_ERROR]
      }
      response
        .status(this.httpCode.OK)
        .json(responseData);
    }
  }

  async getUserById(request, response, next) {
    this.logger.info('UserController excute getUserById')
    this.logger.debug("Receive payload", request.params.id)
    try {
      const result = await this.userModel.getUserById(request.params.id);
      const responseData = {
        code: this.responseCode.GET_USER_BY_ID_SUCCESS,
        data: result,
        message: this.responseCode[this.responseCode.GET_USER_BY_ID_SUCCESS]
      }
      this.logger.response(`Response data`, responseData)
      response
        .status(this.httpCode.OK)
        .json(responseData)
    } catch (e) {
      this.logger.error(`UserController getUserById ${e.toString()}`)
      const responseData = {
        code: this.responseCode.SYSTEM_ERROR,
        data: {},
        message: this.responseCode[this.responseCode.SYSTEM_ERROR]
      }
      response
        .status(this.httpCode.OK)
        .json(responseData);
    }
  }

  async create(request, response, next) {
    this.logger.info('UserController excute create')
    this.logger.debug("Receive payload", request.body)
    try {
      const result = await this.userModel.create(request.body)
      const responseData = {
        code: this.responseCode.CREATE_USER_SUCCESS,
        data: result,
        message: this.responseCode[this.responseCode.CREATE_USER_SUCCESS]
      }
      this.logger.response(`Response data`, responseData)
      response
        .status(this.httpCode.OK)
        .json(responseData)
    } catch (e) {
      this.logger.error(`UserController create ${e.toString()}`)
      const responseData = {
        code: this.responseCode.SYSTEM_ERROR,
        data: {},
        message: this.responseCode[this.responseCode.SYSTEM_ERROR]
      }
      response
        .status(this.httpCode.OK)
        .json(responseData);
    }
  }

}

export default new UserController()
