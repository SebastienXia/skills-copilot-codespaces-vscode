// Create web server
// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    console.log(request.url);
    if (request.url === '/comments') {
        fs.readFile('comments.json', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(data);
        });
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('Hello World\n');
    }
});

// Listen on port 8000, IP defaults to
