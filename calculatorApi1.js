const express = require("express");
const server = express();
const port = 8080;
const cors = require("cors");
const mathMod = require("./math_mods.js")

server.use(cors());
server.get("/", (req, res) => {
    console.log("Welcome to my calculator API")
})
server.get("/add/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let result = mathMod.add(num1, num2);
    let obj = {
        "num1": num1,
        "num2": num2,
        "result": result
    }
    res.json(obj)
})
server.get("/sub/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let result = mathMod.sub(num1, num2);
    let obj = {
        "num1": num1,
        "num2": num2,
        "result": result
    }
    res.json(obj);
})
server.get("/mul/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let result = mathMod.mul(num1, num2);
    let obj = {
        "num1": num1,
        "num2": num2,
        "result": result
    }
    res.json(obj)
})
server.get("/div/:num1/:num2", (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let result = mathMod.div(num1, num2);
    let obj = {
        "num1": num1,
        "num2": num2,
        "result": result
    }
    res.json(obj)
})
server.use("*", () => {
    console.log("Hi, that function doesn't exist, as this server can only add, subtract, divide and multiply! 404!")
})
server.listen(port, () => {
    console.log(`Now listening to Port: ${port}`)
})