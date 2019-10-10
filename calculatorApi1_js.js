document.addEventListener('DOMContentLoaded', () => {
    loadDataFromServer()
})


const loadDataFromServer = () => {
    let input1 = document.querySelector("#number1")
    let number1 = input1.value 
    let input2 = document.querySelector("#number2")
    let number2 = input2.value 
    let button = document.querySelector("#calculate")
    let select = document.querySelector("select")
     selectedOption = select.options[select.selectedIndex] 
     operation = selectedOption.value 
    
    select.addEventListener('change', () => {
        selectedOption = select.options[select.selectedIndex] 
        operation = selectedOption.value 
    })

    button.addEventListener('click', async () => {
      console.log(operation)
      console.log(number1)
      console.log(number2)
      const resp = await axios.get(`http://localhost:8080/${operation}/:${number1}/:${number2}`)
      displayResponseFromServer(resp)
    })

}

const displayResponseFromServer = (resp) => {
    console.log(resp)
}


