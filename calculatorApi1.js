const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params)
    num1 = Number(req.params.num1)
    num2 = Number(req.params.num2)
    sum = num1+num2
    res.json(sum)
})

app.get("/sub/:num1/:num2", (req, res) => {
    console.log(req.params);
    num1 = Number(req.params.num1);
    num2 = Number(req.params.num2);
    difference = num1 - num2;

    res.json(difference)


})

app.get("/mulp/:num1/:num2", (req, res) => {
    console.log(req.params);
    num1 = Number(req.params.num1);
    num2 = Number(req.params.num2);
    product = num1 * num2;

    res.json(product)


})
app.get("/err", (req, res) => {
    
    console.log(req.params);
    err = "numbers only"
    res.json(err)


})

app.get("/div/:num1/:num2", (req, res) => {
    console.log(req.params);
    num1 = Number(req.params.num1);
    num2 = Number(req.params.num2);
    quotient = num1 / num2;

    res.json(quotient)


})

app.listen(port, () => {
    console.log("Server is running on port " + port)
})

