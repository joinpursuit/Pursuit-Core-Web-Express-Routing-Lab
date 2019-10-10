const calculate = () => {
  let input1 = document.getElementById('num1')
  let input2 = document.getElementById('num2')
  let select = document.querySelector('select')

  let signToWord = {
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div',
  }

  let url = `http://localhost:3030/${signToWord[select.value]}/${input1.value}/${input2.value}`
  fetch(url)
  .then(response => {
    return response.json()
    .then(obj => {
      let span = document.querySelector('span')
      let result = document.createElement('span')
      result.innerText = obj.result
      span.appendChild(result)
    })
  })
}
