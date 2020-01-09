document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", () =>{
    axios.get(`http://localhost:3000/`).then(res => {
      debugger
      let num1 = document.querySelector('#num1').value;
      let num2 = document.querySelector('#num2').value;
      let resultCalculation = document.querySelector('select').value;
      res.data.forEach(calculation =>{
        let result = document.querySelector("result")
        result.innerText = data.result
        //debugger
        console.log('calc', calculation)
        debugger
      })
    })
  })
});
//startCalculation