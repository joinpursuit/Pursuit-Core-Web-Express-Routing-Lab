const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const port = 3000 
app.listen(port, () =>{
console.log("Server is listing port ", port);
})

app.get('/', (req, res)=>{
    res.send("Welcome to default")
})

app.get('/add/:num1/:num2', (req, res) =>{
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = parseInt(n1) + parseInt(n2)
    res.json({"num1" :n1, "num2" : n2, "result" : result})
} )

app.get('/sub/:num1/:num2', (req, res) =>{
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = parseInt(n1) - parseInt(n2)
    res.json({"num1" :n1, "num2" : n2, "result" : result})
} )

app.get('/mult/:num1/:num2', (req, res) =>{
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = parseInt(n1) * parseInt(n2)
    res.json({"num1" :n1, "num2" : n2, "result" : result})
} )

app.get('/div/:num1/:num2', (req, res) =>{
    let n1 = req.params.num1
    let n2 = req.params.num2
    let result = parseInt(n1) / parseInt(n2)

if(n1!= typeof(Number) & n2!= typeof(Number)) {
    res.send("numbers only")
}

    res.json({"num1" :n1, "num2" : n2, "result" : result})
} )

