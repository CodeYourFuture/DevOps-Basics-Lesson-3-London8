let request_number = 0;

const index = (req, res) => {
  var current_time = new Date();
  request_number += 1;

  res.send(`Hello! The current server time in ISO format is ${current_time}. The server has responded to ${request_number} requests since it started.`)
}

const hello = (req, res) => {
  const name = req.params.name || "person";

  res.send(`hello ${name}!`);
}

export default { index, hello };