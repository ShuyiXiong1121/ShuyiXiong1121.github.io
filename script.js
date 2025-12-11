// 背景色块随滚动轻微移动（parallax）
const blobs = document.querySelectorAll(".bg-blob");

window.addEventListener("scroll", () => {
  const y = window.scrollY || window.pageYOffset;

  blobs.forEach((blob, index) => {
    const speed = (index + 1) * 0.04; // 每个色块速度略不同
    blob.style.transform = `translate3d(0, ${y * speed}px, 0)`;
  });
});

// 导航平滑滚动
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    const rect = target.getBoundingClientRect();
    const offset = rect.top + window.pageYOffset - 72; // 顶部留一点距离

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});

// 自定义音频播放器
const players = document.querySelectorAll(".audio-player");
const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

let currentAudio = null;
let currentPlayer = null;

players.forEach((player) => {
  const audio = player.querySelector("audio");
  const playBtn = player.querySelector(".audio-play");
  const range = player.querySelector('input[type="range"]');
  const currentTimeEl = player.querySelector(".audio-time .current");
  const durationEl = player.querySelector(".audio-time .duration");

  if (!audio || !playBtn || !range) return;

  // 设置总时长
  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
  });

  // 播放/暂停
  playBtn.addEventListener("click", () => {
    // 如果点击的是当前正在播放的，直接切换
    if (audio === currentAudio && !audio.paused) {
      audio.pause();
      player.classList.remove("is-playing");
      return;
    }

    // 先把其他播放器停掉
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      if (currentPlayer) {
        currentPlayer.classList.remove("is-playing");
      }
    }

    // 播放当前
    audio.play().catch(() => {});
    currentAudio = audio;
    currentPlayer = player;
    player.classList.add("is-playing");
  });

  // 音频播放进度更新
  audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100 || 0;
    range.value = progress;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  });

  // 播放结束自动复位
  audio.addEventListener("ended", () => {
    player.classList.remove("is-playing");
    range.value = 0;
    currentTimeEl.textContent = "0:00";
  });

  // 拖动进度条
  range.addEventListener("input", () => {
    if (!audio.duration || isNaN(audio.duration)) return;
    const newTime = (range.value / 100) * audio.duration;
    audio.currentTime = newTime;
    currentTimeEl.textContent = formatTime(newTime);
  });
});
