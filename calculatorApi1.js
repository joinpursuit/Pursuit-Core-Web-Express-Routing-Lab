const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

let ops = {
    add: (x, y) => parseFloat(x) + parseFloat(y),
    sub: (x, y) => parseFloat(x) - parseFloat(y),
    mul: (x, y) => parseFloat(x) * parseFloat(y),
    div: (x, y) => parseFloat(x) / parseFloat(y),
}

app.get('/:op/:n1/:n2', (req, res) => {
    let operator = req.params.op;
    let num1 = req.params.n1;
    let num2 = req.params.n2;
    if (!ops[operator] || isNaN(num1) || isNaN(num2)) {
        res.status(400);
        res.send(`ERROR: 
            ${!ops[operator] ? 'operation' : 'number'}: 
            ${!ops[operator] ? operator : isNaN(num1) ? num1 : num2} 
            is NOT a valid 
            ${!ops[operator] ? 'operation' : 'number'}.`)
    } else {
        res.status(200).json({
            number1: num1,
            operation: operator,
            number2: num2,
            answer: ops[operator](num1, num2),
        })
    }
})

app.use('*', (req, res) => res.status(404).send(`The endpoint you're looking for was not found.`));

app.listen(port, () => console.log('calc running...'))