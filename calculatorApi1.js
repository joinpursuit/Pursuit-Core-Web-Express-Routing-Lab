const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const port = 3000

const add = (arg1, arg2) =>{
    return parseInt(arg1) + parseInt(arg2)
}

const sub = (arg1,arg2) => {
    return parseInt(arg1) - parseInt(arg2)
}

const div = (arg1,arg2) => {
    return parseInt(arg1) / parseInt(arg2)
}


const mult = (arg1,arg2) => {
    return parseInt(arg1) * parseInt(arg2)
}

app.get("/", (req,res)=>{
    res.send("You made a request at /url")
})

app.get("/add/:num1/:num2",(req,res)=>{ 
    // if(req.params.num1.type() === "string"){
    //     return res.json("Numbers only")
    // }
    res.json(add(req.params.num1,req.params.num2))
})

app.get("/mult/:num1/:num2",(req,res)=>{  
    res.json(mult(req.params.num1,req.params.num2))
})

app.get("/div/:num1/:num2",(req,res)=>{
    res.json(div(req.params.num1,req.params.num2))
})

app.get("/sub/:num1/:num2",(req,res)=>{ 
    res.json(sub(req.params.num1,req.params.num2))
})

app.listen(port, ()=>{
    console.log(`Server is runing on ${port}`)
})