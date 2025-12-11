// 简单的滚动视差，让背景色块跟着轻微移动
window.addEventListener("scroll", () => {
  const y = window.scrollY || window.pageYOffset;
  document.querySelectorAll(".bg-blob").forEach((blob, index) => {
    const speed = (index + 1) * 0.04;
    blob.style.transform = `translate3d(0, ${y * speed}px, 0)`;
  });
});
