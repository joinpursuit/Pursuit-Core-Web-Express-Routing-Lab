const express = require("express");
const server = express();
const port = 8080;
const cors = require("cors");

server.use(cors());
server.get("/", (req, res) => {
    console.log("welcome to my calculator API")
})
server.get("/add/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let sum = num1 + num2;
})
server.listen(port)