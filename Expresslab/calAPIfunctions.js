document.addEventListener('DOMContentLoaded',()=>{
    let calculateButton = document.querySelector('#calculate')
    calculateButton.addEventListener('click', loadDataFromServer)
})
function calculateButton(){
    return document.querySelector('calculate')
}
async function loadDataFromServer(){
    const myURL = "http://localhost:8004"
    const resp = await axios.get(myURL)
    numberData(response.data)
}
function displayResFromServ(data){
    let serverResults = data.serverResults
    numberData(serverResults)
}
let num1 = response.

// axios
// fetch
