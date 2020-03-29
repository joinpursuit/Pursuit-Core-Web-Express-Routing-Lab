document.addEventListener("DOMContentLoaded", () => {
    let inputLeft = document.querySelector("#inputLeft")
    let inputRight = document.querySelector("#inputRight")
    let select =  document.querySelector("#select")
    let button = document.querySelector("button")
    let form = document.querySelector("form")
    let p = document.querySelector("p")
    // console.log(num1)

    form.addEventListener("submit", async (e)=>{
        e.preventDefault()
        try {
            let res = await axios.get(`http://localhost:3000/${select.value}/${inputLeft.value}/${inputRight.value}`)
            debugger
            p.innerText= res.data.result
        } catch (error) {
            console.log(error)
        }
    })
})