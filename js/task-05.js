const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  const { value } = event.target;
  outputRef.textContent = value ? value : "Anonimys";
});
