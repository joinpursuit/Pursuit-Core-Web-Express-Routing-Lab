const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8000;


const decimal = (num) =>{ 
    return num
}
const binary = (num)=>{
    return num.toString(2)
}
const hex = (num)=>{
    return num.toString(16)
}


app.get("/dec/:num",(req, res)=>{
    res.json(decimal(Number(req.params.num)));
    console.log(req.params)
})
app.get("/bin/:num",(req, res)=>{
    res.json(binary(Number(req.params.num)));
    console.log(req.params);
})
app.get("/hex/:num",(req, res)=>{
    res.json(hex(Number(req.params.num)));
    console.log(req.params)
})

app.get("/", (req, res) =>{
    res.send("you have requested a / at url")
})

app.listen(port,()=>{
    console.log("You are running on port " + port);
})