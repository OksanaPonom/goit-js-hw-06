//Напиши скрипт, який змінює кольори фону елемента <body> 
//через інлайн - стиль по кліку на button.change - 
//color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('button');
const textEl=document.querySelector('.color')

buttonEl.addEventListener('click', onButtonClick);
function onButtonClick() {
  const color=getRandomHexColor();
  textEl.textContent = '-';
  bodyEl.style.backgroundColor = color;
  textEl.textContent += color;

}