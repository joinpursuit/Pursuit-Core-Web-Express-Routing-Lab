document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select");
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let form = document.querySelector("form")
    let answer = document.querySelector("#answer")

    form.addEventListener("submit", (e) => {
        try {
        e.preventDefault()
        axios.get(`http://localhost:3000/${select.value}/${num1.value}/${num2.value}`).then(res =>{
            answer.innerText = res.data;
            })
        } catch(err) {
            console.log(err)
        }
    })
    
})