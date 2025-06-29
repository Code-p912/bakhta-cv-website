// Progress Bar
window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

// Waves
function createAnimatedBackground() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  document.getElementById("animatedBg").appendChild(svg);

  const numWaves = 5;
  for (let i = 0; i < numWaves; i++) {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("stroke", "#8bc0a8");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-width", "1.5");
    path.style.opacity = 0.1 + i * 0.04;
    svg.appendChild(path);

    animateWave(path, i);
  }
}

function animateWave(path, index) {
  const amplitude = 20 + index * 5;
  const period = 200 + index * 50;
  const phase = index * 30;

  function update() {
    let d = `M0,${window.innerHeight / 2}`;
    for (let x = 0; x <= window.innerWidth; x += 20) {
      const y = window.innerHeight / 2 + amplitude * Math.sin((x + phase + Date.now() * 0.05) / period);
      d += ` L${x},${y}`;
    }
    path.setAttribute("d", d);
    requestAnimationFrame(update);
  }

  update();
}

createAnimatedBackground();
