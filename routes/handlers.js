const pino = require("pino");

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: { translateTime: true },
  },
});

let request_number = 0;

const indexHandler = (req, res) => {
  //var current_time = new Date();
  request_number += 1;

  res.send(
    `Hello! The server has responded to ${request_number} requests since it started.`
  );
  logger.info(`The server has responded to ${request_number}`);
};

const sayHelloHandler = (req, res) => {
  //let current_time = new Date();
  const name = req.params.name || "person";

  res.send(`Hello ${name}!`);
  logger.info(`The name of the greeted person is ${name}`);
};

module.exports = { indexHandler, sayHelloHandler };
