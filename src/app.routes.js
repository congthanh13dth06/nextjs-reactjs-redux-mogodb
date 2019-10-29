'use strict'

import express from 'express'

import UserRoute from './routes/user/user.route'

class AppRoutes {

  constructor() {
    if (!AppRoutes.instance) {
      AppRoutes.instance = this
    }
    return AppRoutes.instance
  }

  route(app) {
    app.use('/api/user', UserRoute)

  }

}

export default new AppRoutes()
