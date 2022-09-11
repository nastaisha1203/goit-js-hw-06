const changeColorRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const backgroundcolorRef = document.querySelector("body");

changeColorRef.addEventListener("click", changeColorBody);

function changeColorBody() {
  const color = getRandomHexColor();
  backgroundcolorRef.style.backgroundColor = color;
  colorRef.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
