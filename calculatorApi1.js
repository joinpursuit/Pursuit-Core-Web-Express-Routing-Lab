// Joseph P. Pasaoa
// Express Routing Lab Calc 1
//

/* CUSTOM HELPERS */
const log = console.log;


/* MODULE INITS */
const express = require('express');
const cors = require('cors');


const app = express();
const port = 8010;


app.use(cors());
app.get("/", (req, res) => {
  res.send("Root HIT!");
});

/* OPERATION ENDPOINTS */
app.get("/add/:num1/:num2", (req, res) => {
  const insObj = req.params;
  if (numsCheck(insObj)) {
    let result = number(insObj.num1) + number(insObj.num2);
    let outputObj = {
      num1: number(insObj.num1),
      num2: number(insObj.num2),
      operation: "add (num1 + num2)",
      result: result,
    }
    res.json(outputObj);
  } else {
    res.send("Input Error: Please check your inputs (/num1/num2) and reload the page.");
  }
});

app.get("/sub/:num1/:num2", (req, res) => {
  const insObj = req.params;
  if (numsCheck(insObj)) {
    let result = number(insObj.num1) - number(insObj.num2);
    let outputObj = {
      num1: number(insObj.num1),
      num2: number(insObj.num2),
      operation: "subtract (num1 - num2)",
      result: result,
    }
    res.json(outputObj);
  } else {
    res.send("Input Error: Please check your inputs (/num1/num2) and reload the page.");
  }
});

app.get("/mul/:num1/:num2", (req, res) => {
  const insObj = req.params;
  if (numsCheck(insObj)) {
    let result = number(insObj.num1) * number(insObj.num2);
    let outputObj = {
      num1: number(insObj.num1),
      num2: number(insObj.num2),
      operation: "multiply (num1 * num2)",
      result: result,
    }
    res.json(outputObj);
  } else {
    res.send("Input Error: Please check your inputs (/num1/num2) and reload the page.");
  }
});

app.get("/div/:num1/:num2", (req, res) => {
  const insObj = req.params;
  if (numsCheck(insObj)) {
    let result = number(insObj.num1) / number(insObj.num2);
    let outputObj = {
      num1: number(insObj.num1),
      num2: number(insObj.num2),
      operation: "divide (num1 / num2)",
      result: result,
    }
    res.json(outputObj);
  } else {
    res.send("Input Error: Please check your inputs (/num1/num2) and reload the page.");
  }
});


/* NO-ROUTE-CATCH */
app.use("*", (req, res) => {
  res.status(404);
  let html404 = `
    <h3>Error 404</h3>
    <h1>Why Hello There</h1>
    <p>You took a wrong turn somewhere because now you're nowhere.</p>
    <p>Use the following endpoints to get back to where you're going. Check your URL and try again.</p>
    <ul>
      <li><strong>to add: </strong>/add/num1/num2</li>
      <li><strong>to subtract: </strong>/sub/num1/num2</li>
      <li><strong>to multiply: </strong>/mul/num1/num2</li>
      <li><strong>to divide: </strong>/div/num1/num2</li>
    `;
  res.send(html404);
});

/* HELPERS */
const numsCheck = (paramsObj) => {
  for (let input in paramsObj) {
    if (isNaN(paramsObj[input])) {
      return false;
    }
  }
  return true;
}

const number = (input) => {
  return parseInt(input, 10);
}


/* SERVER INIT */
app.listen(port, () => {
  log(`JoeyServer running on port ${port}. The sun will come out. Tomorrow.`);
});
