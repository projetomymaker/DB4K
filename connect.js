// Importar a biblioteca socket.io-client
const io = require('socket.io-client');

// Endereço do Arduino Create Agent WebSocket (ws://localhost:8991)
const endpoint = 'ws://localhost:8991';

// Criar uma instância do cliente WebSocket
const socket = io(endpoint);

// Conectar ao Arduino Create Agent
socket.on('connect', function() {
  // Enviar comandos e manipular mensagens recebidas
});
