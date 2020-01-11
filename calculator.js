document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  let n1 = document.querySelector("#num1")
  let n2 = document.querySelector("#num2")
  let select = document.querySelector("select")
  let result = document.querySelector("#result")
  
  form.addEventListener("submit", (event) => {
    debugger
    event.preventDefault()
    axios.get(`http://localhost:8000/${select.value}/${n1.value}/${n2.value}`).then(res => {
      // debugger
    result.innerText = res.data.result
    })
  })

});
