const express = require('express')
const cors =require('cors')
let app = express()
const port = 8004;
app.use(cors())
app.get('/', (request, response)=>{
    response.send('Calculator API /')
});


app.get("/add/:num1/:num2",(require,response) =>{
  
    let number1 = require.params.num1 
    let number2 = require.params.num2 
    let result = parseInt(number1) + parseInt(number2)
    console.log(typeof parseInt(require.params.number1));
    console.log(parseInt(require.params.number2));
    let sum = {'num1': number1, 'num2': number2,'answer': result}
    response.json(sum)
  })
  app.get("/sub/:num1/:num2",(require,response) =>{
    let number1 = require.params.num1 
    let number2 = require.params.num2 
    let result = parseInt(number1) + parseInt(number2)
    console.log(typeof parseInt(require.params.number1));
    console.log(parseInt(require.params.number2));
    let difference = {'num1': number1, 'num2': number2,'answer': result}
    
    response.json(difference)
  })
  app.get("/multiply/:num1/:num2",(require,response) =>{
    let number1 = require.params.num1 
    let number2 = require.params.num2 
    let result = parseInt(number1) + parseInt(number2)
    console.log(typeof parseInt(require.params.number1));
    console.log(parseInt(require.params.number2));
    let multiply = {'num1': number1, 'num2': number2,'answer': result}
    response.json(multiply)
  })
  app.get("/divide/:num1/:num2",(require,response) =>{
    let number1 = require.params.num1 
    let number2 = require.params.num2 
    let result = parseInt(number1) + parseInt(number2)
    console.log(typeof parseInt(require.params.number1));
    console.log(parseInt(require.params.number2));
    let divide = {'num1': number1, 'num2': number2,'answer': result}
    response.json(divide)
  })
app.listen(port,()=>{
    console.log(`server is running on http://localhost${port}`)
})