window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-transparent");
  } else {
    navbar.classList.remove("bg-transparent");
  }
});

const words = ["students", "professionals"];
let index = 0;
const animatedText = document.getElementById("animated-text");

setInterval(() => {
  index = (index + 1) % words.length;
  animatedText.textContent = words[index];
}, 2000);

//notes on why we use % words.length in the setInterval function

// 0 + 1 % 2 = 1
// 1 + 1 % 2 = 0

document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
