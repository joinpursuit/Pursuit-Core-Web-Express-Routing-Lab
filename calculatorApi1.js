const express = require('express')
const operation = require('./math_operations.js')
const cors = require('cors')

const app = express()
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Home page Yerrr')
})

// app.get('/add/:num1/:num2', (req, res) => {
//     let firstNumAdd = parseFloat(req.params.num1)
//     let secondNumAdd = parseFloat(req.params.num2)

//     if(isNaN(firstNumAdd)|| isNaN(secondNumAdd)){
//         res.send('Not a valid input !!!')
//     }

//     res.status(200)
//     res.json({
//         'num1': firstNumAdd,
//         'num2': secondNumAdd,
//         'result': operation.add(firstNumAdd, secondNumAdd) })
// })

// app.get('/subtract/:num1/:num2', (req, res) => {
//     let firstNumSub = parseFloat(req.params.num1)
//     let secondNumSub = parseFloat(req.params.num2)

//     if(isNaN(firstNumSub)|| isNaN(secondNumSub)){
//         res.send('Not a valid input !!!')
//     }

//     res.status(200)
//     res.json({
//         'num1': firstNumSub,
//         'num2': secondNumSub,
//         'result': operation.subtract(firstNumSub, secondNumSub) })
// })

// app.get('/multiply/:num1/:num2', (req, res) => {
//     let firstNumMultiply = parseFloat(req.params.num1)
//     let secondNumMultiply = parseFloat(req.params.num2)

//     if(isNaN(firstNumMultiply)|| isNaN(secondNumMultiply)){
//         res.send('Not a valid input !!!')
//     }

//     res.status(200)
//     res.json({
//         'num1': firstNumMultiply,
//         'num2': secondNumMultiply,
//         'result': operation.multiply(firstNumMultiply, secondNumMultiply) })
// })

// app.get('divide/:num1/:num2', (req, res) => {
//     let firstNumDivide = parseFloat(req.params.num1)
//     let secondNumDivide = parseFloat(req.params.num2)

//     if(isNaN(firstNumDivide)|| isNaN(secondNumDivide)){
//         res.send('Not a valid input !!!')
//     }

//     res.status(200)
//     res.json({
//         'num1': firstNumDivide,
//         'num2': secondNumDivide,
//         'result': operation.divide(firstNumDivide, secondNumDivide) })
// })

app.get ('/:operator/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let operator = req.params.operator

    if(isNaN(num1)|| isNaN(num2)){
        res.send('Not a valid input !!!')
    }

    const operations = {
        'add': (a,b) => {return a + b},
        'subtract': (a,b) => {return a - b},
        'multiply': (a,b) => {return a * b},
        'divide': (a,b) => {return a / b},   
    }

    if(operations[operator]){
        let result = operations[operator](num1, num2)

        let data = {
            num1: num1,
            num2: num2,
            result: result
        }
        res.status(200)
        res.json(data)
    } else{
        res.send('Invalid operator')
    }  
})

app.use('*', (req, res) => {
    res.send('Did not use a number or are missing an input: Use two numbers!!!')
})
app.listen(port, () => {
    console.log(`Server is running my guy at localhost:${port}`)
})