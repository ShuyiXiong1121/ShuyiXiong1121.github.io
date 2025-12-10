// 选中所有背景 shape
const shapes = document.querySelectorAll(".shape");

const updateShapes = () => {
  const scrollY = window.scrollY || window.pageYOffset;

  shapes.forEach((el) => {
    const speed = parseFloat(el.dataset.speed || "0.2");
    const offset = scrollY * speed;

    // 在原来基础上做一个轻微 translateY
    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
};

window.addEventListener("scroll", updateShapes);
window.addEventListener("load", updateShapes);
