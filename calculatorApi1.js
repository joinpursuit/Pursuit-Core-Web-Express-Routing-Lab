const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

const add = (num1, num2) => {
    return num1 + num2
}
const sub = (num1, num2) => {
    return num1 - num2
}
const multiply = (num1, num2) => {
    return num1 * num2
}
const divide = (num1, num2) => {
    return num1/num2
}

app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params);
    let num1 = parseInt(req.params["num1"]);
    let num2 = parseInt(req.params["num2"]);
    res.json(add(num1, num2));
})

app.get("/sub/:num1/:num2", (req, res) => {
    console.log(req.params);
    let num1 = parseInt(req.params["num1"]);
    let num2 = parseInt(req.params["num2"]);
    res.json(sub(num1, num2));
})

app.get("/multiply/:num1/:num2", (req, res) => {
    console.log(req.params);
    let num1 = parseInt(req.params["num1"]);
    let num2 = parseInt(req.params["num2"]);
    res.json(multiply(num1, num2));
})

app.get("/divide/:num1/:num2", (req, res) => {
    console.log(req.params);
    let num1 = parseInt(req.params["num1"]);
    let num2 = parseInt(req.params["num2"]);
    res.json(divide(num1, num2));
})

app.get("/", (req, res) => {
    res.send("This is a calculator API, please insert two numbers and choose a function");
})

app.listen(port, () => {
    console.log("Server is running on port", port);
})