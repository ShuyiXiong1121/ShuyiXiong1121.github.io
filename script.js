// 让背景色块跟随滚动轻微移动（简单 parallax）

const blobs = document.querySelectorAll(".bg-blob");

let ticking = false;

function updateBlobs() {
  const scrollY = window.scrollY || window.pageYOffset;

  blobs.forEach((blob) => {
    const speed = parseFloat(blob.dataset.speed || "0.15");
    blob.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateBlobs);
    ticking = true;
  }
});
