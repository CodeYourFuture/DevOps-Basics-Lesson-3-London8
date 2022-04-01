const express = require('express')

const app = express();
const port = 3000;

let request_number = 0;

app.get('/', (req, res) => {
  var current_time = new Date();
  request_number += 1;

  res.send(`Hello! The current server time in ISO format is ${current_time}. The server has responded to ${request_number} requests since it started.`)
})

app.listen(port, () => {
  console.log(`Hello world Application started and listening on http://localhost:${port}`)
})