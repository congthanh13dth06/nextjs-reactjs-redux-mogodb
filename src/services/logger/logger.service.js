'use strict'

import path from 'path'
import fs from 'fs'

import config from '../../config/app.conf.json'

const getTime = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
}

const writeFileAccessLog = (log) => {
  if (!config.log) return
  const filePath = path.resolve(__dirname, './access.log')
  fs.stat(filePath, (err, stat) => {
    if (err === null) {
      const file = fs.appendFile(filePath, `\n${log}`, () => {})
    } else {
      const file = fs.writeFile(filePath, log, () => {})
    }
  })
}

class LoggerService {

  constructor() {
    if (!LoggerService.instance) {
      LoggerService.instance = this
    }
    return LoggerService.instance
  }

  info(content) {
    const log = `[${getTime()}] [INFO] ${content}`
    writeFileAccessLog(log)
    console.info('\x1b[36m%s\x1b[0m', log)
  }

  response(message, content) {
    const log = `[${getTime()}] [RESPONSE] ${message} ${JSON.stringify(content)}`
    writeFileAccessLog(log)
    console.log('\x1b[32m%s\x1b[0m', log)
  }

  debug(message, content) {
    const log = `[${getTime()}] [DEBUG] ${message} ${JSON.stringify(content)}`
    writeFileAccessLog(log)
    console.debug(log)
  }

  trace(content) {
    writeFileAccessLog(log)
    console.trace(`[${getTime()}] [TRACE] ${JSON.stringify(content)}`)
  }

  warn(content) {
    const log = `[${getTime()}] [WARN] ${JSON.stringify(content)}`
    writeFileAccessLog(log)
    console.warn('\x1b[33m%s\x1b[0m', log)
  }

  error(content) {
    const log = `[${getTime()}] [ERROR] ${JSON.stringify(content)}`
    writeFileAccessLog(log)
    console.error('\x1b[31m%s\x1b[0m', log)
  }

}

export default new LoggerService();
