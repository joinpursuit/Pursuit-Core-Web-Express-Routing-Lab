// Joseph P. Pasaoa
// Server Calculator Lab
//

/* CUSTOM HELPERS */
const log = console.log;


/* Post-DOM-Load */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');

    form.addEventListener("input", async (event) => {
        evalOnEvent(event);
    });
});


const calcViaServer = async (operation, numA, numB) => {
    let json = await axios.get(`http://localhost:8010/${operation}/${numA}/${numB}`);
    return parseFloat(json.data.result);
}

const convViaServer = async (num, origBase) => {
    let json = await axios.get(`http://localhost:8010/bases/${num}/${origBase}`);
    return json.data;
}

const evalOnEvent = async (e) => {
  if (e.target.name === 'numOneBox' || e.target.name === 'numTwoBox' || e.target.id === 'chosenOp') {
    const num1 = document.querySelector('#numOneBox').value;
    const num2 = document.querySelector('#numTwoBox').value;
    if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2)) && num1 && num2) {
      let op = document.querySelector('#chosenOp').value;
      document.querySelector('#resultBox').value = await calcViaServer(op, num1, num2);
    }
  }
  if (e.target.name === 'convFromBox' || e.target.id === 'chosenBase') {
    const num = document.querySelector('#convFromBox').value;
    const entryBase = document.querySelector('#chosenBase').value;
    if (!isNaN(parseFloat(num)) && entryBase !== "") {
      let data = await convViaServer(num, entryBase);
      document.querySelector('#toDecBox').value = data.conversions.decimal;
      document.querySelector('#toBinBox').value = data.conversions.binary;
      document.querySelector('#toHexBox').value = data.conversions.hex;
    }
  }
}
