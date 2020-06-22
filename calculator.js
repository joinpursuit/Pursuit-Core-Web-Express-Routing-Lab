document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector("button");
    button.addEventListener('click', loadDataFromServer);
})

const loadDataFromServer = () => {
    let operator = document.getElementById("operations").value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    const myURL = `http:/localhost:8000/${operator}/${num1}/${num2}`

    fetch(myURL).then(response => {
        return response.json()
    })
    .then(result => {
        let answer = document.getElementById("answer");
        answer.innerText = `Answer: ${result.result}`
        
    })

}

