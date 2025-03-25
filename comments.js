// Create web server
const http = require('http');
 
// Cria o servidor web
const server = http.createServer((req, res) => {
  // Configura o cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/plain' });
 
  // Envia uma resposta simples
  res.end('Olá, mundo! Este é um servidor web básico.\n');
});
 
// Define a porta para o servidor
const PORT = 3000;
 
// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
 