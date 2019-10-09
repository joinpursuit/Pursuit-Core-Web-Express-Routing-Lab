const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());

app.get("/", (request, response) => {
    response.send("This is the homepage");
});

app.get("/add/:num1/:num2", (request, response) => {
    let result = {
        "num1": request.params.num1, 
        "num2": request.params.num2,
        "result": parseInt(request.params.num1) +  parseInt(request.params.num2)
    };
    response.status(200);
    response.send(result);
});

app.get("/sub/:num1/:num2", (request, response) => {
    let result = {
        "num1": request.params.num1, 
        "num2": request.params.num2,
        "result": parseInt(request.params.num1) - parseInt(request.params.num2)
    };
    response.status(200);
    response.send(result)
});

app.get("/mul/:num1/:num2", (request, response) => {
    let result = {
        "num1": request.params.num1, 
        "num2": request.params.num2,
        "result": parseInt(request.params.num1) *  parseInt(request.params.num2)
    };
    response.status(200);
    response.send(result);
});

app.get("/div/:num1/:num2", (request, response) => {
    let result = {
        "num1": request.params.num1, 
        "num2": request.params.num2,
        "result": parseInt(request.params.num1) /  parseInt(request.params.num2)
    };
    response.status(200);
    response.send(result)
});

app.use("*", (request, response) => {
    response.status(404);
    response.send("Numbers only");
});


app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});