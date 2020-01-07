document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body");

    let h1 = document.createElement("h1");
    h1.innerText = "Calculator";
    body.appendChild(h1);

    let num1 = document.createElement("input");
    let select = document.createElement("select");
    let num2 = document.createElement("input");
    num1.type = "number";
    num1.min = "0";
    num1.max = "99";
    num2.type = "number";
    num2.min = "0";
    num2.max = "99";

    let p = document.createElement("p");
    

    let btn = document.createElement("input");
    btn.type = "submit";
    btn.innerText = "Calculate"

    body.appendChild(num1);
    body.appendChild(select);
    body.appendChild(num2);
    body.appendChild(p)
    body.appendChild(btn);

    
})