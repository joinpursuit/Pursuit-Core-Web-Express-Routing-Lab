const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8080;


app.get(`/add/:num1/:num2`, (req, res) => {
    res.status(200);

    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.send('Numbers only')
    }

    let data = {
        num1: num1,
        num2: num2,
        result: num1 + num2
    }
    res.json(data)
})

app.get(`/sub/:num1/:num2`, (req, res) => {
    res.status(200);

    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.send('Numbers only')
    }

    let data = {
        num1: num1,
        num2: num2,
        result: num1 - num2
    }
    res.json(data)

})

app.listen(port, () => {
    console.log(`Let calculate on port ${port}`);
})