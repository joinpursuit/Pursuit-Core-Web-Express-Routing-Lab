const express = require("express");
const cors = require('cors')
const app = express()
const port = 8090



app.use(cors())

app.get("/add/:num1/:num2", (req, res) => {

  const numOne = req.params.Number(num1)
  const numTwo = req.params.Number(num2)
  const result = numOne + numTwo

    if (isNaN(numOne) || isNaN(numTwo)) {
        res.send("Numbers only!!")
    } else {
        const data = {
            "numOne": num1,
            "num2": num2,
            "result": result,
        }
        res.json(data)
    }
});

app.get("/sub/:num1/:num2", (req, res) => {

    const numberOne = req.params.Number(num1)
    const numberTwo = req.params.Number(num2)
    const result = numberOne - numberTwo
    if (isNaN(num1) || isNaN(num2)) {
        res.send("Numbers only!!")
    } else {
        const data = {
            "num1": num1,
            "num2": num2,
            "result": result,
        }
        res.json(data)
    }

});

app.get("/mul/:num1/:num2", (req, res) => {
    console.log("req params:" , req.params)
  const numberOne = req.params.Number(num1)
  const numberTwo = req.params.Number(num2)
  const result = numberOne * numberTwo

    if (isNaN(num1) || isNaN(num2)) {
        res.send("Numbers only!!")
    } else {
        const data = {
            "num1": num1,
            "num2": num2,
            "result": result,
        }
        res.json(data)
    }
   
});

app.get("/div/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    const result = Number(num1) / Number(num2)

    if (isNaN(num1) || isNaN(num2)) {
        res.send("Numbers only!!")
    } else {
        const data = {
            "num1": num1,
            "num2": num2,
            "result": result,
        }
        res.json(data)
    }
});

app.get("./*", (req, res) => {
    res.sendfile("Please use the right endpoint")
})

app.listen(port, () => {
    console.log(`Server running on http://:localhost:${port}`)
})