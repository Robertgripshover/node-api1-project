// BUILD YOUR SERVER HERE

const express = require('express') //<< importing express into the project

const User = require('./users/model')

const server = express() //<< this is the instance of the express app

server.use(express.json()) //<< gives express the ability to read and parse JSON



server.get('/api/users', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({
                message: "error getting users",
                err: err.message
            })
        })
})




server.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).json({
                message: "error getting users",
                err: err.message
            })
        })
})




server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
}) 


module.exports = server; // EXPORT YOUR SERVER instead of {}
////////
