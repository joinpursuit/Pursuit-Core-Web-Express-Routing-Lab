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
app.use('/', express.static(path.join(__dirname, 'public')));


/* SERVER MAINS */
const conv = {
  dec: (num) => {
    log("HIT");
    return {
      decimal: num,
      binary: num.toString(2),
      hex: num.toString(16)
    }
  },
  bin: (num) => {
    return {
      decimal: parseInt(num, 2),
      binary: num,
      hex: parseInt(num, 2).toString(16)
    }
  },
  hex: (num) => {
    return {
      decimal: parseInt(num, 16),
      binary: parseInt(num, 16).toString(2),
      hex: num
    }
  }
}

app.get("/bases/:num/:initBase", (req, res) => {
    // res.send(req.params);
    if (isNaN(parseFloat(req.params.num)) || !conv[req.params.initBase]) {
      error(res);
    } else {
      let outputObj = {
        original: {
          value: parseFloat(req.params.num),
          base: req.params.initBase
        }
      };
      outputObj["conversions"] = conv[req.params.initBase](parseFloat(req.params.num));
      res.json(outputObj);
    }
});


const ops = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
}

app.get("/:op/:num1/:num2", (req, res) => {
    if (!ops[req.params.op] || isNaN(parseFloat(req.params.num1)) || isNaN(parseFloat(req.params.num2))) {
      error(res);
    } else {
      let outputObj = {
        num1: parseFloat(req.params.num1),
        num2: parseFloat(req.params.num2),
        operation: req.params.op,
      }
      outputObj.result = ops[req.params.op](outputObj.num1, outputObj.num2);
      res.json(outputObj);
    }
});


/* NO-ROUTE-CATCH */
app.use("*", (req, res) => {
    error(res);
});


/* HELPERS */
const error = (res) => {
  res.status(418).sendFile(path.join(__dirname + '/public/error418.html'));
}
