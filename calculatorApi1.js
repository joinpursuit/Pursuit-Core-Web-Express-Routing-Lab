const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

app.get("/add/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    let addTwoNums = {
        num1: num1,
        num2: num2,
        result: parseInt(num1) + parseInt(num2)
    }

    res.set("Content-Type", "application/json")
    res.status(200)
    res.json(addTwoNums)
})

app.get("/sub/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    let addTwoNums = {
        num1: num1,
        num2: num2,
        result: parseInt(num1) - parseInt(num2)
    }

    res.set("Content-Type", "application/json")
    res.status(200)
    res.json(addTwoNums)
})

app.get("/mul/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    let addTwoNums = {
        num1: num1,
        num2: num2,
        result: parseInt(num1) * parseInt(num2)
    }

    res.set("Content-Type", "application/json")
    res.status(200)
    res.json(addTwoNums)
})

app.get("/div/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    let addTwoNums = {
        num1: num1,
        num2: num2,
        result: parseInt(num1) / parseInt(num2)
    }

    res.set("Content-Type", "application/json")
    res.status(200)
    res.json(addTwoNums)
})

app.use("*", (req, res) => {
    res.status(404)
    res.send("Welcome to this basic calculator API! Please use the routes ADD, SUB, MUL, or DIV - and pass through two parameters to return the desired result!")
})

app.use(cors());