
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 480;
canvas.height = 320;

let x = 50;
let y = 50;
const size = 30;

function drawPlayer() {
  ctx.fillStyle = "#ff6b81";
  ctx.fillRect(x, y, size, size);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  clear();
  drawPlayer();
  requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
  switch(e.key) {
    case "ArrowUp": y -= 10; break;
    case "ArrowDown": y += 10; break;
    case "ArrowLeft": x -= 10; break;
    case "ArrowRight": x += 10; break;
  }
});

update();
