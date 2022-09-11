// let counterValue = 0;
const decrementRef = document.querySelector('[data-action = "decrement"]');
const incrementRef = document.querySelector('[data-action = "increment"]');
const counterValue = document.querySelector("#value");

let value = 0;

decrementRef.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

incrementRef.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});
