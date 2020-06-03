const express = require('express');

const app = express();

app.get('/projetcs', (request, response) => {
  return response.json([
    'projeto 1',
    'projeto 2',
  ]);
});

app.post('/projetcs:id', (request, response) => {
  return response.json([
    'projeto 4',
    'projeto 2',
    'projeto 3',
  ]);
});

app.put('/projetcs:id', (request, response) => {
  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ]);
});

app.delete('/projetcs:id', (request, response) => {
  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ]);
});

app.listen(3333, () => {
  console.log('back-end started')
});