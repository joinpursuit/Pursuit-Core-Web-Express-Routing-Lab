const express = require("express")
const cors= require("cors")
const app = express()
const port = 7000

app.use(cors());
app.get("/", (req,res)=>{
    res.send('First Page: welcome')
})
app.post("/", (req,res)=>{
    res.send('Server saw a POST coming at /')
})


app.get("/add/:num1/:num2", (req, res) =>{
       let num1 = parseInt(req.params.num1)
       let num2 = parseInt(req.params.num2)
       let data = {
           num1:num1,
           num2:num2,
           result:+num1 + +num2
       }
    res.status(200)
   res.json(data)
})



app.get("/sub/:num1/:num2", (req, res) =>{   
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let data = {
        num1:num1,
        num2:num2,
        result: num1- num2  
    }
 res.status(200)
res.json(data)
})



app.get("/mul/:num1/:num2", (req, res) =>{
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let data = {
        num1:num1,
        num2:num2,
        result: num1 * num2
    }
 res.status(200)
res.json(data)
})



app.get("/div/:num1/:num2", (req, res) =>{
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    let data = {
        num1:num1,
        num2:num2,
        result:num1 / num2
    }
 res.status(200)
res.json(data)
})


app.use("*", (req,res) =>{
res.status (404)
res.send("Page Not Found: 404")
})

app.listen(port,() =>{
    console.log("Server is listening to port 7000")
})