const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors());

let conversions = {
    dec: (x, base) => base === 'dec' ? x : base === 'bin' ? parseFloat(x, 2) : parseFloat(x, 16),
    bin: (x, base) => base === 'bin' ? x : base === 'bin' ? parseFloat(x, 2) : parseFloat(x, 16),
    hex: (x, base) => base === 'hex' ? x : base === 'bin' ? parseFloat(x, 2) : parseFloat(x, 16),
}

app.get('/:num/:base/', (req, res) => {
    let base = req.params.base;
    let num = req.params.num;
    if (!conversions[base] || isNaN(num)) {
        res.status(400);
        res.send(`ERROR: 
            ${!conversions[base] ? 'base' : 'number'}: 
            ${!conversions[base] ? base : num} 
            is NOT a valid 
            ${!conversions[base] ? 'base' : 'number'}.`)
    } else {
        res.status(200).json({
            dec: base === 'dec' ? num : base === 'bin' ? parseFloat(x, 2) : parseFloat(x, 16),
            bin: op,
            hex: n2,
        })
    }
})

app.use('*', (req, res) => res.status(404).send(`The endpoint you're looking for was not found.`));

app.listen(port, () => console.log('base converter running...'))