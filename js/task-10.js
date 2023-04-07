const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
let divEl;
let size = 30;

btnCreateEl.addEventListener('click', onCreateBtn);
btnDestroyEl.addEventListener('click', onDestroyBtn);

function onCreateBtn() {
  createBoxes(Number(inputEl.value));
  };

function onDestroyBtn() {
  destroyBoxes();
  inputEl.value = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1){
    divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = size + 'px';
    divEl.style.height = size + 'px';
    boxesEl.appendChild(divEl);
    size += 10;
   }
};
function destroyBoxes() {
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
};
