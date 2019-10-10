document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is loaded")
    const button = document.querySelector("button")
    button.addEventListener("click", fetchProblem)
})

const fetchProblem = async () => {
    console.log("inside")
    let myUrl1 = "http://localhost:8090/add/:num1/:num2"
    // let myUrl2 = "http://localhost:8090/sub/4/2"
    console.log(myUrl1)
    console.log(myUrl2)
    const response = await axios.get(myUrl1) 
   
    displayData(response)
}

const displayData = () => {
    
}

