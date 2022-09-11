const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = "56px";

fontSizeRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
});
