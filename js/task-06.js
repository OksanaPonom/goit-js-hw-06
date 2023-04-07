
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
    const lengthInput = event.currentTarget.value.length;
    if (lengthInput ===Number(inputEl.dataset.length)) {
       inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
 };


 

