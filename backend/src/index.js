const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const { title, owner, frontend } = request.query;

  console.log(title);
  console.log(owner);
  console.log(frontend)

  return response.json([
    'projeto 1',
    'projeto 2',
  ]);
});

app.post('/projects', (request, response) => {

  const body = request.body;

  console.log(body);
  
  return response.json([
    'projeto 4',
    'projeto 2',
    'projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => {

  const { id } = request.params;

  console.log(id);

  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => {

  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ]);
});

app.listen(3333, () => {
  console.log('back-end started')
});