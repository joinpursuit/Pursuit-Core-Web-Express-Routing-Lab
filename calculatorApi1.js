const express = require('express');
const app = express();
const port = 4000;


app.get('/',(request, response)=>{
    response.send('./calculatorApi1.html')
})

app.get('/add/:num1/:num2', (request, response)=>{
    let num1 = request.params.num1
    let num2 = request.params.num2

    const add = (a,b) =>{
        return a + b 
    }

    let json = {
        first: num1,
        second: num2,
        result: add(num1,num2)
    }

    response.json(json);
    response.status(200);

})

app.get('/sub/:num1/:num2', (request, response)=>{
    let num1 = request.params.num1
    let num2 = request.params.num2

    const sub =(a,b)=>{
        return a - b
    }

    let subJSON = {
        first: num1,
        second: num2,
        result: sub(num1,num2)
    }

    response.json(subJSON)
    response.status(200)

})

app.get('/mul/:num1/:num2', (request, response)=>{
    let num1 = request.params.num1
    let num2 = request.params.num2

    const mul =(a, b)=>{
        return a * b
    }

    let mulJSON ={
        first: num1, 
        second: num2, 
        result: mul(num1, num2)
    }
    
    response.json(mulJSON)
    response.status(200)
});

app.get('/div/:num1/:num2', (request, response)=>{
    let num1 = request.params.num1
    let num2 = request.params.num2

    const div = (a,b)=>{
        return (a / b)
    }

    let divJSON = {
        first: num1, 
        second: num2, 
        result: div(num1, num2)
    }
    response.json(divJSON)
    response.status(200)
});

app.listen(port, ()=>{
    console.log('ok.')
})
