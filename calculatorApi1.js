const express = require('express')
const operation = require('./math_operations.js')
const cors = require('cors')

const app = express()
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Home page Yerrr')
})

app.get('/add/:num1/:num2', (req, res) => {
    let firstNumAdd = parseInt(req.params.num1)
    let secondNumAdd = parseInt(req.params.num2)

    if(isNaN(firstNumAdd)|| isNaN(secondNumAdd)){
        res.send('Not a valid input !!!')
    }

    res.status(200)
    res.json({'num1': firstNumAdd,'num2': secondNumAdd,'result': operation.add(firstNumAdd, secondNumAdd) })
})

app.get('/subtract/:num1/:num2', (req, res) => {
    let firstNumSub = parseInt(req.params.num1)
    let secondNumSub = parseInt(req.params.num2)

    if(isNaN(firstNumSub)|| isNaN(secondNumSub)){
        res.send('Not a valid input !!!')
    }

    res.status(200)
    res.json({'num1': firstNumSub,'num2': secondNumSub,'result': operation.subtract(firstNumSub, secondNumSub) })
})

app.get('/multiply/:num1/:num2', (req, res) => {
    let firstNumMultiply = parseInt(req.params.num1)
    let secondNumMultiply = parseInt(req.params.num2)

    if(isNaN(firstNumMultiply)|| isNaN(secondNumMultiply)){
        res.send('Not a valid input !!!')
    }

    res.status(200)
    res.json({'num1': firstNumMultiply,'num2': secondNumMultiply,'result': operation.multiply(firstNumMultiply, secondNumMultiply) })
})

app.get('divide/:num1/:num2', (req, res) => {
    let firstNumDivide = parseInt(req.params.num1)
    let secondNumDivide = parseInt(req.params.num2)

    if(isNaN(firstNumDivide)|| isNaN(secondNumDivide)){
        res.send('Not a valid input !!!')
    }

    res.status(200)
    res.json({'num1': firstNumDivide,'num2': secondNumDivide,'result': operation.divide(firstNumDivide, secondNumDivide) })
})

app.use('*', (req, res) => {
    res.send('Did not use a number or are missing an input: Use two numbers!!!')
})
app.listen(port, () => {
    console.log(`Server is running my guy at localhost:${port}`)
})