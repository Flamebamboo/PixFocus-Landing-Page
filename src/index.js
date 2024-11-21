// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
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
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", event => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function (e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

//codes runs when dom is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("revealText");
  const words = textElement.textContent.trim().split(/\s+/);

  // Replace text content with individually wrapped words
  textElement.innerHTML = words
    .map((word, index) => `<span class="word" data-index="${index}">${word}</span>`)
    .join(" ");

  const spans = textElement.querySelectorAll(".word");

  // Function to calculate scroll percentage
  const getScrollPercentage = () => {
    return (
      ((window.pageYOffset || document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      50
    );
  };

  // Scroll event listener for gradual reveal
  window.addEventListener("scroll", () => {
    const scrollPercentage = getScrollPercentage();

    spans.forEach(span => {
      const index = parseInt(span.dataset.index);
      const wordPercentage = (index / spans.length) * 30;

      // Reveal words progressively based on scroll percentage
      if (scrollPercentage > wordPercentage) {
        span.classList.add("visible");
      } else {
        span.classList.remove("visible");
      }
    });
  });
});
