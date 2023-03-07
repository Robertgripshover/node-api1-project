const server = require('./api/server');

const port = 9000;

server.listen(port, () => {
    console.log(`server started on http://localhost:9000`)
})

console.log('hey you!')


// START YOUR SERVER HERE
