'use strict'

import AppService from '../../services/app.service'

class UserModel {

  constructor() {
    if (!UserModel.instance) {
      this.logger = AppService.logger;
      this.model = ''
      UserModel.instance = this
    }
    return UserModel.instance
  }

  async getAll() {
    this.logger.info('UserModel excute getAll')
    try {
      const db = AppService.mongo.getConnection()
      // const result = await this.model.find({"name": "Ajitesh Shukla"})
      const result = await db.collection('userRegister').find({}).toArray()
      this.logger.debug('Result', result)
      return result
    } catch (e) {
      throw new Error(`${e.toString()}`)
    }
  }

  async getUserById(id) {
    this.logger.info('UserModel excute getUserById')
    this.logger.debug('Receive id', id)
    try {
      const db = AppService.mongo.getConnection()
      // const result = await this.model.findById(id).exec()
      const result = await db.collection('cif').find({}).toArray()
      this.logger.debug('Result', result)
      return result
    } catch (e) {
      throw new Error(`${e.toString()}`)
    }
  }

  async create(payload) {
    this.logger.info('UserModel excute create')
    this.logger.debug('Receive payload', payload)
    try {
      const user = new this.model(payload);
      const result = await user.save()
      this.logger.debug('Result', result)
      return result
    } catch (e) {
      throw new Error(`${e.toString()}`)
    }
  }

}

export default new UserModel()
