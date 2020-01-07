document.addEventListener("DOMContentLoaded", () => {
    console.log("hello")
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let op = document.querySelector("#op")
    let form = document.querySelector("form")
    let ans = document.querySelector("#ans")


   form.addEventListener("submit", (e) => {
    e.preventDefault();
       axios.get(`http://localhost:3000/${op.value}/${num1.value}/${num2.value}`).then(res =>{
        ans.innerText = `${res.data}`;
        
    })
   })

    

})