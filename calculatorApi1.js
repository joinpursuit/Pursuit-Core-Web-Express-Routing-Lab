const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080;
app.use(cors())


app.get("/add/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)
  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only")
  } else {
    let data = {
      "num1": num1,
      "num2": num2,
      "result": num1 + num2
    }
    res.json(data)
  }
})

app.get("/sub/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)
  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only")
  } else {
    let data = {
      "num1": num1,
      "num2": num2,
      "result": num1 - num2
    }
    res.json(data)
  }
})

app.get("/mul/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)
  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only")
  } else {
    let data = {
      "num1": num1,
      "num2": num2,
      "result": num1 * num2
    }
    res.json(data)
  }
})

app.get("/div/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)
  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only")
  } else {
    let data = {
      "num1": num1,
      "num2": num2,
      "result": num1 / num2
    }
    res.json(data)
  }
})

app.get("/:num1/:symbol/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)
  let symbol = req.params.symbol
  let result
  switch (symbol) {
    case "+": result = num1 + num2
      break;
    case "-": result = num1 - num2
      break;
    case "*": result = num1 * num2
      break;
    case "/": result = num1 / num2
      break;
    default: res.send(" the operator is not supported")
  }
  if (isNaN(num1) || isNaN(num2)) {
    res.send("numbers only")
  }
  else {
    let data = {
      "num1": num1,
      "num2": num2,
      "result": result
    }
    res.json(data)
  }
}
)

app.get("/", (req, res) => {
  res.send("Welcome to my calculator api")
})

app.use("*", (req, res) => {
  res.status(404)
  res.send("404 page not found")
})

app.listen(port, () => {
  console.log("server listening on port : ", port)
})