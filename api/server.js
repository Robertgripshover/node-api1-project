// BUILD YOUR SERVER HERE

const express = require('express') //<< importing express into the project

const server = express() //<< this is the instance of the express app

server.use(express.json()) //<< gives express the ability to read and parse JSON



server.get('/api/users', (req, res) => {
    res.json('users')
})


server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
}) 


module.exports = server; // EXPORT YOUR SERVER instead of {}
////////
