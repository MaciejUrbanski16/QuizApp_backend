const { response } = require('express')
const Question = require('../models/Question')

let questionIdForGeography = 1;
let questionIdForMath = 100;
let questionIdForPhysics = 200;

//show single question
const randomQuestionGeography = (req, resp, next) => {

    //questionId = 1;
    console.log("Go into randomQuestionGeography questionId: ", questionIdForGeography)


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
 
    let questionsArray = []

    console.log("Go into randomQuestion")
    // Question.findOne({ id: 1 }).then(question => {
    //     console.log("Znaleziono pytanie : " + question.id + " " + question.question);
    //     questionsArray.push(question)
    // })
   
    // Question.findOne({ id: 2 }).then(question => {
    //     console.log("Znaleziono pytanie : " + question.id + " " + question.question);
    //     questionsArray.push(question)
    // })
    // Question.findOne({ id: 3 }).then(question => {
    //     console.log("Znaleziono pytanie : " + question.id + " " + question.question);
    //     questionsArray.push(question)
    // })
    // Question.findOne({ id: 4 }).then(question => {
    //     console.log("Znaleziono pytanie : " + question.id + " " + question.question);
    //     questionsArray.push(question)
    // })
    // Question.findOne({ id: 5 }).then(question => {
    //     console.log("Znaleziono pytanie : " + question.id + " " + question.question);
    //     questionsArray.push(question)
    // })
    Question.find().limit(5).then(question => {
        console.log("Znaleziono liczbe pytan : " + question[0].question);
        resp.json({
                message: "Everything OK",
                question
            })
    })
   
    // for (let i = 0; i < questionsArray.length; i++) {
    //     const element = questionsArray[i];
    //     console.log("Iteracja po elemenach", element.question);
    //   }
    //   const el = questionsArray[0]
    //   console.log("Element pojedynczy ", el)
    // resp.json({message:"Odpowiedz z tablica danych",
    //             questionsArray
    //         })

    //console.log("Pobrane pytanie to: ", question.question)
    // Question.findOne({ id: questionIdForGeography })
    //     .then(question => {



    //         console.log("Find: " + question.id + " " + question.question);
    //         resp.json({
    //             message: "Everything OK",
    //             question
    //         })
    //         questionIdForGeography++;
    //         if (questionIdForGeography === 5) {
    //             questionIdForGeography = 1;
    //         }
    //     }

    //         //console.log("Response: " + result.id);
    //     )
    // Question.find().limit(5)
    //     .then(question => {



    //         console.log("Find: " + question.id + " " + question.question);
    //         resp.json({
    //             message: "Everything OK",
    //             question
    //         })
    //         questionIdForGeography++;
    //         if (questionIdForGeography === 5) {
    //             questionIdForGeography = 1;
    //         }
    //     }

    //         //console.log("Response: " + result.id);
    //     )
}

//show single question
const randomQuestionMath = (req, resp, next) => {

    //questionId = 100;
   // console.log("Go into randomQuestion")


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

    console.log("Go into randomQuestionMath")
    Question.findOne({ id: questionIdForMath})
        .then(question => {



            console.log("Find: " + question.id + " " + question.question);
            resp.json({
                message: "Everything OK",
                question
            })
            questionIdForMath++;
            if (questionIdForMath === 105) {
                questionIdForMath = 100;
            }
        }

            //console.log("Response: " + result.id);
        )
}

//show single question
const randomQuestionPhysics = (req, resp, next) => {

    
    console.log("Go into randomQuestionPhysics")


    //ADDING NEW QUESTION TO DB

    // let newQuestion = Question({
    //     id: 205,
    //     question: "Co to jest siła ciężkości?",
    //     answerA: "Siła, która przyciąga dwa ciała o masie",
    //     answerB: "Siła, która działa między dwoma ładunkami",
    //     answerC: "Siła, która działa między dwoma magnesami",
    //     answerD: "Siła, która działa między dwoma atomami",
    //     correctAnswer: "A"
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
    // console.log("added new question randomQuestionPhysics questionId: ", questionId);

    //console.log("Go into randomQuestion")
    Question.findOne({ id: questionIdForPhysics })
        .then(question => {



            console.log("Find: "  + " " + question.question);
            resp.json({
                message: "Everything OK",
                question
            })
            questionIdForPhysics++;
            if (questionIdForPhysics === 205) {
                questionIdForPhysics = 200;
            }
        }

            //console.log("Response: " + result.id);
        )
}


module.exports = {
    randomQuestionGeography, randomQuestionMath, randomQuestionPhysics
}