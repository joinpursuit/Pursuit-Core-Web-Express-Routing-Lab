const express = require ('express')
const app = express()
const port = 8080

app.get('/', (res,req) => {


})

app.listen(port, () => {
    console.log("server is listening");
    
})
