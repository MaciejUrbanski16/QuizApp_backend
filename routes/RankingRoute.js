const express = require('express')
const { models } = require('mongoose')
const router = express.Router()

const RankingController = require('../controllers/RankingController')
//const authenticate = require('../middleware/authenticate')

router.get('/', RankingController.getRanking)
//router.post('/show', UserController.show)
//router.post('/update', UserController.updateUser)
router.post('/storeNewRankingEntry', RankingController.storeNewRankingEntry)
//router.post('/delete', UserController.deleteUser)

module.exports = router