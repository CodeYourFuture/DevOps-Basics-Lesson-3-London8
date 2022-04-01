const express = require('express')
const { index, hello } = require('./routes/handlers')


const app = express();
const port = 3000;


app.get('/', index);

app.get('/hello/:name', hello);

app.listen(port, () => {
  console.log(`Hello world Application started and listening on http://localhost:${port}`)
})