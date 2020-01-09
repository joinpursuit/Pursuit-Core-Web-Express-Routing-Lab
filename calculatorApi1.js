const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

const add = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
}

const sub = (num1, num2) => {
    return parseInt(num1) - parseInt(num2)
}

const mul = (num1, num2) => {
    return parseInt(num1) * parseInt(num2)
}

const div = (num1, num2) => {
    return parseInt(num1) / parseInt(num2)
}

app.get("/add", (req, res) => {
    res.send("You made a request at /add url")
})

app.get("/add/:num1/:num2/", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result: add(req.params.num1, req.params.num2)}) 
})
app.get("/sub/:num1/:num2/", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result:sub(req.params.num1, req.params.num2)})
})
app.get("/mul/:num1/:num2/", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result:mul(req.params.num1, req.params.num2)})
})
app.get("/div/:num1/:num2/", (req, res) => {
    res.json({num1: req.params.num1, num2: req.params.num2, result:div(req.params.num1, req.params.num2)})
})

app.listen(port, () => {
    console.log("Server is running on Port " + port)
})