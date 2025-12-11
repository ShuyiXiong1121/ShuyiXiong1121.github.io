// 让背景色块随滚动轻微移动（parallax）
(function () {
  const blobs = document.querySelectorAll(".bg-blob");

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;

    blobs.forEach((blob, index) => {
      const factor = 0.03 + index * 0.02; // 每个速度不一样
      const x = y * factor * (index % 2 === 0 ? 1 : -1);
      const offsetY = y * factor * 0.6;

      blob.style.transform = `translate3d(${x}px, ${offsetY}px, 0)`;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
