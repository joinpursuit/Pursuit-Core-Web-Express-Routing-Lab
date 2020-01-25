const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;


app.use(cors());

const add = (num1,num2) => parseInt(num1) + parseInt(num2);
const subtract = (num1, num2) => parseInt(num1) - parseInt(num2);
const multiply = (num1,num2) => parseInt(num1) * parseInt(num2);
const divide = (num1,num2) => parseInt(num1) / parseInt(num2);

const calculate = (operator, num1, num2) => {
    if (operator === "add"){
        return add(num1,num2)
        console.log(add(num1,num2))
    } else if (operator === "subtract"){
        return subtract(num1,num2)
    } else if (operator === "multiply"){
        return multiply(num1,num2)
    } else if (operator === "divide"){
        return divide(num1,num2)
    } else if (isNan(num1) || isNan(num2)){
        res.status(400).send("Please input valid numbers")
    }
}

app.get("/:operator/:num1/:num2", (req, res) => {
    let operator = req.params.operator
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let calc = calculate(operator, num1,num2)

    let answer = {
        num1: num1,
        num2: num2,
        calculation: calc
    }
    
    res.status(200)
    res.json(answer)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})