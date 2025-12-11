// 让背景色块跟着滚动 / 鼠标做一点细腻的移动

const blobs = Array.from(document.querySelectorAll(".bg-blob"));

if (blobs.length) {
  const baseOffsets = [
    { x: -40, y: 60 },
    { x: 60, y: 120 },
    { x: 0, y: 0 }
  ];

  const updateBlobs = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    blobs.forEach((blob, index) => {
      const speed = 0.04 + index * 0.02;
      const offset = baseOffsets[index];

      const translateY = scrollY * speed + offset.y;
      const translateX = offset.x + scrollY * (index === 1 ? -0.02 : 0.01);

      blob.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    });
  };

  updateBlobs();
  window.addEventListener("scroll", updateBlobs, { passive: true });

  // 鼠标轻微影响
  window.addEventListener(
    "pointermove",
    (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;

      blobs.forEach((blob, index) => {
        const strength = 10 + index * 10;
        blob.style.transform += ` translate3d(${nx * strength}px, ${
          ny * strength
        }px, 0)`;
      });
    },
    { passive: true }
  );
}
