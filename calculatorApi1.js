const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8080;

app.listen(port, () => {
    console.log('server is listen to port 8080');
});

app.get('/add/:num1/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;

    let data = {
        'num1':request.params.num1,
        'num2': request.params.num2
    }
response.json(data);
});
app.get('/sub/:num1/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;

    let data = {
        'num1':request.params.num1,
        'num2': request.params.num2
    }
response.json(data);
});

app.get('/mul/:num1/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;

    let data = {
        'num1':request.params.num1,
        'num2': request.params.num2
    }
response.json(data);
});
app.get('/div/:num1/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;

    let data = {
        'num1':request.params.num1,
        'num2': request.params.num2
    }
response.json(data);
});

app.use('*', (request, response) => {
    response.status(404);
    response.send('This was not found =( 404');
});

