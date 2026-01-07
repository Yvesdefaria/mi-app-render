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

app.get('/fail', (req, res) => {
  console.log('Este endpoint provocará un fallo');  
  const x = ; // Error de sintaxis intencionado
  res.send('Esto no se ejecutará');
});


module.exports = app;
