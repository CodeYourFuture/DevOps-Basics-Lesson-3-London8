const { logger } = require('../helpers/logger')

let request_number = 0;

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;

  logger.info(`indexHandler requested by ${req.connection.remoteAddress}. Request number: ${request_number}`);
  res.send(`Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`)
}

const sayHelloHandler = (req, res) => {
  var current_time = new Date();
  const name = req.params.name || "person";

  logger.info(`sayHelloHandler requested by ${req.connection.remoteAddress}. The name is ${name}`);
  res.send(`Hello ${name}!`);
}

module.exports = { indexHandler, sayHelloHandler };