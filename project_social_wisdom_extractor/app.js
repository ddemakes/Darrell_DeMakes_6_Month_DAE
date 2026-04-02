// app.js — all JavaScript lives here
// Social Wisdom Extractor | v1.0

// ─── Config (constants) ───────────────────────────────────────────────────────
const CONFIG = {
  appName: "Social Wisdom Extractor",
  version: "1.0.0",
};

const MAX_FOLDERS  = 20;       // maximum folders the app supports
const APP_VERSION  = '1.0';    // app version string

// ─── State ────────────────────────────────────────────────────────────────────
let postCount   = 0;           // int     — total posts ingested
let appName     = 'SWE';       // string  — short app name
let isInstalled = false;       // boolean — tracks PWA install state

let userFolders = [];          // array   — folders created by user
let currentPost = null;        // object  — post currently in view

// ─── Math ─────────────────────────────────────────────────────────────────────
let totalPosts      = 0;
let totalFolders    = 0;
let folderPostCount = totalPosts / totalFolders;   // avg posts per folder

// ─── Utilities ────────────────────────────────────────────────────────────────
function $(selector) {
  return document.querySelector(selector);
}

function setStatus(state, message) {
  const dot  = $("#status-dot");
  const text = $("#status-text");
  if (!dot || !text) return;
  dot.className    = state;        // "ready" | "error" | ""
  text.textContent = message;
}

// ─── App Init ─────────────────────────────────────────────────────────────────
function init() {
  console.log(`${CONFIG.appName} v${CONFIG.version} — initialized`);
  document.getElementById("app").innerHTML = "<p>App ready</p>";
  setStatus("ready", "Ready");
}

// ─── PWA: Install Detection ───────────────────────────────────────────────────
window.addEventListener("appinstalled", () => {
  isInstalled = true;
  console.log(`${appName} installed as PWA.`);
});

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
