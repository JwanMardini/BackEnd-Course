 
const port = (process.argv[2] || process.env.PORT || 3000), http = require('http');

http.createServer((req, res) => {
    console.log(req.url);
    const nameArg = capitalize( req.url.replace(/[^\w.,-]/g, ' ').replace(/\s+/g, ' ').trim() || 'world' );

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
res.end(`<h1>Hello, ${nameArg}</h1>`);
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);

function capitalize(str) {
    return str
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/*
The code does the following:
It defines a variable for the server’s port . This can be passed on the
command line, a PORT environment variable, or it falls back to 3000 .

It uses the HTTP createServer library to create a web server which listens
on that port . When its callback function receives a request, it can
examine the details in the req object and return a response using the
res object.

This is a simple example, and the server returns the same “Hello World!”
response regardless of the URL. Try accessing http://localhost:3000/ ,
http://localhost:3000/abc/ , or http://localhost:3000/abc/123/ : every
page is the same.
*/