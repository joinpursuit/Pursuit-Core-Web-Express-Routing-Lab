const express = require("express");
const cors = require('cors');
const app = express();
const port = 1337;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the Calculator!");
})

//Use this to grab the numbers and operators
app.get(`/:num1/:operator/:num2`, (req, res) => {

    let userOperator = req.params.operator;
    let firstNum = parseInt(req.params.num1)
    let secondNum = parseInt(req.params.num2)

    let operators = 
    {
    '+': function(a, b) {return a + b},
    '-': function(a, b) {return a - b},
    '*': function(a, b) {return a * b},
    '/': function(a, b) {return a / b},

};

    res.set('Content-Type', 'application/json')
    res.status(200);
    res.json('Your result is: ' + operators[userOperator](firstNum, secondNum))
})

app.use("*", (req,res) => {
    res.status(404);
    res.send('This was not found =[ 404')
})

app.listen(port, () => {
    console.log("Server is listening")
})