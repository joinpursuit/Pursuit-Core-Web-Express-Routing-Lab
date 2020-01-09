document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let n1 = document.querySelector("#num1").value
  let n2 = document.querySelector("#num2").value
  let option = document.querySelector("option")
  let result = document.querySelector("#result")
  
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    axios.get(`http://localhost:3000/${option.value}/${n1.value}/${n2.value}`).then(res => {
      // debugger
    result.innerText = res.data.result
    })
  })

});
