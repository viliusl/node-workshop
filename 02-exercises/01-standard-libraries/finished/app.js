const http = require('http'),
    fs = require('fs');

http.createServer((request, response) => {

    fs.readFile('./data.csv', 'utf-8', (err, data) => {
        const responseData = {};

        const lines = data.split('\n');
        lines.forEach(line => {
            const parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });

        response.writeHead(200, {
            'Content-Type':'application/json'
        });
        response.end(JSON.stringify(responseData));

    });

}).listen(3000);

console.log('node server running on port 3000');