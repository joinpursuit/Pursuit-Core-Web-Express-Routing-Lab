document.addEventListener('DOMContentLoaded', () => {
    button = document.querySelector("button")
    button.addEventListener('click', performOperation)
})



const loadDataFromServer = async (number, param) => {
    const myURL = `http://localhost:8080/${number}/${param}/`
    const {
        data
    } = await axios.get(myURL)
    console.log(data);

    return data
}