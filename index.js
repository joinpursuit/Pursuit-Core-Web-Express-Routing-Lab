document.addEventListener("DOMContentLoaded", () => {
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let form = document.querySelector("form");
    let select = document.querySelector("select");
    let h2 = document.querySelector("h2")

    form.addEventListener("submit", (e) => {
        h2.innerHTML = "";
        e.preventDefault();
        axios.get(`http://localhost:3000/${select.value}/${num1.value}/${num2.value}/`).then(res => {
            h2.innerText = `= ${res.data.result}`;
        })
    })
   

    
})