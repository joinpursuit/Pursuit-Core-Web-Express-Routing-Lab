document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#calculate')
    const clearAll = document.querySelector('#clear')

    button.addEventListener('click', runEquation)
    clearAll.addEventListener('click', () => {
        location.reload()
    })
})

const runEquation = async () => {  
    let inputNum1 = document.querySelector('#number1').value
    let inputNum2 = document.querySelector('#number2').value
    const operatorList = document.querySelector('#operators')
    const operation = document.querySelectorAll('option')

    for (let i = 1; i < operatorList.length; i ++){
        if (operatorList.selectedIndex === i){
            operator = operation[i].id
        }
    }
    const response = await axios.get(`http://localhost:5000/${operator}/${inputNum1}/${inputNum2}`)
    const result = response.data.result

    displayAnswer(result)
 } 

 const displayAnswer = (result) => {
     const answerDiv = document.querySelector('#answer')
     const populateAnswer = document.createElement('h3')

     if (answerDiv.innerHTML === ''){
        populateAnswer.innerText = result
        answerDiv.appendChild(populateAnswer)

     } else {
        answerDiv.innerHTML = ''
        populateAnswer.innerText = result
        answerDiv.appendChild(populateAnswer)
     }
 }

// The input value of the two input boxes will be the route parameters 
//and the selecter box will be the main route or operational route 
//When the button is pressed it will make an axios call to my server based on the above information.
// Then I will append the answer to the DOM and clear it on each button press