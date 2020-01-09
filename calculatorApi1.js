const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const port = 3000;
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

const calc =  {
        num: {
            num1: x,
            num2: y
        }
    }




app.get("/", (req,res)=>{

 res.send("YOU made a get requst at /url")
})
app.get("/add/:num1/:num2", (req,res) => {
    console.log(req.params.num1);
    console.log(req.params.num2);
    res.json(add[req.params.num])
    
})
app.get("/sub/:num1/:num2", (req,res) => {

})
app.get("/mul/:num1/:num2", (req,res) => {

})
app.get("/div/:num1/:num2", (req,res) => {

})
app.listen(port,()=>{
console.log("server is running on Port:", port)

})



































