import TAX from "./algorithms/tax.js";
import Fibonacci from "./algorithms/fibonacci.js";
import Factorial from "./algorithms/factorial.js";
import Calculator from "./algorithms/calculator.js";

let arr = [TAX,Fibonacci,Factorial,Calculator];

let wrapper = document.querySelector('.wrapper');

arr.forEach((fArr) => {
    // creating element, adding styles, adding inner text, setting event listener

    let el = document.createElement('a');

    el.classList.add('block');

    el.innerHTML = fArr[0] + '<br/>' + `<p>${fArr[2]}</p>`;

    el.addEventListener('click',fArr[1]);

    wrapper.appendChild(el);

    
});