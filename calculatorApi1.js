const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3000;


const add = (num1, num2) =>{
    return num1 + num2;
}
const sub = (num1, num2)=>{
    return num1 - num2;
}
const mul = (num1, num2)=>{
    return num1 * num2;
}
const div = (num1, num2) =>{
    return num1/num2
}

app.get("/add/:num1/:num2",(req, res)=>{
    res.json(add(Number.parseInt(req.params.num1), Number.parseInt(req.params.num2)));
    console.log(req.params)
})
app.get("/sub/:num1/:num2",(req, res)=>{
    res.json(sub(Number.parseInt(req.params.num1), Number.parseInt(req.params.num2)));
    console.log(req.params);
})
app.get("/mul/:num1/:num2",(req, res)=>{
    res.json(mul(Number.parseInt(req.params.num1), Number.parseInt(req.params.num2)));
    console.log(req.params)
})
app.get("/div/:num1/:num2",(req, res)=>{
    res.json(div(Number.parseInt(req.params.num1), Number.parseInt(req.params.num2)));
    console.log(req.params)
})
app.get("/", (req, res) =>{
    res.send("you have requested a / at url")
})

app.listen(port,()=>{
    console.log("You are running on port " + port);
})