// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
// текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >,
//     вкладених в нього).

const categories = document.querySelectorAll('.item');
console.log("Number of categories:", categories.length);


categories.forEach(category => {
    const title = category.querySelector('h2');
    const numberOfElements = category.querySelectorAll('li');
    console.log("Category:", title.textContent);
    console.log("Elements:", numberOfElements.length);
});
