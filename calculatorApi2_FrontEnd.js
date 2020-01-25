const port = 3000

let form = document.querySelector("form")
let h2 = document.querySelector("#result")

const get = async (operator, num1, num2) => {
    let res = await axios.get(`http://localhost:${port}/${operator}/${num1}/${num2}`)
    let data = res.data.calculation
    return data
}

form.addEventListener("submit", async event => {
    event.preventDefault()
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let select = document.querySelector("select")
    param1 = num1.value
    param2 = num2.value
    let operator = select.value
    let json_answer = await get(operator, param1, param2)
    h2.innerText = json_answer
    form.reset()
})
