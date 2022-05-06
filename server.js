const express = require("express");
const { indexHandler, sayHelloHandler } = require("./routes/handlers");
const pino = require("pino");
const logger = pino ({
  transport:{

    target:`pino-pretty`,
options:{translateTime:true}
  }
})

const app = express();
const port = 3000;

app.get("/", indexHandler);

app.get("/hello/:name", sayHelloHandler);
app.get("/api/", (req , res)=>{
  logger.info(`the web page has been visited`);
});


app.listen(port, () => {
  console.log(
    `Hello world Application started and listening on http://localhost:${port}`
  );
});
