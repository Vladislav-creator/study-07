const btnIncrEl = document.querySelector('[data-action="increment"]');
const btnDecrEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
btnDecrEl.addEventListener("click", minusClick);
function minusClick() {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
  console.log(counterValue);
}
btnIncrEl.addEventListener("click", plusClick);
function plusClick() {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
  console.log(counterValue);
}
//2 вариант
// btnDecrEl.addEventListener("click", () => {
//   counterValue -= 1;
//   document.querySelector("#value").textContent = counterValue;
//   console.log(counterValue);
// });
// btnIncrEl.addEventListener("click", () => {
//   counterValue += 1;
//   document.querySelector("#value").textContent = counterValue;
//   console.log(counterValue);
// });

//3 вариант: переменная counterValue.value через callbacks для многократного использования
// const btnIncrEl = document.querySelector('[data-action="increment"]');
// const btnDecrEl = document.querySelector('[data-action="decrement"]');
// const counterValueEl = document.querySelector("#value");
// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };
// btnIncrEl.addEventListener("click", () => {
//   counterValue.increment();
//   changeValue();
// });
// btnDecrEl.addEventListener("click", () => {
//   counterValue.decrement();
//   changeValue();
// });
// function changeValue() {
//   counterValueEl.textContent = counterValue.value;
//   console.log(counterValue.value);
// }
