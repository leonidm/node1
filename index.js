var http = require('http');
var responce = require('./responce');

var server = http.createServer();

server.on('request', (req, res) => {
    res.write(responce());
    res.end();
})

// listen

server.listen(8000, () => console.log('Server started...'));