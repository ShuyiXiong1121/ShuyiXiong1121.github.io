// Simple parallax for background blobs
(function () {
  const blobs = document.querySelectorAll(".bg-blob");

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;

    blobs.forEach((blob, index) => {
      const speed = 0.05 + index * 0.03;
      const offset = y * speed;
      blob.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
