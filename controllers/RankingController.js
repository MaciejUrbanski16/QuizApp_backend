const { response } = require('express')
const Ranking = require('../models/Ranking')

//store new ranking entry in database
const storeNewRankingEntry = (req, resp, next) => {

    console.log('Make store user in ranking' + req.body.login)
    let newRankingEntry = new Ranking({
        login: req.body.login,
        correctAnswers: req.body.correctAnswers,
        time: req.body.time,
        totalQuestions: req.body.totalQuestions,
        domain: req.body.domain
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

    console.log('New ranking entry: ' + req.body.login, " correct answers ", req.body.correctAnswers, " time ", req.body.time, " domain ", req.body.doamin);
}

const getRankingGeography = (req, resp, next) => {
    console.log("Ranking geography read in progress");
    Ranking.find({ domain: "geografia" })
        .sort({ correctAnswers: -1 })
        .sort({ time: -1 })
        .limit(10)
        .then(response => {
            resp.status(200).json({
                response
            })
            console.log("Ranking read: " + resp.data)
        })
        .catch(error => {
            resp.status(400).json({
                messsage: 'An error occured!'
            })
        })

    // Ranking.aggregate([
    //     { $sort: { correctAnswers: -1, time: -1 } }, // sortujemy po priority malejąco, po otherField rosnąco
    //     { $project: { index: { $add: [{$indexOfArray: ['$priority', '$priority']}, 1] }, correctAnswers: 1, time: 1 } } // dodajemy pole index oraz wyświetlamy pola priority i otherField
    //   ]).sort({ index: 1 }).exec(function(err, sortedElements) {
    //     if (err) {
    //       // obsługa błędu
    //     } else {
    //       console.log("Posortowane elementy: " + sortedElements); // wyświetlamy posortowane elementy z dodaną liczbą porządkową
    //     }
    //   });

    // Ranking.findOne({login: "x8"})
    // .then(rank => {

    //     console.log("Find: login: " + rank.login + " correct answers: " + rank.correctAnswers);
    //     resp.json({
    //         message: "Everything OK",
    //         rank
    //     })
    // })

}

const getRankingPhysics = (req, resp, next) => {
    console.log("Ranking physics read in progress");
    Ranking.find({ domain: "fizyka" })
        .sort({ correctAnswers: -1 })
        .sort({ time: -1 })
        .limit(10)
        .then(response => {
            resp.status(200).json({
                response
            })
            console.log("Ranking read: " + resp.data)
        })
        .catch(error => {
            resp.status(400).json({
                messsage: 'An error occured!'
            })
        })
}

const getRankingMath = (req, resp, next) => {
    console.log("Ranking physics read in progress");
    Ranking.find({ domain: "matematyka" })
        .sort({ correctAnswers: -1 })
        .sort({ time: -1 })
        .limit(10)
        .then(response => {
            resp.status(200).json({
                response
            })
            console.log("Ranking read: " + resp.data)
        })
        .catch(error => {
            resp.status(400).json({
                messsage: 'An error occured!'
            })
        })
}


//export functions
module.exports = {
    storeNewRankingEntry, getRankingGeography, getRankingPhysics, getRankingMath
}