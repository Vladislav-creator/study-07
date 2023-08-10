// const a = document.querySelectorAll(".item");
// const b = document.querySelectorAll(".item").length;
// console.log(`Number of categories: ${b}`);
// a.forEach((element) => {
//   console.log(`Category: ${element.querySelector("h2").textContent}`);
//   console.log(`Elements: ${element.querySelectorAll("li").length}`);
// });

//2 option
const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
[...list.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

//3 option
// const categoriesList = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesList.length}`);

// categoriesList.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
