document.addEventListener('DOMContentLoaded', () => {
    console.log("running calc js")
let button = document.querySelector('button');
button.addEventListener('click', loadDataFromServer);

})


async function loadDataFromServer() {
const myURL = "http://localhost:3194/"
    const resp = await axios.get(myURL);
    // let num1 = document.querySelector('#num1').value;
    // let num2 = document.querySelector('#num2').value;
    // myURL+=`${num1}/${num2}`
    displayDataFromServer(resp.data);
}

const displayDataFromServer = (data) => {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    console.log(num1);
    console.log(num2);
    console.log(data.num1)
}