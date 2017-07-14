// Load module dependencies
const http = require('http'),
    fs = require('fs');

http.createServer((request, response) => {

    // TODO: Find the ASYNCHRONOUS, NON-BLOCKING API for reading in a file.
    fs.CHANGE_ME('./data.csv', 'utf-8', (err, data) => {
        const responseData = {};

        // Basic JS: Work with the data in the file, and create the response
        const lines = data.split('\n');

        // Note the native forEach support in Arrays in node.js!
        lines.forEach(line => {
            const parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });

        // TODO: How do we set the content type we're sending back?
        response.writeHead(200, {
            'CHANGEME':'CHANGEME'
        });

        // TODO: How do we serialize responseData to a JSON string?
        response.end(CHANGE_ME.CHANGE_ME(responseData));

    });

}).listen(3000);

console.log('node server running on port 3000');