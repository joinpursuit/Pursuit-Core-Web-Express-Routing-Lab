const express = require("express")
const cors = require("cors")
const app = express();
const port = 3000
app.use(cors())

app.get("/add/:num1/:num2", (req, res) => {
  let nums = req.params
  nums.num1 = parseInt(nums.num1)
  nums.num2 = parseInt(nums.num2)
  nums.result = nums.num1 + nums.num2
  res.json(nums)
})
app.get("/sub/:num1/:num2", (req, res) => {
  let nums = req.params
  nums.num1 = parseInt(nums.num1)
  nums.num2 = parseInt(nums.num2)
  nums.result = nums.num1 - nums.num2
  res.json(nums)
})
app.get("/mul/:num1/:num2", (req, res) => {
  let nums = req.params
  nums.num1 = parseInt(nums.num1)
  nums.num2 = parseInt(nums.num2)
  nums.result = nums.num1 * nums.num2
  res.json(nums)
})
app.get("/div/:num1/:num2", (req, res) => {
  let nums = req.params
  nums.num1 = parseInt(nums.num1)
  nums.num2 = parseInt(nums.num2)
  nums.result = nums.num1 / nums.num2
  res.json(nums)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})