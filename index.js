var http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
    res.write('Hello from my server...');
    res.end();
})

// listen

server.listen(8000, () => console.log('Server started...'));