let num1 = document.querySelector("#num1");
let form = document.querySelector("form");
let select = document.querySelector("#operators");
let num2 = document.querySelector("#num2");
let button = document.querySelector("#results");
let showResult = document.querySelector("p");



form.addEventListener('submit', (e) => {
    showResult.innerHTML = "";
    e.preventDefault();
    axios.get(`http://localhost:3000/${select.value}/${num1.value}/${num2.value}/`).then(res => {
     showResult.innerText = `= ${res.data.result}`;
    })
    debugger
 
    // body.document.appendChild(p)
})

