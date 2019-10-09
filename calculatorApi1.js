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

// app.get("/add/:num1/:num2", (request, response) => {
    
// })

// app.get("/subtract/:num1/:num2", (request, response) => {
    
// })

// app.get("/multiply/:num1/:num2", (request, response) => {
    
// })

// app.get("/divide/:num1/:num2", (request, response) => {
    
// })

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

