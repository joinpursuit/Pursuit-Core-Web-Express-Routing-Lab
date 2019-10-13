const myServer = require('express');
const myCors = require('cors');

const port = 8787;
let myApp = myServer();
myApp.use(myCors())

myApp.listen(port, () => {
    console.log("listening on port :", port);
})

myApp.get('/sum/:num1/:num2', (request, response) => {
    response.status(200);
    let num1 = parseFloat(request.params.num1);
    let num2 = parseFloat(request.params.num2);
    let result = num1 + num2;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Only numbers please"
    }

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    
    response.json(data);
})


myApp.get('/sub/:num1/:num2', (request, response) => {
    response.status(200);
    let num1 = parseFloat(request.params.num1);
    let num2 = parseFloat(request.params.num2);
    let result = num1 - num2;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Only numbers please"
    }

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    
    response.json(data);
})


myApp.get('/mul/:num1/:num2', (request, response) => {
    response.status(200);
    let num1 = parseFloat(request.params.num1);
    let num2 = parseFloat(request.params.num2);
    let result = num1 * num2;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Only numbers please"
    }

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
    
    response.json(data);
})


myApp.get('/div/:num1/:num2', (request, response) => {
    response.status(200);
    let num1 = parseFloat(request.params.num1);
    let num2 = parseFloat(request.params.num2);
    let result = num1 / num2;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Only numbers please"
    }
    if (num2 === 0) {
        result = "Can't divide a number by 0";
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