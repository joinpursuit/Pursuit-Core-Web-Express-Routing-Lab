
addEventListener("DOMContentLoaded", () =>{
    console.log("content loaded")
    setupButtonListener()
})
const setupButtonListener = () =>{
    const calculate = document.querySelector("form")
    calculate.addEventListener("submit",fetchServerData)
}
function fetchServerData(event){
    event.preventDefault();

    let operator = document.querySelector("#operator").value;
    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;
    
    let url = `http://localhost:8004/${operator}/${number1}/${number2}`
    fetch(url).then(response => {
        return response.json()
    }).then(total =>{
        let answer = document.querySelector("#answer")
        answer.innerText = `${total.answer}`
    })
}