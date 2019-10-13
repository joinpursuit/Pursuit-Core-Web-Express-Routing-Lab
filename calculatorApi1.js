const express = require('express');
const cors = require('cors');
const app = express();
const port = 3194;
app.use(cors());

let mathModule = require('./mathMod.js');
app.listen(port, () => {
    console.log('server is listen to port 3194');
});


app.get('/', (request, response) => {
    response.send('This is my express server homepage @ /');
})

app.get('/add/:num1/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = mathModule.add(parseInt(num1), parseInt(num2));

let data = {
    'num1': request.params.num1,
    'num2': request.params.num2,
    "result": result
}
    response.json(data);
});
app.get('/sub/:num1/:num2', (request, response) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = mathModule.sub(parseInt(num1), parseInt(num2));
    
    let data = {
        'num1': request.params.num1,
        'num2': request.params.num2,
        "result": result
    }
    response.json(data);
});

app.get('/mul/:num1/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = mathModule.mul(parseInt(num1), parseInt(num2));

    let data = {
        'num1': request.params.num1,
        'num2': request.params.num2,
        "result": result
    }
    response.json(data);
});
app.get('/div/:num1/:num2', (request, response) => {
    let num1 = request.params.num1;
    let num2 = request.params.num2;
    let result = mathModule.div(parseInt(num1), parseInt(num2));

    let data = {
        'num1': request.params.num1,
        'num2': request.params.num2,
        "result": result   
    }
    response.json(data);
});

app.use('*', (request, response) => {
    response.status(404);
    response.send('This was not found =( 404');
});