function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  spanText.textContent = color;
  body.style.backgroundColor = color;
});