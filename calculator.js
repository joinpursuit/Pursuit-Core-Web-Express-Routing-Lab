document.addEventListener('DOMContentLoaded', () =>{
    let calculateButton= document.querySelector("#calculate_button")
    calculateButton.addEventListener('click',() =>{
        mathFunction()

       
    })
})


async function mathFunction() {
    let selectOperation = document.querySelector(".mathSign").value
    let numValue1 = document.querySelector("#selectNum1").value
    let numValue2 = document.querySelector("#selectNum2").value
 

    const myURL = `http://localhost:7000/${selectOperation}/${numValue1}/${numValue2}`
    const resp = await axios.get(myURL) 
    
    results(resp.data.result)

}



const results = (answer) =>{
    let result= document.querySelector("#result")
    result.innerText = "= " + answer
}
