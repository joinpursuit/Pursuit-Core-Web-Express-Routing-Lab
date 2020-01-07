const express = require("express");
const app = express();
const port = 3000;



const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

app.get("/", (req, res) => {
    res.send("You made request")
})

app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params)
    // let n1 = req.params.num1
    // let n2 = req.params.num2
    // let result = add(parseInt(n1),parseInt(n2))
    res.json(add(parseInt(req.params.num1),parseInt(req.params.num2)))

})

app.listen(port, () => {
    console.log("Server is running on port: ", port)
})