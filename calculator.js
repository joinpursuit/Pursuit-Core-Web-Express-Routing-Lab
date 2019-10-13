addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('button');
    button.addEventListener('click', loadDataFromServer);
})


async function loadDataFromServer() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let operation = document.querySelector('select').value

    const myURL = `http://localhost:3194/${operation}/${num1}/${num2}`;
    const resp = await axios.get(myURL);

    displayDataFromServer(resp.data);
}

const displayDataFromServer = (data) => {
    let result = document.querySelector('#result');
    result.innerText = data.result;
}
