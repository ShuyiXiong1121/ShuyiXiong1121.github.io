document.addEventListener("DOMContentLoaded", () => {
  // 自动更新年份
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

  // 不规则色块随滚动轻微移动（视差）
  const shapes = document.querySelectorAll(".color-shape");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    shapes.forEach((shape, index) => {
      const speed = 0.12 + index * 0.06;
      const offset = y * speed;
      shape.style.transform = `translateY(${offset}px)`;
    });
  });
});
