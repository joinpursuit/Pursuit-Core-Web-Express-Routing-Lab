document.addEventListener('DOMContentLoaded', ()=>{
    console.log('This is the calculatorAPI');
    getData();

    let button = document.querySelector('button');
    button.addEventListener('click', (event)=>{
        event.preventDefault();
        displayAnswer();
    })

})
const calculatorAPI = '#';

const getData = async () =>{
    let numberOne = document.querySelector('one');
    let numberTwo = document.querySelector('two');
    let select = document.querySelector('select');

    await axios
    .get() // put the link of the server in here.
    .then((response)=>{

    })
    .catch((error)=>{
        console.log('ERROR!');
    })
}

const displayAnswer = () =>{
    // const firstNum = document.querySelector('')
}