const { response } = require('express')
const User = require('../models/User')

// show all of users
const index = (req, resp, next) => {
    User.find().then(response => {
        resp.json({
            response
        })
    })
    .catch(error => {
        resp.json({
            messsage: 'An error occured!'
        })
    })

}


//show sinngle user
const  show = (req, resp, next) => {
    let userId = req.body.userId
    User.findById(userId)
    .then(response => {
        resp.json({
            response
        })
    })
    .catch(error => {
        response.json({
            message: 'User not found'
        })
    })
}


//store new user into database
const store = (req, resp, next) => {

    console.log('Make store user' + req.body.login)
    let user = new User({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
    .then(respose => {
        console.log('then' + req.body.login)
        resp.json({
            message: 'User added successfully'
        })
    })
    .catch(error => {
        console.log('catch error' + req.body.login)
        resp.json({
            message: 'User was not addedd!'
        })
    })

    console.log('Make store user' + req.body.login)
}

//updae user in database
const updateUser = (req, resp, next) => {
    let userId = req.body.userId

    let updateData = {
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    }

    User.findByIdAndUpdate(userId, {$set: updateData})
    .then(() => {
        resp.json({
            message: 'User udated successfully'
        })

    })
    .catch(error => {
        resp.json({
            message: 'An error occured durin updating uer data'
        })
    })
}

//delete user from databasae
const deleteUser = (req, resp, next) => {
    let userId = req.body.userId
    User.findByIdAndRemove(userId)
    .then(() => {
        resp.json({
            message: 'User removed successfully'
        })

    })
    .catch(error => {
        message: 'Deletion of user unsuccessful!'
    })
}

//export functions
module.exports = {
    index, show, store, updateUser, deleteUser
}