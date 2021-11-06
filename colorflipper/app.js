const color = document.querySelector(".color>span");
const flipper = document.querySelector(".flipper");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorGenerator = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * 16)];
  }
  color.textContent = hexColor;
  document.body.style.background = hexColor;
};

flipper.addEventListener("click", colorGenerator);
