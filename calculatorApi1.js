const express = require("express");
const app = express();
const cors = require("cors");
const math = require("./math.js");
const port = 8000;

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