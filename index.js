document.addEventListener("DOMContentLoaded", () => {
    let input1 = document.querySelector("#number1Input");
    let input2 = document.querySelector("#number2Input");
    let selectOption = document.querySelector("#select");
    let submitButton = document.querySelector("#calculate")
    let resultPTag = document.querySelector("#resultParagraphTag");
    let allCalculatorData;
    console.log("DOM loaded");
    submitButton.addEventListener('click', () => {
        let value1 = input1.value + ""; //adding a empty string will make value1 a string
        let value2 = input2.value + "";
        let operant = selectOption.value;
        let mainURL = "http://localhost:8000";
        let finalURL = `${mainURL}/${operant}/${value1}/${value2}`; //depending on operant, value1 and value2, it will request the url
        if(value1 !== "" && value2 !== "") {
            fetchCalculatorData(finalURL);
        }
    });
    input1.addEventListener("change", () =>{ //make resultPTag become a question mark when reusing the inputs or selector
        resultPTag.innerText = '???';
    });    
    input2.addEventListener("change", () =>{
        resultPTag.innerText = '???';
    });    
    selectOption.addEventListener("change", () =>{
        resultPTag.innerText = '???';
    });  
});

const fetchCalculatorData = (finalURL) => {
    console.log("fetchCalculatorData started");
    axios
    .get(finalURL)
    .then(dataObj => {
        let resultPTag = document.querySelector("#resultParagraphTag");
        console.log('dataObj:', dataObj.data);
        resultPTag.innerText = dataObj.data.result;
    })
    .catch(error => {
        console.log('error:', error);
    })
}