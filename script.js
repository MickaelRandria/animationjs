const card = document.querySelector(".card");

card.addEventListener("mousemove", (event) => onMouseMove(event));

const onMouseMove = (event) => {
  const maxDeg = 20;

  const mousePosX = event.offsetX;
  const mousePosY = event.offsetY;

  const xMid = card.offsetWidth / 2;
  const yMid = card.offsetHeight / 2;

  const xPos = mousePosX - xMid;
  const yPos = mousePosY - yMid;

  const xDeg = (xPos * maxDeg) / xMid;
  const yDeg = (yPos * maxDeg) / yMid;

  card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`;
  card.style.boxShadow = `${xDeg * -1}px ${yDeg}px 32px rgba(31,38,135,0.1) `;

  console.log(xDeg + yDeg);
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 3000,
  delay: 200,
});

// J'ai essayé de faire en sorte que l'animation arrive en même temps que la fumée de la video

ScrollReveal().reveal(".container", { delay: 500, origin: "left" });
ScrollReveal().reveal(".top", { delay: 500, origin: "left" });
ScrollReveal().reveal(".contact", { delay: 500, origin: "left" });
// J'ai commenté la card car avec le reveal le hover qui me permet de faire tourner la card ne fonctionne plus
// ScrollReveal().reveal(".card", { delay: 300, origin: "right" });
