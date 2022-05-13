const express = require("express");
const pino = require("pino");
const { indexHandler, sayHelloHandler } = require("./routes/handlers");

const app = express();
const port = 3000;

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyyy HH:MM:ss", // formate the date and hour
      ignore: "pino,hostname", // remove the machina name (marina-ubuntu)
    },
  },
});

app.get("/", (req, res) => {
  logger.info("the index page has been visited");
  // logger.error();
  // ("error: the error message");
  // logger.warn("warn: the warn message");
  // logger.fatal("fatal: the fatal message");
  // const currentTime = new Date();
  // console.log("the index page has been visited");
  res.send(
    `Welcome to my app. Please use your the api/users endpoint to interact with users`
  );
});

app.get("/hello/:name", sayHelloHandler);

app.listen(port, () => {
  logger.info(
    `Hello world Application started and listening on http://localhost:${port}`
  );
});
