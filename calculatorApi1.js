const express = require("express")
//const cors = require("cors")
const app = express()
//app.use(cors())
const port = 3000

app.get("/", (req,res)=>{
    res.send("This is a Get request at / url")
})

app.get("/add/:num1/:num2/", (req,res)=>{
    console.log(req.params.num1)
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send("Numbers only");
    } else {
        res.json({num1: num1, num2: num2, result:num1+num2});
    }

     
})

app.listen(port, ()=>{
    console.log("Server is running on port", port)
})