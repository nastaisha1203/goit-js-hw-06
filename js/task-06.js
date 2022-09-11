const validatorInputRef = document.querySelector("#validation-input");

validatorInputRef.addEventListener("blur", inputBlur);

function inputBlur(event) {
  const { dataset, value } = event.target;

  if (Number(dataset.length) === value.length) {
    changeClass("valid", "invalid", event.target);
  } else {
    changeClass("invalid", "valid", event.target);
  }
}

function changeClass(add, remove, elem) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}
