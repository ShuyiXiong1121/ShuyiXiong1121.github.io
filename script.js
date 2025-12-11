// Simple JS for smooth scrolling + moving background blobs

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Parallax-ish motion for blobs
  const blobs = Array.from(document.querySelectorAll(".bg-blob"));
  if (blobs.length) {
    const baseOffsets = blobs.map(() => ({
      x: (Math.random() - 0.5) * 40,
      y: (Math.random() - 0.5) * 40,
    }));

    const updateBlobs = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      blobs.forEach((blob, i) => {
        const strength = 0.06 + i * 0.02; // slightly different for each blob
        const x = baseOffsets[i].x + scrollY * strength * (i % 2 === 0 ? -0.4 : 0.4);
        const y = baseOffsets[i].y + scrollY * strength;
        blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    updateBlobs();
    window.addEventListener("scroll", updateBlobs, { passive: true });
  }
});
