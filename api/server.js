// BUILD YOUR SERVER HERE

const express = require('express') //<< importing express into the project

const server = express() //<< this is the instance of the express app

server.use(express.json()) //<< gives express the ability to read and parse JSON

server.get('/hello-world', (req, res) => {
    res.status(200).json({ message: "hello, world" })
})


module.exports = server; // EXPORT YOUR SERVER instead of {}
////////
