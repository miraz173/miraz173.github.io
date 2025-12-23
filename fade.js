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

