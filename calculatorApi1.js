const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const port = 3000;
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.listen(8080);




const math={
   add: {
      num1: "", 
     num2: "" ,
      answer: "" 
    },
    sub: {
        num1: "", 
       num2: "" ,
        answer: "" 
      },
      mult: {
        num1: "", 
       num2: "" ,
        answer: "" 
      },
      div: {
        num1: "", 
       num2: "" ,
        answer: "" 
      }
    
      

}
app.get("/math/add/:idOne/:idTwo", (req,res)=>{
    let numOne = parseInt(req.params.idOne)
    let numTwo = parseInt(req.params.idTwo)
    math.add["num1"] = numOne
    math.add["num2"] = numTwo
    math.add["answer"] = numTwo + numTwo
    res.json(math.add)
})



app.get("/math", (req,res)=>{

    res.json(math)
})




app.get("/math/sub/:idOne/:idTwo",(req,res)=>{
    let numOne = parseInt(req.params.idOne)
    let numTwo = parseInt(req.params.idTwo)
    math.sub["num1"] = numOne
    math.sub["num2"] = numTwo
    math.sub["answer"] = numTwo - numTwo
    res.json(math.sub)
})

app.get("/math/div/:idOne/:idTwo",(req,res)=>{
    let numOne = parseInt(req.params.idOne)
    let numTwo = parseInt(req.params.idTwo)
    math.div["num1"] = numOne
    math.div["num2"] = numTwo
    math.div["answer"] = numTwo / numTwo
    res.json(math.div)
})

app.get("/math/mult/:idOne/:idTwo",(req,res)=>{
    let numOne = parseInt(req.params.idOne)
    let numTwo = parseInt(req.params.idTwo)
    math.mult["num1"] = numOne
    math.mult["num2"] = numTwo
    math.mult["answer"] = numTwo * numTwo
    res.json(math.sub)
})


// app.get("/math/div/:numOne/:numTwo",(req,res)=>{
//     let one = req.params.numOne
//    let two = req.params.numTwo
//     res.json(parseInt(one) * parseInt(two))
// })




app.get("/", (req,res)=>{

    res.send("YOU made a get requst at /url")
})

app.get("/people", (req, res)=>{
    res.json
    (people)
})

app.get("/people/:id/:name", (req, res)=>{
    console.log(req.params.id);
    res.json(people[req.params.id].name="farrah")

})

app.get("/people/:id", (req,res)=>{
    console.log(req.params.id);
    res.json(people[req.params.id])
})





app.post("/",(req,res)=>{
    res.send("You mand a Post reauwest")
})

// app.listen(port, ()=>{
//     console.log("Server is runing on port", port);
// })







app.listen(port,()=>{
console.log("server is running on Port:", port)

})



































