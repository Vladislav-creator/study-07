// const containerA = document.querySelector(".js-container");
// containerA.addEventListener("click", onClick);
// function onClick(evt) {
//   if (!evt.target.classList.contains("js-box")) {
//     return;
//   }
//   alert(`Вы нажали ${evt.target.dataset.color} квадрат`);
// }
const container = document.querySelector(".js-content");
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let player = "X";

let historyX = [];
let historyO = [];
function createMarkup() {
  let marcup = "";
  for (let i = 1; i < 10; i++) {
    marcup += `<div class='item js-item' data-id='${i}'></div>`;
  }
  container.innerHTML = marcup;
}
createMarkup();
container.addEventListener("click", onClick);

function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains("js-item") || target.textContent) {
    return;
  }
  let result = false;
  const id = Number(target.dataset.id);
  if (player === "X") {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }
  target.textContent = player;
  if (result) {
    console.log(`Winner ${player}`);
    resetGame();
    return;
  } else if (historyX.length + historyO.length === 9) {
    console.log("Draws");
    return;
  }

  player = player === "X" ? "O" : "X";
  //console.log(historyX);
  //console.log(historyO);
  //console.log(isWinner(historyX));
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}
function resetGame() {
  createMarkup();
  historyX = [];
  historyO = [];
  player === "X";
}
//Переизпользование функции
//const array1 = [3, 6, 9, 4];
// console.log(isWinner(array1));
// wins.some((item) => console.log(item));
// console.log(wins[5].every((id) => array1.includes(id)));
