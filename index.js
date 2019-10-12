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


const talkToServer = async (operation, numA, numB) => {
    // let result = await axios.get(`http://localhost:8010/add/4/5`);
    let json = await axios.get(`http://localhost:8010/${operation}/${numA}/${numB}`);
    return parseFloat(json.data.result);
}

const evalOnEvent = async (e) => {
  if (e.target.name === 'numOneBox' || e.target.name === 'numTwoBox') {
    const num1 = document.querySelector('#numOneBox').value;
    const num2 = document.querySelector('#numTwoBox').value;
    if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2)) && num1 && num2) {
      let op = document.querySelector('#chosenOp').value;
      document.querySelector('#resultBox').value = await talkToServer(op, num1, num2);
    }
  }
}
