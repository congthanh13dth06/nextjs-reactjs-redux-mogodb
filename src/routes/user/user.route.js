'use strict'

import { Router } from 'express';
import UserController from './user.controller'

const router = Router();

router
  .get('/', UserController.getAll.bind(UserController))
  .get('/:id', UserController.getUserById.bind(UserController))
  .post('/', UserController.create.bind(UserController))

export default router
