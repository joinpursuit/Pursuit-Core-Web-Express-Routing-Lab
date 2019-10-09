const express = require('express')
const cors = require('cors')
const app = express()
const port = 8004;
app.use(cors())
app.get('/', (request, response)=>{
  response.sendFile(__dirname + "/index.html")
    
});

app.get('/add',(request,response)=>{
response.send('Add another number')

})
app.get("/add/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) + parseInt(number2)
    let sum = {'num1': number1, 'num2': number2,'answer': result}
    // req.params.type
    // if req.params ====
    res.json(sum)
  })
  
  app.get("/sub/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) - parseInt(number2)
    let subtract = {'num1': number1, 'num2': number2,'answer': result}
    res.json(subtract)
  })
  app.get("/multiply/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) *  parseInt(number2)
    let multiply = {'num1': number1, 'num2': number2,'answer': result}
    res.json(multiply)
  })
  app.get("/add/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) / parseInt(number2)
    let divide = {'num1': number1, 'num2': number2,'answer': result}
    res.json(divide)
  })
app.listen(port,()=>{
    console.log(`server is running on http://localhost${port}`)
})