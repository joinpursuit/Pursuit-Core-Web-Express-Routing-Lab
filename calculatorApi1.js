const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port = 3001

app.get("/:parameter", (req, res) => {
    res.send("This API performs calculations based on parameters received.")
})

app.get("/add/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    if (isNaN(num1) || isNaN(num2)){
        res.send("Numbers Only")
    } else {
        res.json({num1: num1, num2: num2, result: num1+num2})
    }
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

