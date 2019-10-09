const myServer = require('express');
const myCors = require('cors');

const port = 8778;
let myApp = myServer();
myApp.use(myCors())

myApp.listen(port, () => {
    console.log("listening on port :", port);
})

myApp.get('/:operant/:num1/:num2', (request, response) => {
    response.status(200);
    let operant = request.params.operant;
    let num1 = parseFloat(request.params.num1);
    let num2 = parseFloat(request.params.num2);
    let result;

    switch(operant) {
        case "sum": result = num1 + num2;
            break;
        case "sub": result = num1 - num2;
            break;
        case "mul": result = num1 * num2;
            break;
        case "div": result = num1 / num2;
            break;
        default: result = "Sorry, enable to process your operant";
            break;
    }

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    
    response.json(data);
})


myApp.get('*', (request, response) => {
    let data = {
        result: `Interesting endpoint, unfortunately, there is nothing in here\nBESIDE THIS, YOU'RE A GENIUS, how did you get here !?!?`
    }
    response.json(data);
})