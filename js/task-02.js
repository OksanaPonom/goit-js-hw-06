
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.classList.add('item');
  newIngredient.textContent = ingredient;
  ingredientsList.append(newIngredient);
  });


