const http = require('http');

// Cria o servidor web
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor web funcionando!\n');
});

// Define a porta e inicia o servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});