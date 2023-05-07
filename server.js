const http = require('http');
const fs = require('fs');

const books = fs.readFileSync('./books.json', 'utf8');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');


    if (req.url === '/hello') {
        res.statusCode = 200;
        res.end('Hello, world!');
    } else if (req.url === '/getBookDetails') {
        res.statusCode = 200;
        res.end(books);
    } else {
        res.statusCode = 404;
        res.end('404 : Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
