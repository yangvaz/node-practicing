const express = require('express');

const app = express();

// Criando rota GET
app.get('/', (request, response) => {
  response.send("testing")
});

// Criando servidor e definindo porta
app.listen(3000, () => console.log('Server started at http://localhost:3000 '));