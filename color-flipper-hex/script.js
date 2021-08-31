const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".color");
const button = document.getElementById("btn");
const body = document.body;
button.addEventListener("click", () => {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {
    hexColor += hex[getRandomColor()];
  }
  color.textContent = hexColor;
  body.style.background = hexColor;
});
const getRandomColor = () => {
  return Math.floor(Math.random() * hex.length);
};
