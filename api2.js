const calculate = () => {
  let input1 = document.getElementById('num1')
  let input2 = document.getElementById('num2')
  let select = document.querySelector('select')
  let span = document.querySelector('span')
  let signToWord = {
    '+': 'add',
    '-': 'substract',
    '*': 'multiply',
    '/': 'divide',
  }

  let url = `http://localhost:3030/${input1.value}/${signToWord[select.value]}/${input2.value}`
  fetch(url)
  .then(response => {
    return response.json()
    .then(obj => {
      span.innerText = '= ' + obj.result
    })
  })
}
