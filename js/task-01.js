const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log("Number of categories:", categories.children.length);

items.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
});




// const categories = document.querySelectorAll('.item');
// console.log("Number of categories:", categories.length);

// categories.forEach(category => {
//     const title = category.querySelector('h2');
//     const numberOfElements = category.querySelectorAll('li');
//     console.log("Category:", title.textContent);
//     console.log("Elements:", numberOfElements.length);
// });
