// document.addEventListener("DOMContentLoaded",() => {
//     let button = document.querySelector("button")
//     button.addEventListener("click",() => {
//         const fetchData = async(url) => {
//             try{
//                 res = await axios.get(url)
//                 callback = res.data
//             }catch(error){
//                 console.log(error);
                
//             }
//             console.log(res);
            
//         }
// })
// fetchData("http://localhost:3000/math")
// })

document.addEventListener("DOMContentLoaded",() => {
    let button = document.querySelector("button")
    button.addEventListener("click",()=>{
      axios.get('http://localhost:3000/math').then(res => {

    })
})
    let select = document.querySelector("select")
    select.addEventListener("change",(e) => {
        
    })
})