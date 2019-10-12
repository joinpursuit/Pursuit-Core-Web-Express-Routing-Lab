const myServer = require('express');
const myCors = require('cors');

const port = 7878;
let myApp = myServer();
myApp.use(myCors())

myApp.listen(port, () => {
    console.log("listening on port :", port);
})

const handelRequest = (receivedNum, base) => {
    let conversionBase;
    let rightInput = 'invalid';
    let binNum = null;
    let decNum = null;
    let HexNum = null;

    switch(base) {
        case "bin": conversionBase = 2;
            break;
        case "dec": conversionBase = 10;
            break;
        case "hex": conversionBase = 16;
            break;
        default: conversionBase = "Unknown Base";
            break;
    }

    decNum = parseInt(receivedNum, conversionBase)
    if (!isNaN(decNum)) {
        rightInput = 'ok';
    }
    binNum = decNum.toString(2);
    HexNum = decNum.toString(16);

    let data = {
        rightInput: rightInput,
        original: { value: receivedNum, base: conversionBase },
        conversions: { decimal: decNum, binary: binNum, hexadecimal: HexNum}
    }
    return data;
}

myApp.get('/:num/:base', (request, response) => {
    response.status(200);
    let base = request.params.base;
    let num = request.params.num;
    
    response.json(handelRequest(num, base));
})

myApp.get('/:num', (request, response) => {
    response.status(200);
    let base = "dec";
    let num = request.params.num;
    
    response.json(handelRequest(num, base));
})


myApp.get('*', (request, response) => {
    let data = {
        rightInput: `Please double check your input`
    }
    response.json(data);
})