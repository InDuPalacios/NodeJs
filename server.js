    const http = require('node:http');
    const path = require('path');
    const fs = require('fs');

    const hostname = '127.0.0.1';
    const port = 3000;

    const servidor = http.createServer((req, res) => {
        // Manejar la solicitud para '/'
        if (req.url === '/' || req.url === '/index.html') {
          const filePath = path.join(__dirname, 'index.html');
          
          fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Error interno del servidor');
              return;
            }
      
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
          });
        } else {
          // Manejar otras solicitudes
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 - Not Found');
        }
      });

      servidor.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
      });