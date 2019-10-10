const express = require("express");
const app = express();
const cors = require("cors");

const port = 8000;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

app.use(cors());

app.get("/", (request, response) => {
    response.set("Content-Type", "text/html");
    response.status(200);
    response.send("Testing math server");
})

app.get("/add/:num1/:num2", (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = add(parseInt(num1), parseInt(num2));

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    response.json(data);
});

app.get("/subtract/:num1/:num2", (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = subtract(parseInt(num1), parseInt(num2));

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    response.json(data);
});

app.get("/multiply/:num1/:num2", (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = multiply(parseInt(num1), parseInt(num2));

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    response.json(data);
})

app.get("/divide/:num1/:num2", (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = divide(parseInt(num1), parseInt(num2));

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    response.json(data);
})

app.use("*", (request, response) => {
    response.status(404);
    response.send("This route was not found. Please use one of the four routes for the Calculator Api");
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

