document.addEventListener('DOMContentLoaded', () => {
    loadDataFromServer()
})


const loadDataFromServer = () => {
    let number1 = document.querySelector("#number1")
    let number2 = document.querySelector("#number2")
    let button = document.querySelector("#calculate")

    let select = document.querySelector("select")
     selectedOption = select.options[select.selectedIndex] 
     operation = selectedOption.value 
    
    select.addEventListener('change', () => {
        selectedOption = select.options[select.selectedIndex] 
        operation = selectedOption.value 
    })

    button.addEventListener('click', async () => {
      const resp = await axios.get(`http://localhost:8080/${operation}/${number1.value}/${number2.value}`)
      displayResponseFromServer(resp)
    })

}

const displayResponseFromServer = (resp) => {
    let obj = resp.data
    let answer = document.querySelector("#solution")
    answer.innerText = obj.result 
}


