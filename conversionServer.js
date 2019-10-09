const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8000;

let result = {
    original: {},
    conversions: {}
};

app.get('/:value', (req, res) => {
    result.original.value = req.params.value;
    result.original.base = baseName('bin');
    result['conversions'] = conversion(result.original.value, result.original.base);
    
    console.log('Default Binary Conversion');
    res.status(200).json(result);
})

app.get('/:value/:base', (req, res) => {
    result.original.value = req.params.value;
    result.original.base = baseName(req.params.base);

    if (base === 'bin') {
        console.log('Binary Conversion');
        result['conversions'] = conversion(result.original.value, 2);
    } else if (base === 'dec') {
        console.log('Decimal Conversion');
        result['conversions'] = conversion(result.original.value, 10);
    } else if (base === 'hex') {
        console.log('Hexadecimal Conversion');
        result['conversions'] = conversion(result.original.value, 16);
    }

    res.status(200).json(result);
})

app.listen(port, () => {
    console.log(`Live at http://localhost:${port}`);
})

const baseName = (value) => {
    if (value === 'bin') {
        return 'Binary';
    } else if (value === 'hex') {
        return 'Hexadecimal';
    } else if (value === 'dec') {
        return 'Binary';
    }
}

const conversion = (value, base) => {
    const decimal = parseInt(value, base);
    const binary = decimal.toString(2);
    const hex = decimal.toString(16);

    return {
        decimal,
        binary,
        hex
    }
}

// 'You have to try it the hard way to see the pattern and only then, can you simplify it.' - Yours Truly

/*
const binary = (bin) => {
    const decimal = parseInt(binary, 2);
    const binary = decimal.toString(2);
    const hex = decimal.toString(16);

    return {
        decimal,
        binary,
        hex
    }
}

const hex = (hex) => {
    const decimal = parseInt(hex, 16);
    const binary = decimal.toString(2);
    const hex = decimal.toString(16);

    return {
        decimal,
        binary,
        hex
    }
}

const decimal = (dec) => {
    const decimal = parseInt(dec, 10);
    const binary = decimal.toString(2);
    const hex = decimal.toString(16);

    return {
        decimal,
        binary,
        hex
    }
}
*/