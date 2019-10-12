let baseURLServer1 = 'http://localhost:8787';
let baseURLServer2 = 'http://localhost:8778';
let conversionServerURL = 'http://localhost:7878';

document.addEventListener("DOMContentLoaded", () => {
    let input1 = document.querySelector("#num1");
    let input2 = document.querySelector("#num2");
    let operant = document.querySelector("select");
    let result = document.querySelector('#result');
    let submitBtn = document.querySelector("#calculate");

    let serverSelection = document.querySelector("#server")
    
    let baseURL = baseURLServer1;
    let checkbox = document.querySelector('#checkBox');
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            baseURL = baseURLServer2;
            serverSelection.innerText = `Using SERVER-2`;
        } else {
            baseURL = baseURLServer1;
            serverSelection.innerText = `Using SERVER-1`;
        }
    })

    submitBtn.addEventListener("click", async () => {
        let value1 = input1.value + '';
        let value2 = input2.value + '';
        let op = operant.value;
        let url = `${baseURL}/${op}/${value1}/${value2}`;
        
        if (value1 !== '' && value2 !== ''){
            let response = await axios.get(url);
            result.innerText = response.data.result;
        } else {
            result.innerText = 'Please, numbers only !!'
        }
    })

    input1.addEventListener("change", () =>{
        result.innerText = '???';
    })    
    input2.addEventListener("change", () =>{
        result.innerText = '???';
    })    
    operant.addEventListener("change", () =>{
        result.innerText = '???';
    })
    
    let inputNumber = document.querySelector("#num");
    let baseSelector = document.querySelector("#baseSelection");
    let conversionResult = document.querySelector("#conversion");
    let convertRequest = document.querySelector("#convert")

    convertRequest.addEventListener("click", async () => {
        let value = inputNumber.value;
        let base = baseSelector.value;
        let url = `${conversionServerURL}/${value}/${base}`

        let response = await axios.get(url);
        let conv = response.data;

        if (conv.rightInput === 'ok') {
            conversionResult.innerText = `INPUT: number: ${conv.original.value}, Base: ${conv.original.base} base
            CONVERSION ->
            Decimal: ${conv.conversions.decimal} 
            Binary: ${conv.conversions.binary}
            Hexadecimal: ${conv.conversions.hexadecimal}`;
        } else if (conv.rightInput === 'invalid') {
            conversionResult.innerText = "Invalid input / base combination"
        } else {
            conversionResult.innerText = conv.rightInput;
        }

        inputNumber.value = "";
    })

    baseSelector.addEventListener("change", () => {
        conversionResult.innerText = "";
    })
})