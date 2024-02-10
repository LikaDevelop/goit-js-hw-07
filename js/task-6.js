const btnCreate = document.querySelector("button[data-create]");
const btnDelete = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("input");
let boxesForElements = document.querySelector("div#boxes");


function createBoxes(amount) {
  deleteBoxes();
  if (amount >= 1 && amount <= 100) {
    let size = 30;
    for (let i = 1; i <= amount; i++){
      const divElement = document.createElement("div");
      divElement.style.width = size + "px";
      divElement.style.height = size + "px";
      divElement.style.backgroundColor = getRandomHexColor();
      boxesForElements.append(divElement);
      size = size + 10;
    }
  }
}

function deleteBoxes() {
  boxesForElements.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  createBoxes(numberInput.valueAsNumber);
  numberInput.value = "";
}); 

btnDelete.addEventListener("click", () => {
  deleteBoxes();
}); 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
