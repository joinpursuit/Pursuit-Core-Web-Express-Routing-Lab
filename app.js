const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3000;

app.get("/add/:num1/:num2",(request, response)=>{
    response.json({"num1": request.params.num1, "num2": request.params.num2, "results":Number(request.params.num1) +Number(request.params.num2)})

})
app.get("/subtract/:num1/:num2", (request,response)=>{
    response.json({"num1": request.params.num1, "num2": request.params.num2, "results":Number(request.params.num1) -Number(request.params.num2)})
})
app.get("/multiply/:num1/:num2",(request, response)=>{
    response.json({"num1": request.params.num1, "num2": request.params.num2, "results":Number(request.params.num1) *Number(request.params.num2)})

})
app.get("/divide/:num1/:num2", (request,response)=>{
    response.json({"num1": request.params.num1, "num2": request.params.num2, "results":Number(request.params.num1) /Number(request.params.num2)})
})

app.listen(port,()=>{
    console.log("server is running on:", port)
})