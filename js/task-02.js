
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingridientArray = ingredients.map(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.classList.add('item');
  newIngredient.textContent = ingredient;
  return newIngredient;
});
  
ingredientsList.append(...ingridientArray);



