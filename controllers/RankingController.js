const { response } = require('express')
const Ranking = require('../models/Ranking')

//store new ranking entry in database
const storeNewRankingEntry = (req, resp, next) => {

    console.log('Make store user in ranking' + req.body.login)
    let newRankingEntry = new Ranking({
        login: req.body.login,
        correctAnswers: req.body.correctAnswers,
        time: req.body.time,
        totalQuestions: req.body.totalQuestions
    })
    newRankingEntry.save()
        .then(respose => {
            console.log('then' + req.body.login)
            resp.json({
                message: 'New ranking entry added successfully'
            })
        })
        .catch(error => {
            console.log('catch error' + req.body.login)
            resp.json({
                message: 'New ranking entry was not added!'
            })
        })

    console.log('New ranking entry: ' + req.body.login, " correct answers ", req.body.correctAnswers, " time ", req.body.time);
}

const getRanking = (req, resp, next) => {
    Ranking.find().then(response => {
        resp.status(200).json({
            response
        })
    })
    .catch(error => {
        resp.status(400).json({
            messsage: 'An error occured!'
        })
    })
}

//export functions
module.exports = {
    storeNewRankingEntry, getRanking
}