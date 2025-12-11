// 背景柔光色块跟随滚动
document.addEventListener("DOMContentLoaded", () => {
  const blobs = document.querySelectorAll("[data-blob]");

  const updateBlobs = () => {
    const scroll = window.scrollY || window.pageYOffset;
    blobs.forEach((blob) => {
      const speed = parseFloat(blob.dataset.blob) || 0.2;
      const x = scroll * speed * 0.18;
      const y = scroll * speed * 0.32;
      blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  updateBlobs();
  window.addEventListener("scroll", updateBlobs, { passive: true });

  // 自定义播放器逻辑
  const players = [];

  const formatTime = (secs) => {
    if (!secs || Number.isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const pauseOthers = (currentAudio) => {
    players.forEach((p) => {
      if (p.audio !== currentAudio) {
        p.audio.pause();
      }
    });
  };

  document.querySelectorAll(".track-player").forEach((player) => {
    const audio = player.querySelector("audio");
    const btn = player.querySelector(".player-btn");
    const icon = player.querySelector(".player-icon");
    const seek = player.querySelector(".player-seek");
    const currentEl = player.querySelector(".time-current");
    const durationEl = player.querySelector(".time-duration");

    players.push({ audio, player });

    audio.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (!audio.duration) return;
      const value = (audio.currentTime / audio.duration) * 100;
      seek.value = value || 0;
      currentEl.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener("play", () => {
      pauseOthers(audio);
      icon.textContent = "❚❚";
      player.classList.add("is-playing");
    });

    const resetPlayer = () => {
      icon.textContent = "▶";
      player.classList.remove("is-playing");
    };

    audio.addEventListener("pause", resetPlayer);
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      seek.value = 0;
      currentEl.textContent = "0:00";
      resetPlayer();
    });

    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });

    seek.addEventListener("input", () => {
      if (!audio.duration) return;
      const ratio = seek.value / 100;
      audio.currentTime = audio.duration * ratio;
    });
  });
});
