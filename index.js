
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let num1 = document.querySelector("#num1");
        let num2 = document.querySelector("#num2");
        let oper = document.querySelector("select");

        if(isNaN(Number(num1.value))===true || isNaN(Number(num2.value)) === true){

            axios.get(`http://localhost:3000/err`).then(res =>{
                res
                let ans = document.querySelector("#answer")
                ans.innerText = `= ${res.data}`
                
            })
        } else{

            axios.get(`http://localhost:3000/${oper.value}/${num1.value}/${num2.value}`).then(res =>{
                res
                let ans = document.querySelector("#answer")
                ans.innerText = `= ${res.data}`                
            })
        }
    })
})