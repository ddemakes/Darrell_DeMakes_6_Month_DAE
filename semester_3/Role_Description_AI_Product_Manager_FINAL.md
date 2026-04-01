# Role Description — AI Product Manager

---

## 1. Job Title and Summary

**Job Title:** AI Product Manager

**Summary:**
The AI Product Manager on the Social Wisdom Extractor project is responsible for defining, planning, and driving the delivery of a Progressive Web App that integrates social media capture, AI-powered organization, and a frictionless share sheet experience. This role bridges product vision and technical execution — translating a nuanced user experience idea (one-tap post capture → AI-organized personal knowledge library) into a scoped, sequenced, buildable plan. The AI PM must understand enough about PWA architecture, the Web Share Target API, Open Graph metadata, and large language model prompting to make good decisions about scope, sequence, and quality — without necessarily writing all the code themselves. This role operates at the intersection of product intuition, AI literacy, and structured project management rigor.

---

## 2. Responsibilities

- **Own the Product Vision:** Define the core user journey — from seeing a Facebook post to having it AI-organized in the right folder — and ensure every sprint decision serves that journey.
- **Maintain the Roadmap:** Prioritize features ruthlessly. Protect the MVP (share → capture → folder → AI) from scope creep. Defer multi-platform expansion explicitly to post-MVP.
- **Write Specifications:** Author task descriptions, acceptance criteria, and sub-item checklists detailed enough that a developer (or the PM themselves) can execute without ambiguity.
- **PWA Product Decisions:** Understand and make decisions about PWA-specific requirements: why HTTPS is mandatory, how the Web Share Target API manifest entry works, what makes a PWA eligible for the OS share sheet vs. just a browser bookmark.
- **AI Feature Design:** Design how the AI layer works from a product perspective — what the folder system prompt means to the user, how to design the prompt wrapper that surrounds it, how smart folder suggestion should behave, when AI should auto-run vs. require manual trigger.
- **Prompt Engineering as Product Design:** Write, test, and iterate on folder system prompt examples and the backend wrapper prompt. Treat prompts as product artifacts — they define the AI feature's behavior as much as code does.
- **Rubric Integration:** Ensure all 17 JavaScript learning rubric items are integrated naturally into the build plan, not bolted on. Maintain a rubric proof document mapping each item to its location in the codebase.
- **Risk Management:** Identify platform-specific risks early (Facebook OG blocking, iOS Safari share sheet limitations) and build mitigation into the plan before they become blockers.
- **Sprint Demos:** Produce or direct a working demo at the end of each major sprint milestone. Document what was built, what was deferred, and why.
- **Documentation:** Maintain project design doc, README, API docs, architecture diagram, and final rubric proof document as living artifacts throughout the project.

---

## 3. Required Skills and Tools

**Product & Strategy:**
- User journey mapping and flow definition
- MVP scoping and scope-creep defense
- Sprint planning with time-boxed 2-hour sessions
- Acceptance criteria and rubric integration
- Risk identification for platform-dependent features

**PWA & Technical Literacy:**
- Understanding of Progressive Web App architecture (manifest, service worker, HTTPS requirement)
- Familiarity with Web Share Target API and share sheet eligibility criteria
- Understanding of Open Graph protocol and metadata extraction
- Comfort with REST API design (routes, request/response shapes, status codes)
- Ability to read and review JavaScript, HTML, and CSS
- Basic understanding of MongoDB document schema design
- Familiarity with environment variables and secrets management (.env)

**AI Literacy:**
- Ability to write, test, and evaluate LLM system prompts
- Understanding of prompt engineering patterns (instruction, context, format specification)
- Familiarity with OpenAI and Anthropic Claude APIs
- Ability to evaluate AI output quality against user intent

**Tools:**

| Category | Tools |
|---|---|
| Project Management | Monday.com |
| Version Control | GitHub |
| Development Environment | VS Code, Terminal |
| API Testing | Postman |
| AI Platforms | Claude.ai, OpenAI Playground |
| PWA Testing | Chrome DevTools (Application tab, Lighthouse) |
| Device Testing | Android Chrome, iOS Safari |
| Documentation | Markdown, Google Docs |
| Diagramming | Excalidraw |

**Programming:**
- Vanilla JavaScript (sufficient to implement all 17 rubric items)
- HTML5 (semantic structure, Web App Manifest, link/meta tags)
- CSS3 (mobile-first layout, flexbox, grid)
- Basic Node.js/Express (routes, middleware, environment variables)

---

## 4. Sample Deliverables

1. **Project Design Document** — Full definition of the Social Wisdom Extractor PWA: problem statement, user flow, feature list, tech stack, architecture description, 12-week milestone plan, risk register, evaluation criteria, future roadmap.
2. **Monday.com Sprint Plan** — 43 sessions across 12 weeks, each with a 2-hour task and one or more sub-items. JS rubric items embedded as sub-items in Weeks 1–4. Quality checks and verification steps as sub-items in Weeks 5–12.
3. **Architecture Diagram** — High-level visual showing: Facebook → Share Sheet → PWA Frontend → Express Backend → MongoDB Atlas + AI API. Labeled with technology at each layer.
4. **Folder System Prompt Design** — Document defining the UX of the system prompt field: what it is, example prompts (simple to complex), the backend wrapper that surrounds it, and how the AI output is rendered per prompt type.
5. **Rubric Proof Document** — Table mapping all 17 JS rubric items to file name, line number, and code snippet in the final codebase.
6. **API Documentation** — Reference for every backend endpoint: method, path, request body schema, response schema, example request, example response.
7. **Lighthouse Audit Report** — Screenshot of final Lighthouse PWA audit on production URL showing PWA, Performance, and Accessibility scores.
8. **Demo Video** — 5–7 minute recorded walkthrough: install PWA on phone → share Facebook post → pick folder → view AI output → search → manage folders.

---

## 5. Ideal Work Environment

- **Rhythm:** Consistent Mon–Thu 2-hour focused sessions. Steady progress over sprint-and-crash. Each session has a defined deliverable before it starts.
- **Mobile-First Mindset:** The primary user experience is on a phone. Every product decision is evaluated against the question: "Is this easy to do with one thumb while scrolling Facebook?"
- **Learning by Building:** Concepts are learned through implementation. The JavaScript rubric items are not studied in isolation — they are woven into the PWA as it is built, which means the learning is contextual and memorable.
- **Tool-Augmented:** AI assistants (Claude, ChatGPT) are used as accelerators for drafting, research, prompt testing, and code review — not as replacements for judgment or understanding.
- **Documentation as Habit:** Documenting decisions, risks, and progress is not a final-week activity. It happens continuously — README updates, commit messages, and design doc changelogs are part of every sprint.
- **Tolerance for Platform Ambiguity:** PWA share sheet behavior varies by device, OS, and browser version. The AI PM is comfortable saying "we need to test this on a real phone" rather than assuming emulation is sufficient.

---

## 6. Growth Style and Rigor

**Learning Approach:**
This PM learns best by building something real with a real user flow. Abstract concepts (service workers, Web Share Target API, OG metadata) become concrete when they are implemented and tested on an actual phone. The project is chosen specifically because it is ambitious enough to be interesting but scoped tightly enough (Facebook first, one share flow, one AI feature) to be completable.

**Rigor Standards:**
- The share flow must work on a real device before it is considered done — emulator testing is insufficient for PWA share sheet validation.
- Every AI feature has a defined prompt, a defined output format, and a defined quality bar before it is shipped.
- All 17 rubric items are documented with evidence (file + line) before the Week 4 demo — not retroactively at submission.
- No secrets are ever committed to GitHub. This is treated as a hard failure, not a warning.
- The Lighthouse PWA audit is run at the end of every sprint, not just at the end of the project.

**Growth Trajectory:**
From product manager learning to code → technically fluent PM who can specify, build, and ship a full-stack PWA with AI integration → capable of independently designing AI-powered mobile-first products and evaluating their technical feasibility. The near-term milestone is a portfolio project that demonstrates real product thinking (user flow, platform constraints, AI design) alongside real technical execution (PWA, Node, MongoDB, LLM APIs).

**Self-Assessment Cadence:**
- **Each session:** Did I ship the sub-items I planned? What did I learn?
- **Each week:** Does the app work end-to-end as far as it's built? Is the rubric progressing?
- **Week 4:** Can I demonstrate all 17 rubric items live in the codebase?
- **Week 10:** Does the share flow work on my phone, on production?
- **Week 12:** Can I explain every technical and product decision I made, and why?
