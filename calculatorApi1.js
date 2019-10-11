// Joseph P. Pasaoa
// Express Routing Lab Calc 1
//

/* CUSTOM HELPERS */
const log = console.log;


/* MODULE INITS */
const path = require('path');
const express = require('express');
  const app = express();
  const port = 8010;
const cors = require('cors');
  app.use(cors());

/* SERVER INIT */
app.listen(port, () => {
  log(`JoeyServer running on port ${port}. Good luck and godspeed.`);
});
// app.use(express.static(path.join(__dirname, 'errors')));


/* SERVER MAINS */
const ops = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
}

app.get("/:op/:num1/:num2", (req, res) => {
  checkInputs(req, res);
  let outputObj = {
    num1: parseFloat(req.params.num1),
    num2: parseFloat(req.params.num2),
    operation: req.params.op,
  }
  outputObj.result = ops[req.params.op](outputObj.num1, outputObj.num2);
  res.json(outputObj);
});

/* NO-ROUTE-CATCH */
app.use("*", (req, res) => {
  res.status(418);
  res.send(error418);
});


/* HELPERS */
const checkInputs = (req, res) => {
  if (!ops[req.params.op] || isNaN(parseFloat(req.params.num1)) || isNaN(parseFloat(req.params.num2))) {
    res.status(418);
    res.send(error418);
  }
}

// TODO Move to separate html file
const error418 = `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
  <head>
    <meta name="author" content="Joseph P. Pasaoa" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Calculator Server | Error | Joseph P. Pasaoa</title>
  </head>
  <body>
    
        <h1>Error</h1>

        <p>You took a wrong turn somewhere because now you're nowhere. Please check your URL inputs and reload the page.</p>

        <ul>
          <li><strong>to add: </strong>/add/num1/num2</li>
          <li><strong>to subtract: </strong>/sub/num1/num2</li>
          <li><strong>to multiply: </strong>/mul/num1/num2</li>
          <li><strong>to divide: </strong>/div/num1/num2</li>
        </ul>

  </body>
  </html>
`;
