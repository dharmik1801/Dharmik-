const circle = document.getElementById("circle");
let position = 0;
let direction = 1;

function animate() {
  position += 2 * direction;
  circle.style.left = position + "px";

  if (position > window.innerWidth - 50 || position < 0) {
    direction *= -1;
  }

  requestAnimationFrame(animate);
}

window.onload = animate;
