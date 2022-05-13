let request_number = 0;

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;
  console.log("Hello!");
  const newDate = new Date();
  console.log(newDate);
  res.send(
    `Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`
  );
};

const sayHelloHandler = (req, res) => {
  //  console.log("Hello!!!");
  const name = req.params.name || "person";

  res.send(`Hello ${name}!`);
};

module.exports = { indexHandler, sayHelloHandler };
