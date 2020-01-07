const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3000;
app.get("/:num1/:operator/:num2", (request,response)=>{
let num1 = request.params.num1;
let num2 = request.params.num2;
let operator = request.params.operator;
let results = {num1:num1,num2:num2,total:Number(num1)+ operator +Number(num2)}
console.log(results.operator)
})
app.listen(port,()=>{
    console.log("server is running on:", port)
    
})
