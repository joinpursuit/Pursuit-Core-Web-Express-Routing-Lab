const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

app.use(cors())

app.get('/', (request, response) => {
    response.status(200)
    response.send('GET request to the homepage')
})

app.get('/:operator/:num1/:num2', (request, response) => {
    let num1 = parseInt(request.params.num1);
    let num2 = parseInt(request.params.num2);
    let operator = request.params.operator; 

    const operations = {
        "div": (a, b) => {return a / b},
        "mul": (a, b) => a * b,
        "add": (a, b) => {return a + b},
        "sub": (a, b) => {return a - b}
    }

    if(isNaN(num1) || isNaN(num2)) {
        response.send('Numbers only please!')
        return; 
    } else if (!operations[operator]){
        response.send('The operator is not supported')
        return; 
    }

    let result = operations[operator](num1, num2)

    let data = {
        num1: num1,
        num2: num2,
        result: result
    }
   response.json(data)
})

app.use('*', (request, response) => {
    response.status(404).send('This was not found =( 404')
})

app.listen(port)