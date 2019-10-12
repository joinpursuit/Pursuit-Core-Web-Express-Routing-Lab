const express = require('express') // import express
const cors = require("cors")//import cors
const app = express() // create an express server
const port = 8000; // we will use this later
app.use(cors());

app.get('/', (req, res) => {
  res.send('Calculator Api')
}) // routes the '/' URL path to produce a response of 'Calculator Api'

app.get("/add/:num1/:num2",(req,res) =>{
  
  
  // stored the number of the first paramater
  let number1 = req.params.num1 
  // stored the number of the second paramater
  let number2 = req.params.num2 
  // use parseInt function to turn string into number 
  let result = parseInt(number1) + parseInt(number2)
  
   let sum = {"num1": number1, "num2": number2,"answer": result}
    res.json(sum)
})

app.get("/subtract/:num1/:num2",(req,res) =>{
  
  // stored the number of the first paramater
  let number1 = req.params.num1 
  // stored the number of the second paramater
  let number2 = req.params.num2 
  // use parseInt function to turn string into number 
  let result = parseInt(number1) - parseInt(number2)
  let sum = {"num1": number1, "num2": number2,"answer": result}
  res.json(sum)

})

app.get("/multiply/:num1/:num2",(req,res) =>{
  
  // stored the number of the first paramater
  let number1 = req.params.num1 
  // stored the number of the second paramater
  let number2 = req.params.num2 
  // use parseInt function to turn string into number 
  let result = parseInt(number1) * parseInt(number2)
  let sum = {'num1': number1, 'num2': number2,'answer': result}
  res.json(sum)

})

app.get("/divide/:num1/:num2",(req,res) =>{
  
  // stored the number of the first paramater
  let number1 = req.params.num1 
  // stored the number of the second paramater
  let number2 = req.params.num2 
  // use parseInt function to turn string into number 
  let result = parseInt(number1) / parseInt(number2)
  let sum = {'num1': number1, 'num2': number2,'answer': result}
  res.json(sum)

})

app.post("/",(req,res) =>{
    res.send("Server saw a post coming at /");
})


app.use("*", (req,res) =>{
  res.status(404)
  res.send("This was not found =( 404")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working