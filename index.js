
document.addEventListener("DOMContentLoaded", () => {
    let input1 = document.querySelector("#num1");
    let input2 = document.querySelector("#num2");
    let operant = document.querySelector("select");
    let result = document.querySelector('span');
    let submitBtn = document.querySelector("#calculate");

    submitBtn.addEventListener("click", async () => {
        let value1 = input1.value + '';
        let value2 = input2.value + '';
        let op = operant.value;
        let baseURL = 'http://localhost:8787';
        let url = `${baseURL}/${op}/${value1}/${value2}`;
        
        if (value1 !== '' && value2 !== ''){
            let response = await axios.get(url);
            result.innerText = response.data.result;
        }
    })

    input1.addEventListener("change", () =>{
        result.innerText = '???';
    })    
    input2.addEventListener("change", () =>{
        result.innerText = '???';
    })    
    operant.addEventListener("change", () =>{
        result.innerText = '???';
    })    
})