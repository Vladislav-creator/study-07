const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "jironimo" },
  { label: "jidai" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "HReact Router" },
  { label: "GraphQL" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];
const refs = {
  list: document.querySelector(".js-listA"),
  input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", _.debounce(onInput, 6000));
const listItemMarcup = createListItemMarcup(tech);
refs.list.innerHTML = listItemMarcup;
function createListItemMarcup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}
//1вариант сортировки calback функции
function onInput() {
  if (refs.input.value.trim() === "") {
    refs.list.innerHTML = createListItemMarcup(tech);
    return;
  }
  refs.list.innerHTML = createListItemMarcup(findElement());
}
// function findElement() {
//   return [...tech]
//     .filter((item) => {
//       const itemValue = item.label.slice(0, refs.input.value.length);
//       return itemValue.toLowerCase() === refs.input.value.toLowerCase();
//     })
//     .sort((firstStudent, secondStudent) =>
//       firstStudent.label.localeCompare(secondStudent.label)
//     );
// }

//Это с деструктуризацией
function findElement() {
  return [...tech]
    .filter(
      ({ label }) =>
        label.slice(0, refs.input.value.length).toLowerCase() ===
        refs.input.value.toLowerCase()
    )
    .sort((firstStudent, secondStudent) =>
      firstStudent.label.localeCompare(secondStudent.label)
    );
}
//2вариант calback функции
// function onFilterChange(evt) {
//   const filter = evt.target.value.toLowerCase();
//   console.log(filter.length);
//   const filterItems = tech.filter((t) =>
//     t.label.toLowerCase().includes(filter)
//   );
//   const listItemMarcup = createListItemMarcup(filterItems);
//   refs.list.innerHTML = listItemMarcup;
// }

// let a = 4;
// let b = 11;
// function changeNumbers() {
//   a = 10;
//   let b = 20;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// changeNumbers();

//3 вариант
// function findElement(string) {
//   return [...tech].filter((item) => {
//     const itemValue = item.label.slice(0, string.length);
//     return itemValue.toLowerCase() === string.toLowerCase();
//   });
// }
// console.log(findElement("j"));

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }
// multiply(1, 2, 3, 4);
