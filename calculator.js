document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector("button")
    button.addEventListener('click', performOperation)
    console.log('hello');
})



async function loadDataFromServer(operation, param1, param2) {
    const myURL = `http://localhost:8080/${operation}/${param1}/${param2}`
    const {
        data
    } = await axios.get(myURL)
    console.log(data);

    return data
}

const getSelectedChoice = select => select.options[select.selectedIndex];

const performOperation = async () => {
    clearScreen()
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let select = document.querySelector('select');


    opt = getSelectedChoice(select).value;
    console.log(opt);
    console.log(num1);

    let response = await loadDataFromServer(opt, num1, num2)

    // pTag.innerText = response.result
    // document.querySelector('#answer').append(pTag)
    // console.log(response.result);
    printToScreen(response)
}

const clearScreen = () => {
    let container = document.querySelector('#answer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const printToScreen = (param) => {
    let pTag = document.createElement('p')
    pTag.id = 'results'
    pTag.innerText = `= ${param.result}`
    document.querySelector('#answer').append(pTag)
    // clearScreen()
}