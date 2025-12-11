// 让背景色块在滚动时轻微位移，增加“活着”的感觉
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const blobs = document.querySelectorAll(".bg-blob");

  blobs.forEach((blob, index) => {
    const factor = (index + 1) * 0.02;
    const x = scrollY * factor * (index % 2 === 0 ? 1 : -1);
    const y = scrollY * factor * 0.6;
    blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
});
