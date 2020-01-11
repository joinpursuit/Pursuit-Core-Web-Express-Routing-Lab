document.addEventListener("DOMContentLoaded", ()=>{

let button = document.querySelector("button")
button.addEventListener('click',  calculator)

})

const calculator = (e) =>{
    e.preventDefault()
    let num1Input = document.querySelector("#num1").value
    let num2Input = document.querySelector("#num2").value
    let mathOp = document.querySelector("select").value
    let results = document.querySelector("p")
    
    axios.get(`http://localhost:3000/${mathOp}/${num1Input}/${num2Input}`).then(res =>{
        results.innerText = res.data.result
    })
}

