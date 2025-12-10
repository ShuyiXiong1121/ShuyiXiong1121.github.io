// 等 DOM 加载完再跑脚本，避免奇怪问题
document.addEventListener("DOMContentLoaded", () => {
  // 自动更新年份
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 导航和平滑滚动
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.length > 1) {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // 返回顶部按钮显示 / 隐藏
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 背景色块随滚动明显移动（parallax）
  const blobs = document.querySelectorAll(".bg-blob");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    blobs.forEach((blob, index) => {
      // 速度调得比较大一点，方便你肉眼看到它在动
      const speed = 0.25 + index * 0.12;
      const offset = scrollY * speed;
      blob.style.transform = `translateY(${offset}px)`;
    });
  });
});
