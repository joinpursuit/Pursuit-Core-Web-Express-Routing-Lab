const express = require("express");
const cors = require("cors")
const app = express();
const port = 3000;
app.use(cors())


const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

app.get("/", (req, res) => {
    res.send("You made request")
})

app.get("/add/:num1/:num2", (req, res) => {
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = add(parseInt(n1),parseInt(n2))

    if(result === null){
        result = req.params["numbers only"]
    }
    
    res.json({"num1" : n1, "num2" : n2, "result": result})

})
app.get("/subtract/:num1/:num2", (req, res) => {
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = subtract(parseInt(n1),parseInt(n2))

    if(result === null){
        result = req.params["numbers only"]
    }
    
    res.json({"num1" : n1, "num2" : n2, "result": result})

})

app.get("/multiply/:num1/:num2", (req, res) => {
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = multiply(parseInt(n1),parseInt(n2))

    if(result === null){
        result = req.params["numbers only"]
    }
    
    res.json({"num1" : n1, "num2" : n2, "result": result})

})
app.get("/divide/:num1/:num2", (req, res) => {
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = divide(parseInt(n1),parseInt(n2))

    if(result === null){
        result = req.params["numbers only"]
    }
    
    res.json({"num1" : n1, "num2" : n2, "result": result})

})



app.get("/subtract/:num1/:num2", (req, res) => {
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = subtract(parseInt(n1),parseInt(n2))

    if(result === null){
        result = req.params["numbers only"]
    }
    
    res.json({"num1" : n1, "num2" : n2, "result": result})

})

app.get("/multiply/:num1/:num2", (req, res) => {
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = multiply(parseInt(n1),parseInt(n2))

    if(result === null){
        result = req.params["numbers only"]
    }
    
    res.json({"num1" : n1, "num2" : n2, "result": result})

})

app.get("/divide/:num1/:num2", (req, res) => {
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = divide(parseInt(n1),parseInt(n2))

    if(result === null){
        result = req.params["numbers only"]
    }
    
    res.json({"num1" : n1, "num2" : n2, "result": result})

})



app.listen(port, () => {
    console.log("Server is running on port: ", port)
})