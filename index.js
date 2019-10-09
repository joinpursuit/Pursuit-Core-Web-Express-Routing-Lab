document.addEventListener('DOMContentLoaded', () =>{
    getButton().addEventListener('click', requestAddApi)
})

function getButton() {
    return document.querySelector("#calcButton")
}

async function requestAddApi() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let myOperator = document.querySelector('#operator').value;
    let currentOper = "";

    if(myOperator === "+") {
        currentOper = "add";
    } else if(myOperator === "-") {
        currentOper = "sub";
    } else if(myOperator === "*") {
        currentOper = "mul";
    } else if(myOperator === "/") {
        currentOper = "div";
    }

    const myURL = `http://localhost:1337/${currentOper}/${num1}/${num2}`
    const resp = await axios.get(myURL)  
    
    let currentResult = document.querySelector('#myResult');

    let newResult = document.createElement('p');
    newResult.innerText = `= ${resp.data['currentOper']}`;
    if(myOperator === "+") {
        newResult.innerText = `= ${resp.data.sum}`;
    } else if(myOperator === "-") {
        newResult.innerText = `= ${resp.data.sub}`;
    } else if(myOperator === "*") {
        newResult.innerText = `= ${resp.data.mul}`;
    } else if(myOperator === "/") {
        newResult.innerText = `= ${resp.data.div}`;
    }
    newResult.id = 'myResult';

    currentResult.parentNode.replaceChild(newResult, currentResult);

    console.log(resp.data)
}