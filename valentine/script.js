const card = document.getElementById("card");
const closed = document.getElementById("closed");
const open = document.getElementById("open");
const terminal = document.getElementById("terminal");

let opened = false;

const lines = [
  "$ initializing life.js",
  "✔ dependencies resolved",
  "",
  "I optimized my life many times,",
  "but every meaningful result resolves to you.",
  "",
  "You're not a temporary variable,",
  "not a dependency I'll ever remove,",
  "but a core module I want to maintain forever.",
  "",
  "✔ edge cases tested",
  "✔ imperfections accepted",
  "",
  "const forever = async () => {",
  "  return await buildLife(withYou);",
  "}",
  "",
  "opening merge request...",
  "",
  ">>> Will you marry me?"
];

function typeLine(line, callback) {
  let i = 0;
  const span = document.createElement("span");
  span.classList.add("cursor");
  terminal.appendChild(span);

  const interval = setInterval(() => {
    if (i < line.length) {
      span.textContent += line[i];
      i++;
    } else {
      clearInterval(interval);
      span.classList.remove("cursor");
      terminal.appendChild(document.createElement("br"));
      callback();
    }
  }, 35);
}

function startTyping() {
  let index = 0;

  function nextLine() {
    if (index < lines.length) {
      typeLine(lines[index], () => {
        index++;
        setTimeout(nextLine, 300);
      });
    }
  }

  nextLine();
}

card.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  closed.style.display = "none";
  open.style.display = "block";

  startTyping();
});
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.textContent = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Start hearts after letter opens
card.addEventListener("click", () => {
  setInterval(createHeart, 700);
});
