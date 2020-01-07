const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000


app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params)
    res.json()
})

app.get("/sub/:num1/:num2", (req, res) =>{
    console.log(req.params)
    res.json()
})

app.get("/mul/:num1/:num2", (req, res) => {
    console.log(req.params)
    res.json()
})

app.get("/div/:num1/:num2", (req, res) =>{
    console.log(req.params)
    res.json()
})


app.listen(port, () => {
    console.log("Port is running on", port)
})