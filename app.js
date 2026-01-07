const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(`[INFO] GET / recibido`);
  res.send('¡Bienvenido a la app con monitorización!');
});

app.get('/health', (req, res) => {
  console.log(`[INFO] GET /health recibido`);
  res.json({ status: 'ok' });
});


module.exports = app;
