const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsRef = document.querySelector("#ingredients");

const elements = ingredients.map((igredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = igredient;
  itemEl.classList.add("item");
  return itemEl;
});

ingredientsRef.append(...elements);
console.log(ingredientsRef);
