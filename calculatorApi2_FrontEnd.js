document.addEventListener("DOMContentLoaded", () => {



let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let select = document.querySelector("select")
let form = document.querySelector("form")
let h2 = document.querySelector("h2")


form.addEventListener("submit", event => {
    event.preventDefault()
    param1 = num1.value
    param2 = num2.value
    let operator = select.currentTarget.value
    debugger
})


})