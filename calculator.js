document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector("button");
    button.addEventListener('click', displayDataFromServer);
})

async function loadDataFromServer() {
    const myURL = "http:/localhost:8000/"
    const response = await axios.get(myURL)
    displayDataFromServer(response.data)
}

const displayDataFromServer = () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    console.log(num1);
    console.log(num2);
}