const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3030

app.get('/add/:num1/:num2', (req, res) => {
  let int1 = parseInt(req.params.num1)
  let int2 = parseInt(req.params.num2)
  let object = {
    num1: int1,
    num2: int2,
    result: int1 + int2
  }
  res.send(object)
})

app.get('/sub', (req, res) => {
  let int1 = parseInt(req.params.num1)
  let int2 = parseInt(req.params.num2)
  let object = {
    num1: int1,
    num2: int2,
    result: int1 - int2
  }
  res.send(object)
})

app.get('/mul', (req, res) => {
  let int1 = parseInt(req.params.num1)
  let int2 = parseInt(req.params.num2)
  let object = {
    num1: int1,
    num2: int2,
    result: int1 * int2
  }
  res.send(object)
})

app.get('/div', (req, res) => {
  let int1 = parseInt(req.params.num1)
  let int2 = parseInt(req.params.num2)
  let object = {
    num1: int1,
    num2: int2,
    result: int1 / int2
  }
  res.send(object)
})


app.listen(port, () => {
  console.log(`Server is listening to port ${port}`)
})
