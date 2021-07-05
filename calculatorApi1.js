const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000


const addNum = (num1,num2) => {
    return num1 + num2
}

const subNum = (num1,num2) => {
    return num1 - num2
}

const mulNum = (num1,num2) => {
    return num1 * num2
}

const divNum = (num1,num2) => {
    return num1 / num2
}

app.get("/", (req, res) =>{
    res.send("You made a get request at / url. Go ahead and add/sub/mul/div")
})

app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params)
    res.json(addNum(parseInt(req.params.num1), parseInt(req.params.num2)))
})

app.get("/sub/:num1/:num2", (req, res) =>{
    console.log(req.params)
    res.json(subNum(parseInt(req.params.num1), parseInt(req.params.num2)))
})

app.get("/mul/:num1/:num2", (req, res) => {
    console.log(req.params)
    res.json(mulNum(parseInt(req.params.num1), parseInt(req.params.num2)))
})

app.get("/div/:num1/:num2", (req, res) =>{
    console.log(req.params)
    res.json(divNum(parseInt(req.params.num1), parseInt(req.params.num2)))
})

app.listen(port, () => {
    console.log("Port is running on", port)
})

