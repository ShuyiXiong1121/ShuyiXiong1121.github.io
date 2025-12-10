document.addEventListener("DOMContentLoaded", () => {
  // 年份
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 导航平滑滚动
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

  // Back to top 按钮
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // blob 轻微视差移动
  const blobs = document.querySelectorAll(".bg-blob");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    blobs.forEach((blob, i) => {
      const speed = 0.08 + i * 0.04;
      blob.style.transform = `translateY(${y * speed}px)`;
    });
  });
});
