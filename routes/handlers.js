let request_number = 0;

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;

  res.send(
    `Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`
  );
  console.log(`[${current_time}] ${request_number} `);
};

const sayHelloHandler = (req, res) => {
  const name = req.params.name || "Friend";
  var current_time = new Date();
  res.send(`Hello ${name}!`);
  console.log(`[${current_time}] ${name} `);
};

module.exports = { indexHandler, sayHelloHandler };
