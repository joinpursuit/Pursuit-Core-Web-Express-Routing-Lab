document.addEventListener("DOMContentLoaded", () => {
    let select = document.querySelector("select");
    let num1 = document.querySelector("num1");
    let num2 = document.querySelector("num2");

    axios.get(`http://localhost:3000/${select.value}/${num1.value}/${num2.value}`).then(res =>{
        res.data.forEach()
        debugger
    })
    }
})