// Theme Showcase
const body = document.body;
const colorButtons = document.querySelectorAll(".color-scheme");
const fontButtons = document.querySelectorAll(".font");

for (let button of colorButtons) {
  button.addEventListener("click", () => {
    //console.log(button.id);
    body.removeAttribute("class");
    body.classList.add(button.id);
  })
}

for (let button of fontButtons) {
  button.addEventListener("click", () => {
    body.id = "";
    body.id = button.id;
  })
}
