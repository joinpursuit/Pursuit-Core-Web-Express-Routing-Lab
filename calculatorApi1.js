const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8000;

const add = (a, b) => parseFloat(a) + parseFloat(b);
const sub = (a, b) => parseFloat(a) - parseFloat(b);
const mul = (a, b) => parseFloat(a) * parseFloat(b);
const div = (a, b) => parseFloat(a) / parseFloat(b);

const result = {};

app.get('/add/:num1/:num2', (req, res) => {
    checkAndCalculate(req, res, add);
    res.status(200).json(result);
})

app.get('/sub/:num1/:num2', (req, res) => {
    checkAndCalculate(req, res, sub);
    res.status(200).json(result);
})

app.get('/mul/:num1/:num2', (req, res) => {
    checkAndCalculate(req, res, mul);
    res.status(200).json(result);
})

app.get('/div/:num1/:num2', (req, res) => {
    checkAndCalculate(req, res, div);
    res.status(200).json(result);
})

app.use('*', (req, res) => {
    res.status(404).send(`Invalid url try: /add /sub /mul /div followed by /#/#`);
})

app.listen(port, () => {
    console.log(`Live at http://localhost${port}`);
})

const checkAndCalculate = (req, res, operation) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('Stop playing, only numbers are allowed.');
    }

    result['num1'] = num1;
    result['num2'] = num2;
    result['result'] = operation(result.num1, result.num2);
}