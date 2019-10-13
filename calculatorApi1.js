const express = require('express')
const cors = require('cors')

const app = express()
const port = 8000;

app.use(cors());

app.use(express.static(__dirname))
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/calculator.html')
})

app.get("/add/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) + parseInt(number2)
    let total = {'num1': number1, 'num2': number2,'answer': result}
    res.json(total)
  })

  app.get("/sub/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) - parseInt(number2)
    let total = {'num1': number1, 'num2': number2,'answer': result}
    res.json(total)
  })

  app.get("/mul/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) * parseInt(number2)
    let total = {'num1': number1, 'num2': number2,'answer': result}
    res.json(total)
  })

  app.get("/div/:num1/:num2",(req,res) =>{
    let number1 = req.params.num1 
    let number2 = req.params.num2 
    let result = parseInt(number1) / parseInt(number2)
    let total = {'num1': number1, 'num2': number2,'answer': result}
    res.json(total)
  })

app.use("/*", (req, res) =>{
    res.status(404);
    res.send('This was not found')
})

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`)
})