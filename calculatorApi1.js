const express = require('express')
//const cors = require('cors')

const app = express()
const port = 8000;

//app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome Calculator API")
})

app.get("/add/:num1/:num2",(req,res) =>{
    // stored the number of the first paramater
    let number1 = req.params.num1 
    // stored the number of the second paramater
    let number2 = req.params.num2 
    // use parseInt function to turn string into number 
    let result = parseInt(number1) + parseInt(number2)
    let sum = {'num1': number1, 'num2': number2,'answer': result}
    res.json(sum)
  })

  app.get("/subtract/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) - parseInt(number2)
    let diff = {'num1': number1, 'num2': number2,'answer': result}
    res.json(diff)
  })

  app.get("/multiply/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) * parseInt(number2)
    let product = {'num1': number1, 'num2': number2,'answer': result}
    res.json(product)
  })

  app.get("/divide/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) / parseInt(number2)
    let quotient = {'num1': number1, 'num2': number2,'answer': result}
    res.json(quotient)
  })

//handle 404 status and app.use is for any method GET, PUSH, POST and * is a wildcard that return any endpoint that is considered invalid
app.use("*", (req, res) =>{
    console.log(req)
    res.status(404);
    res.send('This was not found')
})

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`)
})