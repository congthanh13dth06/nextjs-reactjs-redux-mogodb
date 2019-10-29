'use strict'

import express from 'express'
import next from 'next'

import config from './config/app.conf.json'
import appRoutes from './app.routes'

const port = config.port;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: 'client', dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    appRoutes.route(server)
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
