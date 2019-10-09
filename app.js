const port = 8000;

const doMath = async () => {
    const num1 = document.querySelector('#input1').value;
    const num2 = document.querySelector('#input2').value;
    const operation = document.querySelector('#select').value;
    console.dir(num1);
    const answer = await makeAPICall(num1, num2, operation);
    displayAnswer(answer);
}

const makeAPICall = async (num1, num2, operation) => {
    const data = await axios.get(`http://localhost:${port}/${operation}/${num1}/${num2}`);
    console.log(data);
    return data.data.result;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn-calc').addEventListener('click', doMath);
})

const displayAnswer = (answer) => {
    document.querySelector('#answer').innerText = answer;
}