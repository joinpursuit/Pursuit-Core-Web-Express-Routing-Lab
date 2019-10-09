const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8080;


app.get(`/add/:num1/:num2`, (req, res) => {
    res.status(200);

    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

    let data = {
        num1: num1,
        num2: num2,
        result: num1 + num2
    }
    res.send(data)
})

app.get(`/sub/:num1/:num2`, (req, res) => {
    res.status(200);

    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

    let data = {
        num1: num1,
        num2: num2,
        result: num1 - num2
    }
    res.send(data)

})
app.get(`/mul/:num1/:num2`, (req, res) => {
    res.status(200);

    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

    let data = {
        num1: num1,
        num2: num2,
        result: num1 * num2
    }
    res.send(data)

})
app.get(`/div/:num1/:num2`, (req, res) => {
    res.status(200);

    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

    let data = {
        num1: num1,
        num2: num2,
        result: num1 / num2
    }
    res.send(data)

})

// app.get(`/:${operation()}`, (req, res) => {
//     res.status(200)

//     let num1

//     if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

//     let operations = {
//         add: (num1, num2) => (parseInt(num1) + parseInt(num2)),
//         sub: (num1, num2) => (parseInt(num1) - parseInt(num2)),
//         mul: (num1, num2) => (parseInt(num1) * parseInt(num2)),
//         div: (num1, num2) => (parseInt(num1) / parseInt(num2)),
//     }
//     res.send(operations)
// })

// let data =

app.use('*', (req, res) => {
    res.status(404);
    res.send('This api is only a rudimentary calculator');
})

app.listen(port, () => {
    console.log(`Let calculate on port ${port}`);
})