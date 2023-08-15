const btn = document.querySelector(".btn");
const square = document.querySelector(".square");
const bodyWidth = document.body.clientWidth - 50;
let currentPosition = 0;
let movingRight = true;
btn.addEventListener("click", () => {
  if (movingRight) {
    currentPosition += 50;
    btn.textContent = "Right";
    if (currentPosition >= bodyWidth) {
      currentPosition = bodyWidth;
      movingRight = false;
    }
  } else {
    btn.textContent = "Left";
    currentPosition -= 50;
    if (currentPosition <= 0) {
      currentPosition = 0;
      movingRight = true;
    }
  }
  square.style.left = currentPosition + "px";
});
