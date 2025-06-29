// Fireworks / confetti effect using canvas
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let w, h;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const particles = [];

function createParticle() {
  const colors = ['#ff4ecb', '#ffd700', '#7cfc00', '#00ffff', '#ff4500'];
  particles.push({
    x: Math.random() * w,
    y: h,
    speed: Math.random() * 3 + 2,
    radius: Math.random() * 4 + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    angle: Math.random() * Math.PI * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.radius -= 0.02;
    if (p.radius <= 0) particles.splice(i, 1);
  }
}

function animate() {
  createParticle();
  draw();
  requestAnimationFrame(animate);
}

animate();
