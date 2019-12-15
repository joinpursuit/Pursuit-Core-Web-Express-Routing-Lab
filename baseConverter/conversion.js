document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector("button")
    button.addEventListener('click', convertNum)
})



const loadDataFromServer = async (number, param) => {
    const myURL = `http://localhost:8000/${number}/${param}`
    const {
        data
    } = await axios.get(myURL)
    console.log(data);

    return data
}

const convertNum = async () => {
    clearScreen()
    let num = document.querySelector('#num').value;
    let textInput = document.querySelector('#textInput').value;
    console.log(textInput);

    let response = await loadDataFromServer(num, textInput)
    printToScreenOriginal(response)
    printToScreenConversion(response)
}

const clearScreen = () => {
    let container = document.querySelector('#answer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const printToScreenOriginal = (param) => {
    let value = document.createElement('p')
    let binCon = document.createElement('p')

    value.innerText = `Value = ${param.original.value}`
    binCon.innerText = `Base = ${param.original.base}`
    console.log(value.innerText);

    document.querySelector('#answer').append(value, binCon)
}

const printToScreenConversion = (param) => {
    let decimal = document.createElement('p')
    let binary = document.createElement('p')
    let hexadecimal = document.createElement('p')

    decimal.innerText = `Decimal = ${param.conversions.decimal}`
    binary.innerText = `Binary = ${param.conversions.binary}`
    hexadecimal.innerText = `Hexadecimal = ${param.conversions.hex}`

    document.querySelector('#answer').append(decimal, binary, hexadecimal)
}