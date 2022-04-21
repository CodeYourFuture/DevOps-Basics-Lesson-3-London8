const express = require('express')
const { indexHandler, sayHelloHandler } = require('./routes/handlers')
const { logger } = require('./helpers/logger')


const app = express();
const port = 3000;


app.get('/', indexHandler);

app.get('/hello/:name', sayHelloHandler);

app.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
})