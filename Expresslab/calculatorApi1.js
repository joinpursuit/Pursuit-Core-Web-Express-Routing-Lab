const express = require('express')
const cors = require('cors')
const app = express()
const port = 8004;
app.use(cors())

app.use(express.static(__dirname))

// app.get('/', (request, response)=>{
//   response.sendFile(__dirname + '/calculatorAPI.html')
    
// });

app.get("/add/:num1/:num2",(request,response) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let result = parseInt(number1) + parseInt(number2)
    let sum = {'num1': number1, 'num2': number2,'answer': result}
    // req.params.type
    // if req.params ====
    response.json(sum)
  })
  
  app.get("/sub/:num1/:num2",(request,response) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let result = parseInt(number1) - parseInt(number2)
    let subtract = {'num1': number1, 'num2': number2,'answer': result}
    response.json(subtract)
  })
  app.get("/multiply/:num1/:num2",(request,res) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let result = parseInt(number1) *  parseInt(number2)
    let multiply = {'num1': number1, 'num2': number2,'answer': result}
    response.json(multiply)
  })
  app.get("/add/:num1/:num2",(request,response) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let result = parseInt(number1) / parseInt(number2)
    let divide = {'num1': number1, 'num2': number2,'answer': result}
    res.json(divide)
  })
app.listen(port,()=>{
    console.log(`server is running on http://localhost${port}`)
})