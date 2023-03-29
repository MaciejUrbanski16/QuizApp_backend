const { response } = require('express')
const Question = require('../models/Question')

let questionId = 1;

//show single question
const  randomQuestion = (req, resp, next) => {
    

    console.log("Go into randomQuestion")


    //ADDING NEW QUESTION TO DB

    // let newQuestion = Question({
    //     id: 5,
    //     question: "Jaką wysokość ma najwyższy szczyt w Tatrach Polskich",
    //     answerA: "2492 m n.p.m",
    //     answerB: "2501 m n.p.m",
    //     answerC: "2494 m n.p.m",
    //     answerD: "2592 m n.p.m",
    //     correctAnswer: "B"
    // })
    // newQuestion.save()


    // .then(newQuestion => {
    //     resp.json({
    //         message: 'Question added successfully!'
    //     })
    // })
    // .catch(error => {
    //     resp.json({
    //         message: 'An error occured durinng question adding!'
    //     })
    // })

console.log("Go into randomQuestion")
    Question.findOne({id: questionId})
    .then(question => {

    

        console.log("Find: " + question.id + " " + question.question);
        resp.json({
            message: "Everything OK",
            question
        })
        questionId++;
    }

    //console.log("Response: " + result.id);
    )
}

module.exports = {
    randomQuestion
}