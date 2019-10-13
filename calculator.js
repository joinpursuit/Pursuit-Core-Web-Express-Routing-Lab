addEventListener("DOMContentLoaded", () =>{
        setupButtonListener();
 })
 const setupButtonListener = () =>{
    const calculate = document.querySelector("form")
    calculate.addEventListener("submit", fetchServerData)
 }
 const fetchServerData = (event) => {
    event.preventDefault();
 
    let operator = document.querySelector("#operator").value;
    let number1 = document.querySelector("#num1").value;
    let number2 = document.querySelector("#num2").value;
 
    let url = `http://localhost:8000/${operator}/${number1}/${number2}`
    fetch(url).then(response => {
        return response.json()
    }).then(total =>{
        let answer = document.querySelector("#result")
        answer.innerText = `${total.answer}`
    })
 }