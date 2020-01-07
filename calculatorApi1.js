const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

app.get("/add/:num1/:num2/", (req, res) => {

})

app.get("/sub/:num1/:num2/", (req, res) => {

})

app.get("/mul/:num1/:num2/", (req, res) => {

})

app.get("/div/:num1/:num2/", (req, res) => {

})

app.listen(port, () => {
    console.log("Server is running on Port " + port)
})