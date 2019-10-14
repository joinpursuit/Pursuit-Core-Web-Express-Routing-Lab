const express = require ('express')
const cors = require ('cors')

const app = express()

const port = 8080

app.use(cors())
app.get('/', (req,res) => {
    res.send("the server is working")

})

app.get('/add/:num1/:num2', (req, res) => {
        let num1 = req.params.num1
        let num2 = req.params.num2
        let result = parseInt(num1) + parseInt(num2)
        res.json({num1, num2, result})
        
})

app.get('/sub/:num1/:num2', (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    let result = parseInt(num1) - parseInt(num2)
    res.json({num1, num2, result})
    
})

app.get('/mult/:num1/:num2', (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    let result = parseInt(num1) * parseInt(num2)
    res.json({num1, num2, result})
    
})

app.get('/div/:num1/:num2', (req, res) => {
    let num1 = req.params.num1
    let num2 = req.params.num2
    let result = parseInt(num1) / parseInt(num2)
    res.json({num1, num2, result})
    
})




app.listen(port, () => {
    console.log("server is listening");
    
})
