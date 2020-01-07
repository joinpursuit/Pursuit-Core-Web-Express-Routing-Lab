const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const port = 3000;

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






































// const people = {
//     1:{name: "Corey", id: 1}, 
//     2:{name: "Jhenya", id: 2}, 
//     3:{name: "John", id: 3}
// }

// app.get("/", (req,res)=>{

//     res.send("YOU made a get requst at /url")
// })

// app.get("/people", (req, res)=>{
//     res.json
//     (people)
// })

// app.get("/people/:id", (req,res)=>{
//     console.log(req.params.id);
//     res.json(people[req.params.id])
// })

// app.post("/",(req,res)=>{
//     res.send("You mand a Post reauwest")
// })

// app.listen(port, ()=>{
//     console.log("Server is runing on port", port);
// })

