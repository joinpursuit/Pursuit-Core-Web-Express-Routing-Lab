document.addEventListener("DOMContentLoaded",()=>{
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let select = document.querySelector("select")
    let form = document.querySelector("form")
    let p = document.querySelector("p")

    form.addEventListener("submit",(event)=>{
       event.preventDefault()
       try{
           
           axios.get("http://localhost:3000/"+ select.value+"/"+ num1.value+ "/"+ num2.value).then(response=>{
             p.innerText =response.data.results
             
            })
        }catch(err){
            console.log(err)
        }
    })

})