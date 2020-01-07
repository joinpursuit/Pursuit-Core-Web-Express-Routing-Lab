const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
const port = 3000

const add = (arg1, arg2) =>{
    return parseInt(arg1) + parseInt(arg2)
}

const sub = (arg1,arg2) => {
    return parseInt(arg1) - parseInt(arg2)
}

const div = (arg1,arg2) => {
    return parseInt(arg1) / parseInt(arg2)
}

const mult = (arg1,arg2) => {
    return parseInt(arg1) * parseInt(arg2)
}