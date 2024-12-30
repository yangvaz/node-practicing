const express = require('express');

const routes = require('./routes');

const app = express();

app.use(routes);



// Criando servidor e definindo porta
app.listen(3000, () => console.log('Server started at http://localhost:3000 '));
