const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

const add = (a, b) => {
    return parseInt(a + b);
}

const sub = (a, b) => {
    return parseInt(a - b);
}

const mul = (a, b) => {
    return parseInt(a * b);
}

const div = (a, b) => {
    return parseInt(a / b);
}

app.get("/", (req, res) => {
    res.send("YOU made a get request at / url");
})

app.get("/add/:num1/:num2", (req, res) => {
    console.log(req.params.num1)
    res.json(add(req.params.num1, req.params.num2));
})

app.get("/sub/:num1/:num2", (req, res) => {
    res.json(sub);
})

app.get("/mul/:num1/:num2", (req, res) => {
    res.json(mul);
})

app.get("/div/:num1/:num2", (req, res) => {
    res.json(div);
})

app.post("/", (req, res) => {
    res.send("you made a POST request")
})

app.listen(port, () => {
    console.log("Server is running on port ", port);
})