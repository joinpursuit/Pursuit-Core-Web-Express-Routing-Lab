const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port = 3001

app.get("/", (req, res) => {
    res.send("You made a GET request at / url")
})

app.get("/add/:num1/:num2", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result: parseInt(req.params.num1)+parseInt(req.params.num2)})
})

app.get("/multiply/:num1/:num2", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result: parseInt(req.params.num1)*parseInt(req.params.num2)})
})

app.get("/subtract/:num1/:num2", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result: parseInt(req.params.num1)-parseInt(req.params.num2)})
})

app.get("/divide/:num1/:num2", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result: parseInt(req.params.num1)/parseInt(req.params.num2)})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

