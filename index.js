    const calc = () =>{
        console.log("math1")
    let button = document.querySelector("button")
       let select = document.querySelector("select")
       debugger
       let math=select.selectedOptions[0].value
       if(select.selectedOptions[0].value){
        let num1 = document.getElementById("num1")
        let num2 = document.getElementById("num2")
        axios.get(`http://localhost:3000/${math}/${num1.value}/${num2.value}`).then(res=>{
           let p =document.querySelector("p")
            p.innerText= res.data
        })
    }
}
calc()
