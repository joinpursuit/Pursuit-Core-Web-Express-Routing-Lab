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

    let route = document.querySelector("#operations").value;
    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;
    
    let url = `http://localhost:8000/${route}/${number1}/${number2}`
    fetch(url).then(response => {
        return response.json()
    }).then(result =>{
        let answer = document.querySelector("#total")
        answer.innerText = `${result.answer}`
    })
}


// const fetchMath = () => {
//     let myRoute = document.querySelector("#operator").value;
//     let num1 = document.querySelector("#num1").value;
//     let num2 = document.querySelector("#num2").value;
//     const url = `http://localhost:3000/${myRoute}/${num1}/${num2}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(result => {
//             let answer = document.querySelector("#result");
//             answer.innerText = `= ${result.result}`
//         })

// }