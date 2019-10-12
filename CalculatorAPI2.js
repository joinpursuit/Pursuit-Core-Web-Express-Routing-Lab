const express = require('express')
const server = express()
const port = 3000;
const cors = require('cors')

server.use(cors());

server.get("/:num1/:operator/:num2", (request, respond) => {
    // console.log(request.params)

        let num1 = parseInt(request.params.num1) 
        let num2 = parseInt(request.params.num2)
        let operator =  request.params.operator

        // if(isNaN(num1) || isNaN(num2)){
        //     respond.send("Only numbers")
        //     return;}

            const operations = {
                "div": (a,b) => {return a / b},
                "mul": (a,b) => {return a * b},
                "add": (a,b) => {return a + b},
                "sub": (a,b) => {return a - b}
            }
            

            let result = operations[operator](num1,num2)
            // console.log(result)
            respond.json(result) 

    })

    server.listen(port, ()=> {
        console.log('its working')
    })