const player = document.getElementById("player");
let posX = 50;
let posY = 50;

document.addEventListener("keydown", (e) => {
  const speed = 5;
  if (e.key === "ArrowUp") posY -= speed;
  if (e.key === "ArrowDown") posY += speed;
  if (e.key === "ArrowLeft") posX -= speed;
  if (e.key === "ArrowRight") posX += speed;
  player.style.left = posX + "px";
  player.style.top = posY + "px";
});
