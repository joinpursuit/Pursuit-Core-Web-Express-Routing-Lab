const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3002;
let add = (a,b)=>a+b;
let subtract =(a,b)=>a-b;
let multiply = (a,b)=>a*b;
let divide = (a,b)=>a/b
app.get("/:operator/:num1/:num2", (request,response)=>{
let operator = request.params.operator;
console.log(operator)
let num1 = request.params.num1;
let num2 = request.params.num2;
let result;
if(operator === "add"){
     result = add(Number(num1),Number(num2)) 
    }else if(operator ==="subtract"){
        result = subtract(Number(num1), Number(num2))
    }else if(operator ==="multiply"){
        result = multiply(Number(num1), Number(num2))
    }else if(operator ==="divide"){
        result = divide(Number(num1), Number(num2))
    }

response.json({"num1":num1,
    "num2":num2,
    "results":result
})

})
app.listen(port,()=>{
    console.log("server is running on:", port)
    
})
