const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 8080;


// app.get(`/add/:num1/:num2`, (req, res) => {
//     res.status(200);

//     let num1 = parseFloat(req.params.num1);
//     let num2 = parseFloat(req.params.num2);
//     if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

//     let data = {
//         num1: num1,
//         num2: num2,
//         result: num1 + num2
//     }
//     res.send(data)
// })

// app.get(`/sub/:num1/:num2`, (req, res) => {
//     res.status(200);

//     let num1 = parseFloat(req.params.num1);
//     let num2 = parseFloat(req.params.num2);

//     if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

//     let data = {
//         num1: num1,
//         num2: num2,
//         result: num1 - num2
//     }
//     res.send(data)

// })
// app.get(`/mul/:num1/:num2`, (req, res) => {
//     res.status(200);

//     let num1 = parseFloat(req.params.num1);
//     let num2 = parseFloat(req.params.num2);

//     if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

//     let data = {
//         num1: num1,
//         num2: num2,
//         result: num1 * num2
//     }
//     res.send(data)

// })
// app.get(`/div/:num1/:num2`, (req, res) => {
//     res.status(200);

//     let num1 = parseFloat(req.params.num1);
//     let num2 = parseFloat(req.params.num2);

//     if (isNaN(num1) || isNaN(num2)) res.send('Numbers only')

//     let data = {
//         num1: num1,
//         num2: num2,
//         result: num1 / num2
//     }
//     res.send(data)

// })



app.get(`/:operator/:num1/:num2`, (req, res) => {
    res.status(200)
    let result
    let operator = req.params.operator;
    let num1 = parseFloat(req.params.num1);
    let num2 = parseFloat(req.params.num2);

    switch (operator) {
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        default:
            `${operator} is not a valid function in this calculator`
            break;
    }

    let data = {
        num1: num1,
        num2: num2,
        result: parseFloat(result.toFixed(2))
    }

    res.send(data)
})

app.use('*', (req, res) => res.status(404).send('This api is only a rudimentary calculator'));


app.listen(port, () => console.log(`Let calculate on port ${port}`));