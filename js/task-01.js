const itemsRef = document.querySelectorAll(".item");
console.log("Number of categories:", itemsRef.length);

itemsRef.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  const elementsRef = item.querySelectorAll("li");
  console.log("Elements:", elementsRef.length);
});
