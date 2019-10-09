const express = require('express') // import express
const cors = require("cors")//import cors
const app = express() // create an express server
const port = 8000; // we will use this later

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
  
   let sum = {'num1': number1, 'num2': number2,'answer': result}
    res.json(sum)
})

app.get("/subtract/:num1/:num2",(req,res) =>{
  
  // stored the number of the first paramater
  let number1 = req.params.num1 
  // stored the number of the second paramater
  let number2 = req.params.num2 
  // use parseInt function to turn string into number 
  let result = parseInt(number1) - parseInt(number2)
  let sum = {'num1': number1, 'num2': number2,'answer': result}
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

// app.get("/about-us",(req,res) =>{
//     // res.send("Welcome to Jaiden v6.2")
//     res.set("Content-Type", 'text/html')
//     res.status(200)
    
//     res.send(`
//     <html>
//     <body>
//     <h1> still under construction but log</h1>
//     <input placeholder="username"/>
//     <input placeholder="password" type="password"/>
//     <button> Login</button>
//     </body>
//     </html>`)
//  }
// )
app.get("/users/:userID",(req,res)=>{
    // let users = ["jaiden", "Huggies", "Drake"]
    // let userID = req.params.userID


    
    // let data = {
    //     userID: req.params.userID,
    //     username: users[userID]
    // }
    // res.status(200)
    // res.json(data)

    // // res.set("Content-Type","application/json")
    // res.send(JSON.stringify(data));
    // res.json(data);

})

app.use("*", (req,res) =>{
  res.status(404)
  res.send("This was not found =( 404")
})

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working