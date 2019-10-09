const express = require("express");
const cors = require('cors');
const app = express();
const port = 1337;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Calculator!");
})

app.get("/add/:num1/:num2", (req, res) => {
 
    let addition = 
        {
        num1: parseInt(req.params.num1),
        num2: parseInt(req.params.num2),
        sum: parseInt(req.params.num1) + parseInt(req.params.num2),
        };

    res.set('Content-Type', 'application/json')
    res.status(200);
    if(isNaN(addition.num1) || isNaN(addition.num2)) {
        res.send("Numbers only!");
    } else {
        res.json(addition)
    }
})

app.get("/sub/:num1/:num2", (req, res) => {

    let subtraction = 
    {
    num1: parseInt(req.params.num1),
    num2: parseInt(req.params.num2),
    sub: parseInt(req.params.num1) - parseInt(req.params.num2),
    };

    res.set('Content-Type', 'application/json')
    res.status(200);
    if(isNaN(subtraction.num1) || isNaN(subtraction.num2)) {
        res.send("Numbers only!");
    } else {
        res.json(subtraction)
    }
})

app.get("/mul/:num1/:num2", (req, res) => {
    
    let multiplication = 
    {
    num1: parseInt(req.params.num1),
    num2: parseInt(req.params.num2),
    sum: parseInt(req.params.num1) * parseInt(req.params.num2),
    };

    res.set('Content-Type', 'application/json')
    res.status(200);
    if(isNaN(multiplication.num1) || isNaN(multiplication.num2)) {
        res.send("Numbers only!");
    } else {
        res.json(multiplication)
    }
})

app.get("/div/:num1/:num2", (req, res) => {
    let division = 
    {
    num1: parseInt(req.params.num1),
    num2: parseInt(req.params.num2),
    sum: parseInt(req.params.num1) / parseInt(req.params.num2),
    };

    res.set('Content-Type', 'application/json')
    res.status(200);
    if(isNaN(division.num1) || isNaN(division.num2)) {
        res.send("Numbers only!");
    } else {
        res.json(division)
    }
})

app.use("*", (req,res) => {
    res.status(404);
    res.send('This was not found =[ 404')
})

app.listen(port, () => {
    console.log("Server is listening")
})