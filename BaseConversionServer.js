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
    let binNum;
    let decNum;
    let HexNum;

    switch(base) {
        case "bin": conversionBase = 2;
            decNum = parseInt(receivedNum, 2)
            if (decNum) {
                binNum = receivedNum;
                decNum = decNum.toString(10);
                HexNum = decNum.toString(16);
            }
            break;
        case "dec": conversionBase = 10;
            decNum = parseInt(receivedNum);
            if (decNum) {
                binNum = decNum.toString(2);
                decNum = decNum.toString(10);
                HexNum = decNum.toString(16);
            }
            break;
        case "hex": conversionBase = 16;
            decNum = parseInt(receivedNum, 16)
            if (decNum) {
                binNum = decNum.toString(2);
                decNum = decNum.toString(10);
                HexNum = receivedNum;
            }
            break;
        default: conversionBase = "Unknown Base";
            binNum = null
            decNum = null;
            HexNum = null;
            break;
    }

    let data = {
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
        conversionBase: `Interesting endpoint, unfortunately, there is nothing in here\nBESIDE THIS, YOU'RE A GENIUS, how did you get here !?!?`
    }
    response.json(data);
})