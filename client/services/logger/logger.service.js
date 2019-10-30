/**
 * Created By Nguyen Cong Thanh on 11/04/2019 15:01.
 *
 * Copyright Intelin 2019.
 */

// import EnvConfig from '../../../config/env.conf.json'

const getTime = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}

class LoggerService {

  constructor() {
    if (!LoggerService.instance) {
      // this.logs = EnvConfig[EnvConfig.CURRENT].LOG
      this.logs = ['info', 'debug']
      LoggerService.instance = this
    }
    return LoggerService.instance
  }

  info(content) {
    if (this.logs.includes('info')) {
      console.info(`[${getTime()}]-[INFO]: \n`, JSON.stringify(content, null, 2))
    }
  }

  debug(message, content) {
    if (this.logs.includes('debug')) {
      console.debug(`[${getTime()}]-[DEBUG]: ${message} \n`, JSON.stringify(content, null, 3))
    }
  }

  trace(content) {
    if (this.logs.includes('trace')) {
      console.trace(`[${getTime()}]-[TRACE]: \n`, JSON.stringify(content, null, 2))
    }
  }

  warn(content) {
    if (this.logs.includes('warn')) {
      console.warn(`[${getTime()}]-[WARN]: \n`, JSON.stringify(content, null, 2))
    }
  }

  error(content) {
    if (this.logs.includes('error')) {
      console.error(`[${getTime()}]-[ERROR]: \n`, JSON.stringify(content, null, 2))
    }
  }

  log(content) {
    if (this.logs.includes('log')) {
      console.log(`[${getTime()}]-[LOG]: \n`, content)
    }
  }

  table(content) {
    if (this.logs.includes('table')) {
      console.table(`[${getTime()}]-[TABLE]: \n`, content);
    }
  }
}

export default new LoggerService()
