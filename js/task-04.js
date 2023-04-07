
let counterValue = 0;
const counter = document.querySelector('#value');

const actionDecrement = document.querySelector('button[data-action="decrement"]');
actionDecrement.addEventListener('click', ()=>{
    counterValue -= 1;
    counter.textContent = counterValue;
});

 const actionIncrement = document.querySelector('button[data-action="increment"]');
actionIncrement.addEventListener('click', ()=>{
    counterValue += 1;
    counter.textContent = counterValue;
});