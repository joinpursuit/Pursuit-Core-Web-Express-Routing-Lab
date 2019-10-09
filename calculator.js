const myUrl = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
	console.log('fuckkckkckckck');
	let button = document.querySelector('button');
	button.addEventListener('click', () => {
		doMath();
	})
})


async function doMath(){
	let operation = document.querySelector('select').options[document.querySelector('select').selectedIndex].text;
	let num1 = document.querySelector('.num1').value;
	let num2 = document.querySelector('.num2').value;
	let urlToUse;
	switch(operation){
		case '+': urlToUse = `${myUrl}/add/${num1}/${num2}`;
		break
		case '-': urlToUse = `${myUrl}/sub/${num1}/${num2}`;
		break
		case '*': urlToUse = `${myUrl}/mul/${num1}/${num2}`;
		break
		case '/': urlToUse = `${myUrl}/div/${num1}/${num2}`;
		break
	}
	let response = await axios.get(urlToUse);
	let answer = document.querySelector('.answer');
	answer.innerText = response.data.result;

}
