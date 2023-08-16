import throttle from "lodash.throttle";
//1 option
// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (Number(this.getAttribute("data-length")) !== this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//}
//The second option
const xLengthInput = document.querySelector("#validation-input");
const errorInput = document.querySelector(".error");
xLengthInput.onblur = function () {
  if (
    xLengthInput.value.length ===
    Number(xLengthInput.getAttribute("data-length"))
  ) {
    xLengthInput.classList.add("valid");
    xLengthInput.classList.remove("invalid");
    errorInput.textContent = "";
  } else if (xLengthInput.value.length >= 1) {
    xLengthInput.classList.add("invalid");
    xLengthInput.classList.remove("valid");
    errorInput.textContent = "Ошибка! Введите 6 символов!";
  }
};
//3 option
// const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute("data-length"));
// textInput.addEventListener("blur", (event) => {
//   if (event.target.value.length == textInput.getAttribute("data-length")) {
//     textInput.classList.add("valid");
//     if (textInput.classList.contains("invalid")) {
//       textInput.classList.remove("invalid");
//     }
//   } else {
//     if (textInput.classList.contains("valid")) {
//       textInput.classList.remove("valid");
//     }
//     textInput.classList.add("invalid");
//   }
// });
const nameInput = document.querySelector("#name-input");
console.log(nameInput);
nameInput.addEventListener(
  "input",
  throttle(onSearch, 6000, { leading: false })
);
function onSearch(evt) {
  console.dir(evt.target.value);
}
