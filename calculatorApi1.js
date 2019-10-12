const express = require('express')
const cors = require('cors')
const app = express()
const port = 8004;
app.use(cors())

app.use(express.static(__dirname))

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/calculatorAPI.html')
    
});

app.get("/add/:num1/:num2",(request,response) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let answer = parseFloat(number1) + parseFloat(number2)
    let sum = {'num1': number1, 'num2': number2,'answer': answer}
    // req.params.type
    // if req.params ====
    response.json(sum)
  })
  
  app.get("/subtract/:num1/:num2",(request,response) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let answer = parseFloat(number1) - parseFloat(number2)
    let sum = {'num1': number1, 'num2': number2,'answer': answer}
    response.json(sum)
  })
  app.get("/multiply/:num1/:num2",(request,res) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let answer = parseFloat(number1) *  parseFloat(number2)
    let sum = {'num1': number1, 'num2': number2,'answer': answer}
    response.json(sum)
  })
  app.get("/divide:num1/:num2",(request,response) =>{
    let number1 = request.params.num1 
    let number2 = request.params.num2 
    let answer = parseFloat(number1) / parseFloat(number2)
    let sum = {'num1': number1, 'num2': number2,'answer': answer}
    res.json(sum)
  })
  // if (isNaN(number1)|| isNaN(number2)){
  //   response.send("only numbers")
  //   return;
  // }
  app.get('/:operator/:num1/num2',(request, response)=>{
 let number1= parseFloat(request.params.num1)
 let number2= parseFloat(request.params.num2)
 let operator = request.params.operator;
 if (isNaN(num1)|| isNaN(num2)) {
 response.send('numbers only')
 return;
  }
  const operations ={
    "div": (a,b)=>{return a/b},
    "mul": (a,b)=>{return a *b },
    "add": (a,b)=>{return a+b},
    "sub": (a,b)=>{return a-b},

  }
  let result = operations[operator](number1,number2)

  })
app.listen(port,()=>{
    console.log(`server is running on http://localhost${port}`)
})