# Project Design Document — Social Wisdom Extractor

**Project Title:** Social Wisdom Extractor (SWE)
**Version & Date:** DRAFT — 04/01/2026
**Change Log:** v2 — Full project redefinition as a Progressive Web App with share sheet integration, Facebook as first platform, AI-powered folder organization system.

---

## 2. Project Summary

The Social Wisdom Extractor is a Progressive Web App (PWA) that lets users capture posts from social media platforms — starting with Facebook — directly into a personal, AI-organized knowledge repository. Users invoke the app through their device's native share sheet, select or create a destination folder, and the app uses a user-defined AI system prompt to automatically organize the post within that folder. The result is a private, searchable, AI-curated library of social wisdom, insights, and content that the user has collected over time.

---

## 3. Problem Statement / Use Case

Social media surfaces valuable content — articles, life advice, tutorials, perspectives — that disappears into the feed and is never seen again. Users have no easy, friction-free way to capture a post in the moment and have it organized intelligently alongside related content they've saved before. Existing bookmarking tools are passive: they save links but do nothing with them. This app is active: it captures, enriches with metadata, and uses AI to organize content according to the user's own intent, expressed as a natural-language system prompt per folder.

**User:** Anyone who regularly encounters valuable content on social media and wants to build a personal knowledge library without manual effort.
**Trigger:** User sees a post on Facebook that they want to save and act on later.
**Problem:** No native tool captures the post, extracts its meaning, and organizes it intelligently in one tap.
**Solution:** A PWA that lives in the OS share sheet — one tap to capture, AI does the organizing.

---

## 4. Goals and Objectives

- **Primary Goal:** Ship a deployed, installable PWA by June 18, 2026 that passes the share sheet test on Android Chrome and iOS Safari.
- **Learning Goal:** Demonstrate all 17 JavaScript rubric items within the first 4 project weeks, integrated naturally into the PWA build.
- **Product Goal (MVP):** Users can capture a Facebook post URL via share sheet → select a folder → have AI organize the folder contents according to a user-defined system prompt.
- **Technical Goal:** Full-stack PWA: HTML/CSS/JS frontend with service worker → Node/Express backend → MongoDB Atlas → AI API (OpenAI or Claude).
- **Platform Goal:** Facebook first. Architecture must be designed from day one to support additional platforms (Instagram, LinkedIn, X, YouTube) as future additions without refactoring.
- **App Store Goal:** PWA architecture specifically chosen because it meets app store criteria for share sheet access — it is not simply a web bookmark, it is an installable application with offline capability, a service worker, and a Web Share Target manifest entry.

---

## 5. Key Features / Functions

1. **Share Sheet Integration (Web Share Target API)** — App appears in the device OS share sheet. User taps Share from Facebook, selects Social Wisdom Extractor, and the post URL is sent directly to the app.
2. **Open Graph Metadata Extraction** — When a post URL is received, the backend fetches and parses Open Graph tags (title, description, image) from the URL to build a rich preview card — no manual entry required.
3. **Folder System** — Users create named folders to organize their captured posts. Each folder has a name, a color/icon, and a system prompt.
4. **AI System Prompt per Folder** — Each folder has a user-written natural language instruction, e.g. "Make a chronology of these events" or "Order these posts as a sequence of steps to help me learn this topic holistically." The AI uses this prompt when organizing the folder's contents.
5. **AI Folder Organization** — When a folder is opened (or a new post is added), the AI receives all post metadata + the folder's system prompt and returns an organized output: a chronology, a learning sequence, themes, action items, or whatever the prompt defines.
6. **Smart Folder Suggestion** — At capture time, AI suggests which existing folder best fits the new post based on the post's content and the folder descriptions/prompts. User can accept or override.
7. **Duplicate Detection** — Before saving, app checks if the URL already exists in any folder. Alerts user and shows which folder already contains it.
8. **Offline Mode** — Service worker caches app shell and recently viewed content. App is usable without a network connection for browsing saved posts.
9. **Global Search** — Search across all posts and AI outputs in all folders simultaneously.
10. **Post Management** — Move posts between folders, delete posts, edit folder prompts, re-run AI on updated folder contents.
11. **PWA Install Experience** — Custom "Add to Home Screen" prompt. Standalone display mode (no browser chrome). Splash screen. Works on Android Chrome and iOS Safari.

---

## 6. Tech Stack and Tools

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript | PWA shell, all UI, all JS rubric items |
| PWA Layer | Web App Manifest + Service Worker | Share sheet eligibility, offline capability, installability |
| Share Integration | Web Share Target API | Receives shared URLs from OS share sheet |
| Metadata Extraction | Open Graph protocol via backend fetch | Enriches shared URLs with title, description, image |
| Backend | Node.js + Express.js | API server, OG proxy, AI orchestration, business logic |
| Database | MongoDB Atlas (free tier) | Folders, posts, AI output persistence |
| AI Layer | OpenAI API or Anthropic Claude API | Folder organization, smart folder suggestion |
| Version Control | GitHub | Source control, commit history |
| Deployment (Frontend) | Vercel or Netlify | HTTPS (required for PWA/service worker), CDN delivery |
| Deployment (Backend) | Render or Railway | Node.js hosting, environment variable management |
| Dev Tools | VS Code, Postman, nodemon, ESLint, Chrome DevTools | Development, API testing, PWA debugging |

---

## 7. Architecture / Workflow (Plain Description)

**Install Flow:**
User visits the app URL on their phone. Because the app has a valid Web App Manifest and service worker, the browser offers to install it. User taps "Add to Home Screen." App installs as a standalone application with its own icon, splash screen, and no browser chrome.

**Share Flow (core user journey):**
User is on Facebook and sees a post worth saving. They tap the native Share button on their phone. The OS share sheet appears. The Social Wisdom Extractor app is listed. User taps it. The app opens (or comes to the foreground) with the shared URL received via the Web Share Target API. The app calls the backend POST /api/og endpoint, which fetches the Facebook URL server-side and returns Open Graph metadata (title, description, image). The app displays a preview card of the post. The AI suggests a folder based on the post content. The user confirms or selects a different folder (or creates a new one). The post is saved to MongoDB via POST /api/posts. The AI re-runs the folder's system prompt against all posts in that folder via POST /api/ai/organize. The user sees a confirmation screen.

**Folder & AI Flow:**
When a user opens a folder, the app fetches all posts for that folder from the backend. If new posts have been added since the last AI run, the AI automatically re-runs. The frontend calls POST /api/ai/organize, which sends all post metadata plus the folder's system prompt to the OpenAI or Claude API. The AI returns an organized response (chronology, learning sequence, etc.). This output is displayed in the folder view and cached in the database so it doesn't need to regenerate on every open.

**Data Flow Summary:**
Facebook → OS Share Sheet → PWA Share Handler → POST /api/og (metadata) → Folder Picker UI → POST /api/posts (save) → POST /api/ai/organize (AI) → Folder View (render output)

---

## 8. Timeline / Weekly Milestones (12-Week Sprint)

| Week | Calendar Dates | Focus | Key Deliverable |
|---|---|---|---|
| Week 1 | Mar 30 – Apr 2 | PWA Foundation | Manifest, service worker, HTTPS scaffold, JS rubric items 1–8 started |
| Week 2 | Apr 6–9 | Share Sheet & Post Capture | Web Share Target working, OG metadata extracted, folder picker, localStorage save |
| Week 3 | Apr 13–16 | Folder System & AI Engine | Folder creation with system prompts, AI organization output, rubric audit |
| Week 4 | Apr 20–23 | PWA Polish & Rubric Completion | Offline mode, install prompt, all 17 rubric items verified, sprint demo |
| Week 5 | Apr 27–30 | Backend Introduction | Express server, OG proxy endpoint, AI endpoint, error handling |
| Week 6 | May 4–7 | MongoDB Persistence | Atlas connected, folders/posts persisted to DB, full CRUD working |
| Week 7 | May 11–14 | AI Organization Engine | Prompt engineering, AI output rendering, smart folder suggestion, caching |
| Week 8 | May 18–20 | UX Polish & Advanced Features | Global search, mobile-first polish, folder/post sorting |
| Week 9 | May 27–Jun 2 | Testing & Hardening | Unit tests, API tests, accessibility, security, input validation |
| Week 10 | Jun 3–9 | Deployment | Backend deployed, PWA deployed with HTTPS, share sheet tested on real devices |
| Week 11 | Jun 10–16 | Documentation & Final Polish | README, rubric proof, demo video, Lighthouse audit |
| Week 12 | Jun 17–18 | Final Submission | Retrospective, deliverables packaged, submitted |

*Days off observed: Thu 5/21, Mon 5/25, Tue 5/26. No tasks scheduled on these dates.*
*Week 1 Days 1–2 (Mon 3/30, Tue 3/31) occurred prior to this plan's creation.*

---

## 9. Risks and Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Facebook blocks OG metadata fetch from backend | High | High | Test early (Week 5). Fallback: user manually adds title/note at capture time. Cache successful fetches. |
| Web Share Target API not supported on iOS Safari | Medium | High | iOS Safari supports Share Target via Add to Home Screen install. Test on real iPhone in Week 10. Document iOS-specific install instructions. |
| AI API costs exceed free tier during development | Medium | Medium | Rate-limit /api/ai/organize endpoint. Cache AI output in DB — only re-run when posts change. Set spending alert in OpenAI dashboard. |
| PWA fails app store share sheet criteria | Low | High | Follow Web Share Target API spec precisely. Run Lighthouse PWA audit every sprint. Target score 90+ throughout. |
| MongoDB Atlas free tier limits hit | Low | Low | Free tier allows 512MB — more than sufficient for this project scale. |
| Scope creep beyond 8 hrs/week | High | High | Multi-platform support (Instagram, LinkedIn, etc.) is explicitly deferred to post-MVP. Ruthlessly protect the core share → folder → AI flow. |
| JavaScript rubric items not naturally fitting the PWA | Low | Medium | Week 4 audit day specifically reserved to identify and fill any gaps before backend phase begins. |

---

## 10. Evaluation Criteria

**Functional:**
- PWA installs on Android Chrome and iOS Safari from production URL.
- App appears in OS share sheet and correctly receives a shared Facebook post URL.
- Open Graph metadata is extracted and displayed as a preview card.
- User can create a folder with a custom AI system prompt.
- Post is saved to MongoDB and AI organizes the folder on save.
- AI output reflects the folder's system prompt (different prompts produce meaningfully different outputs).
- All 17 JavaScript rubric items are present, documented with file + line number in the rubric proof document.

**Quality:**
- Lighthouse PWA audit scores 90+ on production URL.
- App functions offline for browsing previously saved posts.
- No API keys or secrets appear in the GitHub repository.
- README is complete with setup instructions, environment variables, and API documentation.

**Learning:**
- Learner can explain what a Progressive Web App is, why HTTPS is required, and how the Web Share Target API works.
- Learner can point to each of the 17 rubric items in the codebase and explain what it does.
- Git commit history shows consistent, incremental progress.

---

## 11. Future Considerations

- **Multi-Platform Expansion:** Instagram, LinkedIn, X (Twitter), YouTube, Reddit — the OG metadata extraction approach works for any URL, so adding platforms is primarily a UX and testing effort.
- **Browser Extension:** Companion extension for desktop browsers — click the SWE icon while viewing any page to save it directly, bypassing the mobile-only share sheet.
- **User Accounts & Sync:** Authentication (Auth0 or Firebase) so the same repository syncs across devices.
- **Folder Templates:** Pre-built folder prompt templates: "Book Notes," "Recipe Collection," "Learning Path," "News Tracker" — users pick a template and the system prompt is pre-filled.
- **Export:** Export a folder's posts + AI output as PDF, Markdown, or Notion page.
- **Weekly Digest:** Email summary of newly saved wisdom per folder, generated by AI.
- **Collaborative Folders:** Share a folder with another user so both can add posts and see the same AI-organized output.
- **Native App:** Once PWA proves the concept, evaluate a React Native wrapper for deeper platform integration (push notifications, background sync).
