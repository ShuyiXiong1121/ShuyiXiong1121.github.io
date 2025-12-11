// script.js

// smooth scroll for nav links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

// simple parallax for background blobs
(function () {
  const blobs = document.querySelectorAll(".bg-blob");
  if (!blobs.length) return;

  const factors = [0.12, -0.08, 0.18];

  const handleScroll = () => {
    const y = window.scrollY || window.pageYOffset;
    blobs.forEach((blob, index) => {
      const f = factors[index] ?? 0.1;
      blob.style.transform = `translate3d(0, ${y * f}px, 0)`;
    });
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
})();

// custom audio players
(function () {
  const players = document.querySelectorAll(".audio-player");
  if (!players.length) return;

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  players.forEach((player) => {
    const audio = player.querySelector(".player-audio");
    const playBtn = player.querySelector(".player-btn");
    const progress = player.querySelector(".player-progress");
    const currentTimeEl = player.querySelector(".current-time");
    const durationEl = player.querySelector(".duration");

    if (!audio || !playBtn || !progress) return;

    // set duration when metadata loads
    audio.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audio.duration);
    });

    // play / pause
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        // pause all other players
        players.forEach((p) => {
          if (p === player) return;
          const a = p.querySelector(".player-audio");
          const b = p.querySelector(".player-btn");
          if (a) a.pause();
          if (b) b.textContent = "▶";
          p.classList.remove("is-playing");
        });

        audio.play();
        player.classList.add("is-playing");
        playBtn.textContent = "❚❚";
      } else {
        audio.pause();
        player.classList.remove("is-playing");
        playBtn.textContent = "▶";
      }
    });

    // update progress bar + current time
    audio.addEventListener("timeupdate", () => {
      if (!audio.duration) return;
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.value = percent;
      currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    // seeking
    progress.addEventListener("input", () => {
      if (!audio.duration) return;
      const newTime = (progress.value / 100) * audio.duration;
      audio.currentTime = newTime;
    });
  });
})();
