// app.js — all JavaScript lives here
// Social Wisdom Extractor | v0.1.0

// ─── Config ───────────────────────────────────────────────────────────────────
const CONFIG = {
  appName: "Social Wisdom Extractor",
  version: "0.1.0",
};

// ─── Utilities ────────────────────────────────────────────────────────────────
function $(selector) {
  return document.querySelector(selector);
}

function setStatus(state, message) {
  const dot  = $("#status-dot");
  const text = $("#status-text");
  if (!dot || !text) return;
  dot.className = state;       // "ready" | "error" | ""
  text.textContent = message;
}

// ─── App Init ─────────────────────────────────────────────────────────────────
function init() {
  console.log(`${CONFIG.appName} v${CONFIG.version} — loaded`);
  setStatus("ready", "Ready");

  // TODO: mount components into #app as the project grows
}

// ─── PWA: Service Worker Registration ─────────────────────────────────────────
function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => console.log("Service worker registered."))
      .catch((err) => console.warn("SW registration failed:", err));
  }
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  init();
  registerSW();
});
