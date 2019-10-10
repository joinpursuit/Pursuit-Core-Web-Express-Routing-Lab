document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#calculate')

    // button.addEventListener('click', runEquation)
})

const runEquation = async () => {
   let operation = document.querySelector('#operators')
   let inputNum1 = document.querySelector('#number1').value 
   let inputNum2 = document.querySelector('#number2').value

   let response = await axios.get(`http://localhost:5000/${operation}/${inputNum1}/${inputNum2}`)
   console.log(response.data)
   console.log(response.data.result)
//    console.log(operation)
} 
runEquation()