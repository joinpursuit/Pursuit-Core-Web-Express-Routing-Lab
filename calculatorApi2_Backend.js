const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;


app.use(cors());

app.get("/:op/:num1/:num2", (req, res) => {
    let operator = req.params.op
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    
    let answer = {
        num1: num1,
        num2: num2,
        result: parseInt(num1) + operator + parseInt(num2)
    }
    
    res.status(200)
    res.json(answer)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})