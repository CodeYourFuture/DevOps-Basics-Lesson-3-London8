let request_number = 0;

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;

  res.send(`Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`)
}

const sayHelloHandler = (req, res) => {
  const name = req.params.name || "Friend";

  res.send(`Hello ${name}!`);
}

module.exports = { indexHandler, sayHelloHandler };