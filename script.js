/* 基础 */

:root {
  --bg: #050509;
  --fg: #f4f4f8;
  --muted: #a3a3c2;
  --accent: #ff4b7a;
  --accent-soft: rgba(255, 75, 122, 0.4);
  --card-bg: rgba(9, 9, 18, 0.9);
  --card-border: rgba(255, 255, 255, 0.06);
  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-pill: 999px;
  --shadow-soft: 0 32px 80px rgba(0, 0, 0, 0.7);
  --transition-fast: 0.18s ease-out;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: "Raleway", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: radial-gradient(circle at 0% 0%, #281b55 0, #050509 55%, #190714 100%);
  color: var(--fg);
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow-x: hidden;
}

/* 背景色块 */

.bg-blob {
  position: fixed;
  z-index: -2;
  width: 520px;
  height: 520px;
  filter: blur(90px);
  opacity: 0.5;
  pointer-events: none;
  mix-blend-mode: screen;
}

.blob1 {
  background: radial-gradient(circle at 30% 30%, #5f4bff, #120821);
  top: -120px;
  left: -120px;
}

.blob2 {
  background: radial-gradient(circle at 60% 40%, #ff4b7a, #190412);
  top: 30%;
  right: -160px;
}

.blob3 {
  background: radial-gradient(circle at 40% 70%, #2ab5ff, transparent);
  bottom: -200px;
  left: 10%;
}

/* 布局 */

.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 96px 0 80px;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 16px;
}

.section-intro {
  margin: 0 0 32px;
  max-width: 520px;
  color: var(--muted);
  font-size: 14px;
}

.body-text {
  margin: 0 0 14px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}

/* Header */

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: linear-gradient(to bottom, rgba(5, 5, 9, 0.96), rgba(5, 5, 9, 0.8), transparent);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
}

.logo {
  letter-spacing: 0.16em;
  font-size: 11px;
  text-transform: uppercase;
  color: var(--muted);
}

.nav a {
  font-size: 13px;
  margin-left: 28px;
  color: var(--muted);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width var(--transition-fast);
}

.nav a:hover {
  color: var(--fg);
}

.nav a:hover::after {
  width: 100%;
}

/* Hero */

.hero {
  padding: 72px 0 88px;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;
}

.hero-kicker {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 12px;
}

.hero-title {
  font-size: 40px;
  line-height: 1.15;
  margin: 0 0 16px;
}

.hero-subtitle {
  font-size: 14px;
  color: var(--muted);
  max-width: 520px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  transition: background var(--transition-fast), transform var(--transition-fast),
    box-shadow var(--transition-fast), border-color var(--transition-fast),
    color var(--transition-fast);
}

.btn-primary {
  background: linear-gradient(135deg, #4ae9ff, #8a7bff);
  color: #050509;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.9);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 1);
}

.btn-ghost {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.16);
  color: var(--fg);
}

.btn-ghost:hover {
  border-color: var(--accent-soft);
  background: rgba(255, 255, 255, 0.02);
}

/* Hero media */

.hero-media {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.hero-photo-wrap {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  padding: 6px;
  background: radial-gradient(circle at 30% 10%, #ff4b7a, #5f4bff 40%, #050509 75%);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.hero-avatar-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 16px;
  border-radius: 999px;
  background: radial-gradient(circle at 0% 0%, rgba(255, 75, 122, 0.25), rgba(5, 5, 9, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.9);
}

.hero-avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  object-fit: cover;
}

.hero-avatar-text {
  display: flex;
  flex-direction: column;
}

.hero-avatar-name {
  font-size: 13px;
  font-weight: 500;
}

.hero-avatar-role {
  font-size: 11px;
  color: var(--muted);
}

/* Music / Projects */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.project-card {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow-soft);
  padding: 20px 20px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.project-title {
  font-size: 16px;
  margin: 0 0 8px;
}

.project-tags {
  font-size: 12px;
  color: var(--muted);
  margin: 0 0 10px;
}

.project-description {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}

/* 自定义播放器：黑底白边 */

.audio-player {
  margin-top: 18px;
  padding: 8px 10px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  color: #ffffff;
}

.audio-play {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  background: transparent;
  color: #ffffff;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
}

.audio-play:hover {
  background: #ffffff;
  color: #000000;
  transform: translateY(-1px);
}

.audio-track {
  flex: 1;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  cursor: pointer;
}

.audio-progress {
  height: 100%;
  width: 0%;
  background: #ffffff;
  border-radius: inherit;
}

.audio-time {
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* Contact */

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 40px;
}

.contact-item {
  margin-top: 18px;
}

.contact-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-bottom: 4px;
}

.contact-link {
  font-size: 14px;
  color: var(--fg);
  text-decoration: none;
}

.contact-link:hover {
  color: var(--accent);
}

.contact-heading {
  font-size: 14px;
  margin: 0 0 8px;
}

.contact-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-links-list li + li {
  margin-top: 4px;
}

.contact-links-list a {
  font-size: 14px;
  color: var(--muted);
  text-decoration: none;
}

.contact-links-list a:hover {
  color: var(--fg);
}

/* 响应式 */

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }

  .hero-media {
    order: -1;
  }

  .hero-photo-wrap {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 720px) {
  .section {
    padding: 72px 0 64px;
  }

  .projects-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
