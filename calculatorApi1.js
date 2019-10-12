const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

app.use(cors())

app.get('/', (request, response) => {
    response.status(200)
    response.send('GET request to the homepage')
})


app.get('/add/:num1/:num2', (request, response) => {
    response.status(200)
    
    const addTwoNums = (number1, number2) => {
        return number1 + number2
    }

    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    let result = addTwoNums(num1, num2)

    if (isNaN(num1) || isNaN(num2)) {
        response.send("Only numbers please!")
        return; 
    }
    
    let data = {
        num1: num1,
        num2: num2,
        result: result,
    }
    
    response.json(data)

})

app.get('/sub/:num1/:num2', (request, response) => {
    response.status(200)
    
    const subtractTwoNums = (number1, number2) => {
        return number1 - number2
    }

    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    let result = subtractTwoNums(num1, num2)

    if (isNaN(num1) || isNaN(num2)) {
        response.send("Only numbers please!")
        return; 
    }
    
    let data = {
        num1: num1,
        num2: num2,
        result: result,
    }

 
    response.json(data)
})

app.get('/mul/:num1/:num2', (request, response) => {
    response.status(200)
   
    const multiplyTwoNums = (number1, number2) => {
        return number1 * number2
    }

    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    let result = multiplyTwoNums(num1, num2)

    if (isNaN(num1) || isNaN(num2)) {
        response.send("Only numbers please!")
        return; 
    }
    
    let data = {
        num1: num1,
        num2: num2,
        result: result,
    }
    response.json(data)
})

app.get('/div/:num1/:num2', (request, response) => {
    response.status(200)
   
    const divideTwoNums = (number1, number2) => {
        return number1 / number2
    }

    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    let result = divideTwoNums(num1, num2)
    
    if (isNaN(num1) || isNaN(num2)) {
        response.send("Only numbers please!")
        return; 
    }
    
    let data = {
        num1: num1,
        num2: num2,
        result: result,
    }
    response.json(data)
})


app.use('*', (request, response) => {
    response.status(404).send('This was not found =( 404')
})


app.listen(port)

   