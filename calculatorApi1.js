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
    if (!ops[req.params.op] || isNaN(req.params.n1) || isNaN(req.params.n2)) {
        res.status(400);
        res.send(`ERROR: 
            ${!ops[req.params.op] ? 'operation' : 'number'}: 
            ${!ops[req.params.op] ? req.params.op : isNaN(req.params.n1) ? req.params.n1 : req.params.n2} 
            is NOT a valid 
            ${!ops[req.params.op] ? 'operation' : 'number'}.`)
    } else {
        res.status(200).json({
            number1: req.params.n1,
            operation: req.params.op,
            number2: req.params.n2,
            answer: ops[req.params.op](req.params.n1, req.params.n2),
        })
    }
})

app.use('*', (req, res) => res.status(404).send(`The endpoint you're looking for was not found.`));

app.listen(port, () => console.log('calc running...'))