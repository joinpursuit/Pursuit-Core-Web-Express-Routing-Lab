const express = require('express')
const server = express()
const port = 8080;
const cors = require('cors')

server.use(cors());

server.get("/add/:num1/:num2", (request, respond) => {
//    console.log(resquest.params)
    // const add = (num1, num2) => parseInt(num1) + parseInt(num2)
    const add = (num1, num2) => Number(num1) + Number(num2)
   

   let numb = {
       num1: request.params.num1,
       num2: request.params.num2,
       results: add(request.params.num1, request.params.num2)
   }

   respond.json(numb)

//    console.log(request)
//    console.log(respond)
})

server.get("/sub/:num1/:num2", (request, respond) => {
    //    console.log(resquest.params)
        // const add = (num1, num2) => parseInt(num1) + parseInt(num2)
        const sub = (num1, num2) => Number(num1) - Number(num2)
       
    
       let numb = {
           num1: request.params.num1,
           num2: request.params.num2,
           results: sub(request.params.num1, request.params.num2)
       }

       respond.json(numb)
    
    //    console.log(request)
    //    console.log(respond)
    })

    server.get("/div/:num1/:num2", (request, respond) => {
        //    console.log(resquest.params)
            // const add = (num1, num2) => parseInt(num1) + parseInt(num2)
            const div = (num1, num2) => Number(num1) / Number(num2)
           
        
           let numb = {
               num1: request.params.num1,
               num2: request.params.num2,
               results: div(request.params.num1, request.params.num2)
           }
    
           respond.json(numb)
        
        //    console.log(request)
        //    console.log(respond)
        })

        server.get("/mul/:num1/:num2", (request, respond) => {
            //    console.log(resquest.params)
                // const add = (num1, num2) => parseInt(num1) + parseInt(num2)
                const mul = (num1, num2) => Number(num1) * Number(num2)
               
            
               let numb = {
                   num1: request.params.num1,
                   num2: request.params.num2,
                   results: mul(request.params.num1, request.params.num2)
               }
        
               respond.json(numb)
            
            //    console.log(request)
            //    console.log(respond)
            })

server.listen(port, ()=> {
    console.log('its working')
})