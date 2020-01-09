document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let n1 = document.querySelector("#num1").value
  let n2 = document.querySelector("#num2").value
  let meth = document.querySelector("option").value
  
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    axios.get(`http://localhost:3000/:${meth}/:${n1}/${n2}`).then(res => {
      debugger
    let result = document.querySelector("div")
    // result.innerText = 
    })
  })

});
