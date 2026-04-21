// ── CONSTANTS ──────────────────────────────────────────────────
const MAX_PINS = 10;                        // JS2-2: named constant
const APP_NAME = "The Pinbook";             // JS2-2: named constant

// ── VARIABLES (descriptive names, multiple data types) ─────────
let pinCount = 0;                           // JS1-3 + JS1-4: int
let inboxLabel = "thepinbook.com inbox";   // JS1-3 + JS1-4: string
let isInboxLive = true;                     // JS1-4: boolean
let selectedPinIndex = -1;                  // tracks selected card (int)
let tickerInterval = null;                  // JS2-9: will hold setInterval ref

// ── MATH ───────────────────────────────────────────────────────
let totalEmailsReceived = 7;                // JS1-5: used in math below
let emailsOpened = 4;
let openRate = (emailsOpened / totalEmailsReceived) * 100;  // JS1-5: math op
// openRate is now 57.14... — stored in a variable

// ── SAMPLE PIN DATA (array of objects) ─────────────────────────
// JS2-8: array that will be iterated
const pins = [
  { title: "How to make sourdough from scratch",   source: "facebook.com", folder: "", email: "pin-001@thepinbook.com" },
  { title: "10 habits of highly productive people", source: "facebook.com", folder: "", email: "pin-002@thepinbook.com" },
  { title: "The best hiking trails in Patagonia",   source: "facebook.com", folder: "", email: "pin-003@thepinbook.com" },
  { title: "How compound interest actually works",   source: "facebook.com", folder: "", email: "pin-004@thepinbook.com" },
  { title: "A beginner's guide to watercolor",       source: "facebook.com", folder: "", email: "pin-005@thepinbook.com" },
];
// ── ON PAGE LOAD ───────────────────────────────────────────────
// JS2-5: onload event
window.onload = function () {

  // JS1-8: console output
  console.log(APP_NAME + " loaded. Open rate: " + openRate.toFixed(1) + "%");
  console.log("Pins in inbox:", pins.length);

  // JS2-3a: find element by ID, update it (DOM output = JS1-8 browser screen)
  let statusEl = document.getElementById("inbox-status");
  statusEl.textContent = inboxLabel + " · " + pins.length + " new pins";

  // JS2-3b: find element by tag name
  let headings = document.getElementsByTagName("h1");
  headings[0].textContent = "📌 " + APP_NAME + " — Pin Inbox";

  // JS2-3c: add a new attribute to the status bar element
  let statusBar = document.getElementById("status-bar");
  statusBar.setAttribute("data-inbox", "thepinbook.com");   // JS2-3d: add attribute

  // JS2-3e: change CSS via JS
  statusBar.style.borderLeftColor = isInboxLive ? "#27ae60" : "#c0392b";

  // Show open rate in counter display
  let counterEl = document.getElementById("counter-display");
  counterEl.textContent = "Email open rate: " + openRate.toFixed(1) + "% (" + emailsOpened + " of " + totalEmailsReceived + ")";

  // Render the pin cards + start ticker
  renderPins();
  startTicker();
};
// ── RENDER PIN CARDS ───────────────────────────────────────────
// JS2-6: custom function, multiple args, returns a value
function buildPinCardHTML(pin, index) {
  let folderTag = pin.folder ? '<span class="tag">📁 ' + pin.folder + '</span>' : '<span class="tag">📥 unsorted</span>';
  return '<div class="pin-card" id="card-' + index + '" ' +
    'onclick="selectPin(' + index + ')" ' +
    'onmouseover="highlightCard(' + index + ')" ' +
    'onmouseout="resetCard(' + index + ')">' +
    '<h3>' + pin.title + '</h3>' +
    '<p>📧 ' + pin.email + '</p>' +
    folderTag +
    '</div>';
}

function renderPins() {
  let feedEl = document.getElementById("pin-feed");
  feedEl.innerHTML = "";

  // JS2-7: loop structure  |  JS2-8: iterate array, access elements
  for (let i = 0; i < pins.length; i++) {
    pinCount++;                              // increments the int variable
    feedEl.innerHTML += buildPinCardHTML(pins[i], i);
  }

  // JS2-3: getElementsByClassName — used after cards are rendered
  let cards = document.getElementsByClassName("pin-card");
  console.log("Cards rendered:", cards.length);
}
// ── PIN SELECTION & FOLDER LOGIC ──────────────────────────────
function selectPin(index) {
  selectedPinIndex = index;

  // JS1-6: if / else
  // JS1-7: logical operator (&&)
  // JS2-4: else if
  if (index >= 0 && index < pins.length) {        // JS1-7: AND operator
    let card = document.getElementById("card-" + index);
    card.classList.add("selected");

    let promptEl = document.getElementById("folder-prompt");

    if (pins[index].folder === "") {               // JS1-6: if
      promptEl.style.display = "block";
      document.getElementById("folder-input").value = "";
      console.log("Pin selected — no folder yet:", pins[index].title);
    } else if (pins[index].folder.length > 0) {   // JS2-4: else if
      promptEl.style.display = "block";
      document.getElementById("folder-input").value = pins[index].folder;
      console.log("Pin already in folder:", pins[index].folder);
    } else {                                       // JS1-6: else
      promptEl.style.display = "none";
    }
  } else {
    console.log("Invalid pin index");             // JS1-6: else branch
  }
}

function highlightCard(index) {
  let card = document.getElementById("card-" + index);
  if (card && !card.classList.contains("selected")) {
    card.style.borderColor = "#c0392b";
  }
}

function resetCard(index) {
  let card = document.getElementById("card-" + index);
  if (card && !card.classList.contains("selected")) {
    card.style.borderColor = "#ddd";
  }
}


function saveToFolder() {
  let folderName = document.getElementById("folder-input").value.trim();

  // JS1-7: OR operator — check if input is empty or just spaces
  if (folderName === "" || folderName.length < 1) {
    alert("Please enter a folder name.");
    return;
  }

  pins[selectedPinIndex].folder = folderName;
  closeFolder();
  renderPins();
  console.log("Saved to folder:", folderName, "| Total pins processed:", pinCount);
}

function closeFolder() {
  document.getElementById("folder-prompt").style.display = "none";
  selectedPinIndex = -1;
}
// ── TICKER (setInterval / clearInterval) ──────────────────────
// JS2-9: setInterval + clearInterval
const tickerMessages = [
  "📌 Pin posts from Facebook via " + APP_NAME,
  "📧 Email any link to your thepinbook.com inbox",
  "🗂️ Organize pins into folders with AI",
  "✅ Powered by Brevo · thepinbook.com",
];
let tickerIndex = 0;
let tickerCount = 0;
const TICKER_CYCLES = tickerMessages.length * 2;  // stop after 2 full loops

function startTicker() {
  let tickerEl = document.getElementById("ticker");

  tickerInterval = setInterval(function () {        // JS2-9: setInterval
    tickerEl.textContent = tickerMessages[tickerIndex];
    tickerIndex = (tickerIndex + 1) % tickerMessages.length;
    tickerCount++;

    if (tickerCount >= TICKER_CYCLES) {
      clearInterval(tickerInterval);                // JS2-9: clearInterval
      tickerEl.textContent = "✅ Welcome to " + APP_NAME + " — " + inboxLabel;
      console.log("Ticker stopped after", tickerCount, "cycles.");
    }
  }, 2000);
}