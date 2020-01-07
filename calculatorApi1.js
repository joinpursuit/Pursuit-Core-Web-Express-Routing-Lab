const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;



app.get("/add/:num1/:num2", (req, res) => {
    let numA = parseInt(req.params.num1);
    let numB = parseInt(req.params.num2);
    if(isNaN(numA) || isNaN(numB)) {
        res.send("numbers only")
    } else {
        res.json({
            "num1": numA, 
            "num2": numB, 
            "result": (numA + numB)
        });
    }
})
app.get("/sub/:num1/:num2", (req, res) => {
    let numA = parseInt(req.params.num1);
    let numB = parseInt(req.params.num2);
    if(isNaN(numA) || isNaN(numB)) {
        res.send("numbers only")
    } else {
        res.json({
            "num1": numA, 
            "num2": numB, 
            "result": (numA - numB)
        });
    }
})
app.get("/mul/:num1/:num2", (req, res) => {
    let numA = parseInt(req.params.num1);
    let numB = parseInt(req.params.num2);
    if(isNaN(numA) || isNaN(numB)) {
        res.send("numbers only")
    } else {
        res.json({
            "num1": numA, 
            "num2": numB, 
            "result": (numA * numB)
        });
    }
})
app.get("/div/:num1/:num2", (req, res) => {
    let numA = parseInt(req.params.num1);
    let numB = parseInt(req.params.num2);
    if(isNaN(numA) || isNaN(numB)) {
        res.send("numbers only")
    } else {
        res.json({
            "num1": numA, 
            "num2": numB, 
            "result": (numA / numB)
        });
    }
})

app.get("/", (req, res) => {
    res.send("Input two numbers in the url with a / in between to use the calculator.")
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})