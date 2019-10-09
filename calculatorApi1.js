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

app.get('/sub', (request, response)=>{

})

app.get('/mul', (request, response)=>{

});

app.get('/div', (request, response)=>{

});

app.listen(port, ()=>{
    console.log('ok.')
})
