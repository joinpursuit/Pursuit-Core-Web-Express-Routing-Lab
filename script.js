document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let n1 = form.querySelector('#n1').value;
        let n2 = form.querySelector('#n2').value;
        let op = form.querySelector('select').value;
        calculate(op, n1, n2)
    })

})

const calculate = async (operation, number1, number2) => {
    let result = await fetch(`http://localhost:8080/${operation}/${number1}/${number2}`).then(r => r.json());
    document.querySelector('h3').innerText = result.answer;
}