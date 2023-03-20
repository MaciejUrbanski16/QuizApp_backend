const express = require('express')
const { models } = require('mongoose')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserController.index)
router.post('/show', UserController.show)
router.post('/update', UserController.updateUser)
router.post('/store', UserController.store)
router.post('/delete', UserController.deleteUser)

module.exports = router