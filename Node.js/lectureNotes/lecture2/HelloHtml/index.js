const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Read the HTML file asynchronously
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    // Set the response header for HTML content
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Send the HTML content as the response
    res.end(data);
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
