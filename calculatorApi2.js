const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3030

app.get('/:num1/:op/:num2', (req, res) => {
  let int1 = parseInt(req.params.num1)
  let int2 = parseInt(req.params.num2)
  let operator = req.params.op
  let caseObject = {
    'add': 0,
    'substract': 1,
    'multiply': 2,
    'divide': 3,
  }
  let result = 0
  switch (caseObject[operator]) {
    case 0:
      result = int1 + int2
      break;
    case 1:
      result = int1 - int2
      break;
    case 2:
      result = int1 * int2
      break;
    case 3:
      result = int1 / int2
      break;
    default:
      res.send("the operation is not suported")
      return;
  }

  let responseObject = {
    num1: int1,
    num2: int2,
    result: result
  }
  res.send(responseObject)
})

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`)
})
