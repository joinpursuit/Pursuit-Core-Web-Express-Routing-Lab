const express = require('express');
const cors = require('cors');
let app = express();
const port = 3000;

app.use(cors());


app.get('/:operator/:num1/:num2', (req, res) => {
	let answer;
	switch(req.params.operator){
		case 'add': answer = parseInt(req.params.num1) + parseInt(req.params.num2);
		break
		case 'sub': answer = parseInt(req.params.num1) - parseInt(req.params.num2);
		break
		case 'mul': answer = parseInt(req.params.num1) * parseInt(req.params.num2);
		break
		case 'div': answer = parseInt(req.params.num1) / parseInt(req.params.num2);
		break
		default: res.send('Not a valid operator');
	}
	if(isNaN(req.params.num1) || isNaN(req.params.num2)){
		res.send('Numbers only please');
	}
	let response = {'num1': req.params.num1, 'num2': req.params.num2, 'result': answer}
	res.json(response);
} )

app.all('*', (req, res) => {
	res.send('This is an awesome endpoint, but it only accepts get requests with specific math functions');
})

app.listen(port, () => {
	console.log('This server is listening and awaits your commands');
})