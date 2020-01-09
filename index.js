document.addEventListener("DOMContentLoaded", () => {
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let form = document.querySelector("form");
    let select = document.querySelector("#selector");
    let h2 = document.querySelector("h2")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/add/${num1.value}/${num2.value}/`).then(res => {
            console.log(select.val);
            h2.innerText = res.data.result;
        })
    })
   

    
})