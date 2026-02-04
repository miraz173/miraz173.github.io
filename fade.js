const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;

      // Opacity: 0 → 1
      entry.target.style.opacity = ratio;

      // Scale: 0.9 → 1
      const scale = 0.9 + ratio * 0.1;
      entry.target.style.transform = `scale(${scale})`;
    });
  },
  {
    threshold: thresholds
  }
);

sections.forEach(section => observer.observe(section));

function toggleReadMore() {
  const dots   = document.getElementById("dots");
  const more   = document.getElementById("more");
  const button = document.getElementById("btn");

  if (dots.style.display === "none") {
    // Collapse
    dots.style.display   = "inline";
    more.style.display   = "none";
    button.innerHTML     = "&nbsp; ...Read Details";
  } else {
    // Expand
    dots.style.display   = "none";
    more.style.display   = "inline";
    button.innerHTML     = "&nbsp; ...Read Brief";
  }
}