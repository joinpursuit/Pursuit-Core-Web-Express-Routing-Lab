document.addEventListener("DOMContentLoaded", () => {})
const getNum1 = () => {
    let input1 = document.querySelector("#num1_input");
    return input1.value
}
const getNum2 = () => {
    let input2 = document.querySelector("#num2_input");
    return input2.value
}
const getResult = async () => {
    let select = document.querySelector("#select");
    let operationVal = select.value
    let num1 = getNum1();
    let num2 = getNum2();
    let url = `http://localhost:8080/${operationVal}/${num1}/${num2}/`;
    let dataObj = await axios.get(url).then((data)=> {return data})
        showAnswer(dataObj)
}
const showAnswer = (dataObj) => {
    let answer = dataObj.data.result;
    let paragraph = document.querySelector("p");
    let container = document.querySelector("#container");
    if(!paragraph) {
        let firstParagraph = document.createElement("p");
            firstParagraph.innerText = answer;
            container.append(firstParagraph)
    } else {
        paragraph.innerText = answer;
    }
}