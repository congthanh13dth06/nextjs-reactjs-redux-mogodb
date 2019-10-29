'use strict'

import Mongoose from 'mongoose'

import config from '../../config/app.conf.json'
import LoggerService from '../logger/logger.service'

class MongoService {

  constructor() {
    if (!MongoService.instance) {
      this.connection = this.connect.bind(this)()
      MongoService.instance = this
    }
    return MongoService.instance
  }

  connect() {
    LoggerService.info('Mongodb start connect')
    try {
      const path = `mongodb://${config.mongoConfig.username}:${encodeURIComponent(config.mongoConfig.password)}@${config.mongoConfig.host}:${config.mongoConfig.port}/${config.mongoConfig.database}`
      LoggerService.debug('path', path)
      Mongoose.Promise = Promise
      Mongoose.connect(path, {
        useMongoClient: true,
        promiseLibrary: Promise,
        authSource: config.mongoConfig.authSource,
        reconnectTries: config.mongoConfig.reconnectTries,
        reconnectInterval: config.mongoConfig.reconnectInterval,
        connectTimeoutMS: config.mongoConfig.connectTimeoutMS,
        poolSize: config.mongoConfig.poolSize
      })
      // Mongoose.connection.on('open', () => {
      //   Mongoose.connection.db.listCollections().toArray(function (err, names) {
      //     console.log(names);
      //   });
      // })
      Mongoose.connection.on('connected', () => {
        LoggerService.info('MongoService connected successfully')
      })
      Mongoose.connection.on('reconnected', () => {
        LoggerService.info('MongoService reconnected successfull')
      })
      Mongoose.connection.on('error', (err) => {
        LoggerService.error(`MongoService ${err}`)
      })
      Mongoose.connection.on('disconnected', () => {
        LoggerService.warn(`MongoService disconnected`)
      })
      return Mongoose.connection
    } catch (e) {
      LoggerService.error(`Mongodb connect ${e.toString()}`)
    }
  }

  getConnection() {
    return this.connection
  }

}

export default new MongoService();
