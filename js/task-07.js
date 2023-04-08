
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInput);
inputEl.value = inputEl.getAttribute('min');

function onInput(event) {

    const value = event.currentTarget.value;
    textEl.style.fontSize = `${value}px` ;
  }