const inputRef = document.querySelector("input");
const createRef = document.querySelector("[data-create]");
const destroyRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createRef.addEventListener("click", createBoxes);
destroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputRef.value);
  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxesRef.appendChild(boxEl);
  }
}

function destroyBoxes() {
  inputRef.value = "";
  boxesRef.innerHTML = "";
}
