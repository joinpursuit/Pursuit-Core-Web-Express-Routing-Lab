const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8000;

const sub = (a, b) => parseInt(a) - parseInt(b);
const add = (a, b) => parseInt(a) + parseInt(b);
const mul = (a, b) => parseInt(a) * parseInt(b);
const div = (a, b) => parseInt(a) / parseInt(b);

const result = {};

app.get('/:operation/:num1/:num2', (req, res) => {
    checkAndCalculate(req, res);
    res.status(200).json(result);
})

app.use('*', (req, res) => {
    res.status(404).send(`Invalid url try: /add /sub /mul /div followed by /#/#`);
})

app.listen(port, () => {
    console.log(`Live at http://localhost${port}`);
})

const checkAndCalculate = (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
    const operation = req.params.operation;

    console.log(operation);

    if (!['add', 'sub', 'mul', 'div'].includes(operation) || isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Stop playing, only numbers are allowed.');
    }

    result['num1'] = num1;
    result['num2'] = num2;
    result['operation'] = operation;

    if (operation === 'add') {
        result['answer'] = add(num1, num2);
    } else if (operation === 'sub') {
        result['answer'] = sub(num1, num2);
    } else if (operation === 'mul') {
        result['answer'] = mul(num1, num2);
    } else if (operation === 'div') {
        result['answer'] = div(num1, num2);
    }
}