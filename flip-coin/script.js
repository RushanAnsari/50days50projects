const coin = document.getElementById("coin");
const flipBtn = document.getElementById("flip-btn");
const resultText = document.getElementById("result-text");

// Button par click event
flipBtn.addEventListener("click", () => {
  flipBtn.disabled = true;
  resultText.textContent = "Flipping...";

  const isHeads = Math.random() < 0.5;

  const randomSpin = Math.floor(Math.random() * 5) + 5;
  const degrees = isHeads ? randomSpin * 360 : randomSpin * 360 + 180;

  coin.style.transform = `translateX(-50%) rotateY(${degrees}deg)`;

  setTimeout(() => {
    if (isHeads) {
      resultText.textContent = "Heads";
    } else {
      resultText.textContent = "Tails";
    }

    flipBtn.disabled = false;
  }, 600);
});
