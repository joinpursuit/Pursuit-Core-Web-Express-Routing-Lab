const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/add/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let realNum1 = parseInt(num1);
    let realNum2 = parseInt(num2);
    let data = {"num1": realNum1, "num2": realNum2, "result": (realNum1 + realNum2)}

    res.status(200);

    res.json(data);
})

app.get("/sub/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let realNum1 = parseInt(num1);
    let realNum2 = parseInt(num2);
    let data = {"num1": realNum1, "num2": realNum2, "result": (realNum1 - realNum2)}
    
    res.status(200);
    res.json(data);
})

app.get("/mul/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let realNum1 = parseInt(num1);
    let realNum2 = parseInt(num2);
    let data = {"num1": realNum1, "num2": realNum2, "result": (realNum1 * realNum2)}

    res.status(200);
    res.json(data);
})

app.get("/div/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let realNum1 = parseInt(num1);
    let realNum2 = parseInt(num2);
    let data = {"num1": realNum1, "num2": realNum2, "result": (realNum1 / realNum2)}

    res.status(200);
    res.json(data);
})

app.use("*", (req, res) => {
    res.status(404);
    res.send("Something went wrong");
})



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})