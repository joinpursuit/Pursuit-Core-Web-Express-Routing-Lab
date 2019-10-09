document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", calculate);
})

function calculate(event) {
    event.preventDefault();
    console.log("button working")

    let num1Box = parseInt(document.getElementById("num1").value);
    let num2Box = parseInt(document.getElementById("num2").value);

    console.log(num1Box, num2Box);
    

    let selectList = document.getElementById("selectList");

    if (selectList.selectedIndex === 0) {
        axios.get(`http://localhost:3000/add/${num1Box}/${num2Box}`)
        .then(function(response) {
            let data = response.data;
            console.log(data.result)

            let answer = document.getElementById("answer");
            answer.innerText = `= ${data.result}`
        })
    } else if (selectList.selectedIndex === 1) {
        axios.get(`http://localhost:3000/sub/${num1Box}/${num2Box}`)
        .then(function(response) {
            let data = response.data;
            let answer = document.getElementById("answer");
            answer.innerText = `= ${data.result}`
        })
    } else if (selectList.selectedIndex === 2) {
        axios.get(`http://localhost:3000/mul/${num1Box}/${num2Box}`)
        .then(function(response) {
            let data = response.data;
            let answer = document.getElementById("answer");
            answer.innerText = `= ${data.result}`
        })
    } else if (selectList.selectedIndex === 3) {
        axios.get(`http://localhost:3000/div/${num1Box}/${num2Box}`)
        .then(function(response) {
            let data = response.data;
            let answer = document.getElementById("answer");
            answer.innerText = `= ${data.result}`
        })
    }
}

