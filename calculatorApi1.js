const express = require("express");
const app = express()
const cors = require("cors")
app.use(cors())
const port = 3000

const add = (num1, num2) =>  num1 + num2; 

const sub = (num1, num2) => num1 - num2 

const mul = (num1, num2) => num1 * num2

const div = (num1, num2) => num1 / num2


app.get("/", (req, res) => {
    res.send("You made a get request at / url")
})


app.get("/add", (req, res) => {
    res.json(add)
})

// app.get()

// app.get("/sub", (req, res) => {
//     res.json(sub)
// })

// app.get("/mul", (req, res) => {
//     res.json(mul)
// })


// app.get("/div", (req, res) => {
//     res.json(div)
// })






app.post("/", (req, res) => {
    res.send("You made a post request")
})

app.listen(port, () => {
    console.log("Server is running on port ", port)
})