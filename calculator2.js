document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", calculate);
})

function calculate(event) {
    event.preventDefault();
    console.log("button working")

    let num1Box = parseInt(document.getElementById("num1").value);
    let num2Box = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("op").value;

    axios.get(`http://localhost:3000/${operator}/${num1Box}/${num2Box}`)
        .then(function(response) {
            let data = response.data;
            console.log(data.result)

            let answer = document.getElementById("answer");
            answer.innerText = `= ${data.result}`
    })
}