const main = document.getElementById("main")

const createCalc = () => {
    const input = document.createElement("input")
    input.setAttribute("id", "input1")
    input.setAttribute("type", "number")
    
    const select = document.createElement("select")
    const optionAdd = document.createElement('option')
    const optionSub = document.createElement('option')
    const optionMult = document.createElement('option')
    const optionDiv = document.createElement('option')
    optionAdd.textContent = "+";
    optionAdd.value = "add";
    optionSub.textContent = "-";
    optionSub.value = "sub";
    optionMult.textContent = "*";
    optionMult.value = "mult";
    optionDiv.textContent = "/";
    optionDiv.value = "div";

    const input2 = document.createElement("input")
    input2.setAttribute("id", "input2")
    input2.setAttribute("type", "number")

    const button = document.createElement("button")
    button.innerText= "Calculate"

    main.appendChild(input)
    main.appendChild(select)
    select.appendChild(optionAdd)
    select.appendChild(optionSub)
    select.appendChild(optionMult)
    select.appendChild(optionDiv)

    main.appendChild(input2)
    main.appendChild(button)
    
}

createCalc()

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const button = document.querySelector("button")
const select = document.querySelector("select")

button.addEventListener('click', (event) => {
    const selectV = select.value
    const input1V = input1.value
    const input2V = input2.value

    getURL(selectV, input1V, input2V)
})

const getURL = (selectV, input1V, input2V) => {
    const url = `http://localhost:8080/${selectV}/${input1V}/${input2V}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
    })
}


