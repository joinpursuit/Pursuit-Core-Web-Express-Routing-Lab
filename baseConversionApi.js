const express = require('express');
// const cors = require('cors');
const app = express();
// app.use(cors());
const port = 8000;

app.get(`/:num/:base`, (req, res) => {
    let num = parseInt(req.params.num)
    let base = req.params.base

    res.status(200).jsonp(converter(num, base))
})

const converter = (inputNum, base) => {
    let binCon
    let hex;
    let decimal;
    let binary;

    switch (base) {
        case 'bin':
            binCon = 2
            binary = inputNum.toString(2);
            decimal = parseInt(binary, binCon)
            decimal = decimal.toString(10);
            hex = inputNum.toString(16);
            break;
        case 'dec':
            binCon = 10
            decimal = parseInt(inputNum)
            binary = decimal.toString(2);
            decimal = decimal.toString(10);
            hex = inputNum.toString(16);
            break;
        case 'hex':
            binCon = 16
            decimal = parseInt(inputNum, binCon)
            binary = decimal.toString(2);
            decimal = decimal.toString(10);
            hex = inputNum;
            break;
        default:
            binCon = 'nothing to see here';
            binary = null;
            decimal = null;
            hex = null
            break;
    }
    let data = {
        'original': {
            'value': inputNum,
            'base': binCon
        },
        'conversions': {
            'decimal': decimal,
            'binary': binary,
            'hex': hex
        }
    }

    return data
}

app.get(`/:num`, (req, res) => {
    let num = parseInt(req.params.num)
    const base = 'dec'

    res.status(200).jsonp(converter(num, base))
})

app.use('*', (req, res) => res.status(404).send('You took a wrong turn'));


app.listen(port, () => console.log(`Listening on port ${port}`));