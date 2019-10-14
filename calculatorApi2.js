const express = require("express")
const cors= require("cors")
const app = express()
const port = 7000

app.use(cors());
app.get("/", (req,res)=>{
    res.send('First Page:  hi welcome')
})
app.post("/", (req,res)=>{
    res.send('Server saw a POST coming at /')
})


app.get("/:operation/:num1/:num2", (req, res) =>{
       let num1 = parseInt(req.params.num1)
       let num2 = parseInt(req.params.num2)
       let operation = req.params.operation
    //    if(isNaN(num1) || isNaN(num2)){
    //        res.send("Only Numbers")
    //        return;
    //    }
       const  operations={
           "add":(a,b) => {return a+b},
           "sub":(a,b) => {return a-b},
           "mul":(a,b) => {return a*b},
           "div":(a,b) => {return a/b},
        }
        
        let data = {
            num1:parseInt(num1),
            num2:parseInt(num2),
            result:operations[operation](num1,num2),
        }
        res.status(200)
        res.json(data)
    })
    app.use("*", (req,res) =>{
        res.status (404)
        res.send("Page Not Found: 404")
    })

app.listen(port,() =>{
    console.log("Server is listening to port 7000")
})