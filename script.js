// 让背景色块随滚动做一点轻微的视差位移

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;

  const blobs = document.querySelectorAll(".bg-blob");
  blobs.forEach((blob, index) => {
    const speed = 0.04 + index * 0.02; // 不同的速度
    const translateY = scrollY * speed;
    blob.style.transform = `translate3d(0, ${translateY}px, 0)`;
  });
});
