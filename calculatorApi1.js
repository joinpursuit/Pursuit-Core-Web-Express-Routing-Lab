const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// const add = {
//     1: {num1:"1", num2: "2", }
// }
// const sub = {
//     1: {num1:"", num2: "", results: ""}
// }
// const mul = {
//     1: {num1:"", num2: "", results: ""}
// }
// const div = {
//     1: {num1: "", num2: "", results: ""}
// }

app.get("/add", (req, res) => {
    // debugger
})

app.get("/add/:num1/:num2/", (req, res) => {
    // req.params[results] = 1
    // console.log(req.params)
    // console.log(req.params.num1);
    res.json({num1: req.params.num1,result: req.params.num1 + req.params.num2})
    // debugger
})

// app.get("/sub/:num1/:num2/", (req, res) => {

// })

// app.get("/mul/:num1/:num2/", (req, res) => {

// })

// app.get("/div/:num1/:num2/", (req, res) => {

// })

app.listen(port, () => {
    console.log("Server is running on Port " + port)
})