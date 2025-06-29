window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};

function createWave() {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%"); svg.setAttribute("height", "100%");
  document.getElementById("animatedBg").appendChild(svg);

  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("stroke", "#8bc0a8");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke-width", "2");
  svg.appendChild(path);

  function animate() {
    let d = `M0,${window.innerHeight/2}`;
    for (let x = 0; x <= window.innerWidth; x += 20) {
      const y = window.innerHeight/2 + 20*Math.sin((x + Date.now()/10)/50);
      d += ` L${x},${y}`;
    }
    path.setAttribute("d", d);
    requestAnimationFrame(animate);
  }
  animate();
}
createWave();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! This is a demo form.");
  this.reset();
});
