const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}


app.get("/add/:num1/:num2", (req, res) => {
    // console.log(req.params.num1)
    if (isNaN(req.params.num1) || isNaN(req.params.num2)) {
        res.send("Numbers only!")
    } else {
    res.json(`{"num1": ${req.params.num1}, "num2": ${req.params.num2}, "result": ${add(parseInt(req.params.num1), parseInt(req.params.num2))}}`);
    }
})

app.get("/sub/:num1/:num2", (req, res) => {
    if (isNaN(req.params.num1) || isNaN(req.params.num2)) {
        res.send("Numbers only!")
    } else {
        res.json(`{"num1": ${req.params.num1}, "num2": ${req.params.num2}, "result": ${sub(parseInt(req.params.num1), parseInt(req.params.num2))}}`);
    }
})

app.get("/mul/:num1/:num2", (req, res) => {
    if (isNaN(req.params.num1) || isNaN(req.params.num2)) {
        res.send("Numbers only!")
    } else {
    res.json(`{"num1": ${req.params.num1}, "num2": ${req.params.num2}, "result": ${mul(parseInt(req.params.num1), parseInt(req.params.num2))}}`);
    }
})

app.get("/div/:num1/:num2", (req, res) => {
    if (isNaN(req.params.num1) || isNaN(req.params.num2)) {
        res.send("Numbers only!")
    } else {
    res.json(`{"num1": ${req.params.num1}, "num2": ${req.params.num2}, "result": ${div(parseInt(req.params.num1), parseInt(req.params.num2))}}`);
    }
})

app.post("/", (req, res) => {
    res.send("you made a POST request")
})

app.get("/", (req, res) => {
    res.send("YOU made a get request at / url");
})

app.get("*", (req, res) => {
    res.send("This is a calculator API. Start with the math operator (ie. add, sub, mul, div) you'd like to compute, followed by two numbers.")
})

app.listen(port, () => {
    console.log("Server is running on port ", port);
})