const express = require('express');
const cors = require('cors');
let app = express();
const port = 3000;

app.use(cors());


app.get('/add/:num1/:num2', (req, res) => {
	let answer = parseInt(req.params.num1) + parseInt(req.params.num2);
	console.log(typeof parseInt(req.params.num1));
	if(isNaN(req.params.num1) || isNaN(req.params.num2)){
		res.send('Numbers only please');
	}
	console.log(parseInt(req.params.num2));
	let response = {'num1': req.params.num1, 'num2': req.params.num2, 'result': answer}
	res.json(response);
} )

app.get('/sub/:num1/:num2', (req, res) => {
	let answer = parseInt(req.params.num1) - parseInt(req.params.num2);
	if(isNaN(req.params.num1) || isNaN(req.params.num2)){
		res.send('Numbers only please');
	}
	let response = {'num1': req.params.num1, 'num2': req.params.num2, 'result': answer}
	res.json(response);
} );

app.get('/mul/:num1/:num2', (req, res) => {
	let answer = parseInt(req.params.num1) * parseInt(req.params.num2);
	if(isNaN(req.params.num1) || isNaN(req.params.num2)){
		res.send('Numbers only please');
	}
	let response = {'num1': req.params.num1, 'num2': req.params.num2, 'result': answer}
	res.json(response);
} );

app.get('/div/:num1/:num2', (req, res) => {
	let answer = parseInt(req.params.num1) / parseInt(req.params.num2);
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
	console.log('This server is listening and awaits your command');
})