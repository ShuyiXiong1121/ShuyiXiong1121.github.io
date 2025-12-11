// 背景色块跟随滚动做一点点动效
(function () {
  const blobs = document.querySelectorAll(".bg-blob");

  function handleScroll() {
    const y = window.scrollY || window.pageYOffset;

    blobs.forEach((blob, index) => {
      const factor = (index + 1) * 0.03;
      const translateY = y * factor;
      const translateX = (index % 2 === 0 ? -1 : 1) * y * 0.01;
      blob.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
})();

// 自定义音频播放器
(function () {
  const players = document.querySelectorAll(".audio-player");
  if (!players.length) return;

  let currentAudio = null;
  let currentPlayer = null;

  players.forEach((player) => {
    const src = player.dataset.src;
    const playBtn = player.querySelector(".audio-play");
    const track = player.querySelector(".audio-track");
    const progress = player.querySelector(".audio-progress");
    const timeLabel = player.querySelector(".audio-time");

    const audio = new Audio(src);

    function formatTime(sec) {
      if (isNaN(sec)) return "0:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60)
        .toString()
        .padStart(2, "0");
      return `${m}:${s}`;
    }

    audio.addEventListener("loadedmetadata", () => {
      timeLabel.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });

    audio.addEventListener("timeupdate", () => {
      if (!isNaN(audio.duration) && audio.duration > 0) {
        const ratio = audio.currentTime / audio.duration;
        progress.style.width = `${ratio * 100}%`;
        timeLabel.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
      }
    });

    audio.addEventListener("ended", () => {
      playBtn.textContent = "▷";
      progress.style.width = "0%";
    });

    playBtn.addEventListener("click", () => {
      // 如果点击新的播放器，先暂停旧的
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        if (currentPlayer) {
          const oldBtn = currentPlayer.querySelector(".audio-play");
          const oldProg = currentPlayer.querySelector(".audio-progress");
          if (oldBtn) oldBtn.textContent = "▷";
          if (oldProg) oldProg.style.width = "0%";
        }
      }

      if (audio.paused) {
        audio.play();
        playBtn.textContent = "❚❚";
        currentAudio = audio;
        currentPlayer = player;
      } else {
        audio.pause();
        playBtn.textContent = "▷";
      }
    });

    track.addEventListener("click", (e) => {
      const rect = track.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      if (!isNaN(audio.duration) && audio.duration > 0) {
        audio.currentTime = Math.max(0, Math.min(audio.duration * ratio, audio.duration));
      }
    });
  });
})();
