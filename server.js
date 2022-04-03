const express = require('express')
const { indexHandler, sayHelloHandler } = require('./routes/handlers')


const app = express();
const port = 404;


app.get('/', indexHandler);

app.get('/hello/:name', sayHelloHandler);

app.listen(port, () => {
  console.log(`Hello world Application started and listening on http://localhost:${port}`)
})