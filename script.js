// Scroll Progress
window.onscroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('progressBar').style.width = (scrollTop / height) * 100 + "%";
};

// Waves
function createWaves() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  document.getElementById("animatedBg").appendChild(svg);

  for (let i = 0; i < 5; i++) {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("stroke", "#8bc0a8");
    path.setAttribute("fill", "none");
    path.style.opacity = 0.1 + (i * 0.04);
    svg.appendChild(path);

    animateWave(path, i);
  }
}

function animateWave(path, index) {
  const amp = 20 + index * 5;
  const period = 200 + index * 50;
  const phase = index * 30;

  function draw() {
    let d = `M0,${window.innerHeight / 2}`;
    for (let x = 0; x <= window.innerWidth; x += 20) {
      const y = window.innerHeight / 2 + amp * Math.sin((x + phase + Date.now() * 0.05) / period);
      d += ` L${x},${y}`;
    }
    path.setAttribute("d", d);
    requestAnimationFrame(draw);
  }
  draw();
}

createWaves();
