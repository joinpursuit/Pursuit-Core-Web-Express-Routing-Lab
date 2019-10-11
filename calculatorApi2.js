const express = require("express");
const cors = require("cors");
const app = express();
const port = 8001;
app.use(cors());

app.get("/", (request, response) => {
    response.send("This is the homepage");
});

app.get("/:operand/:num1/:num2", (request, response) => {
    //Make variables equal to the paramerers of the url
    let operand = request.params.operand;
    let num1 = parseInt( request.params.num1);
    let num2 = parseInt( request.params.num2);
    let result; //for the different operations

    //Check what does operand equal to
    if(operand === "add") {
        result = num1 + num2;
    } else if(operand === "sub") {
        result = num1 -  num2;
    } else if(operand === "mul") {
        result = num1 *  num2;
    } else if(operand === "div") {
        result = num1 / num2;
    }

    //Send the operand result in the JSON
    let finalResult = {
        "num1": num1,
        "num2": num2,
        "result": result
    }
    response.send(finalResult); //Send the JSON
    response.status(200);
});

app.use("*", (request, response) => {
    response.status(404);
    response.send("Numbers only");
});


app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});