document.addEventListener("DOMContentLoaded", () => {
    setupBtnListener()
})

const setupBtnListener = () => {
    const calculate = document.querySelector("#formy-mcformface");
    calculate.addEventListener("submit", fetchMath)
}

const fetchMath = () => {
    let myRoute = document.querySelector("#operator").value;
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    const url = `http://localhost:3000/${myRoute}/${num1}/${num2}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let answer = document.querySelector("#result");
            answer.innerText = `= ${result.result}`
        })

}

document.addEventListener("submit", (event) => {
    event.preventDefault()
})