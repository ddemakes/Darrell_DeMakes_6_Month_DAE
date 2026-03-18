---
layout: default
title: Projects
---

## StreamOps Agent — LLM-powered assistant for streaming TPM workflows

This project is a MERN-stack prototype that ingests simulated streaming telemetry and connects to a retrieval-augmented LLM agent. The agent detects anomalies, drafts incident post-mortems, generates GitHub issues with acceptance criteria, and produces OpenAPI skeletons from plain-English requirements.

### Goals and Objectives

*   **Goal 1:** Implement a telemetry ingestion and KPI aggregation pipeline (startup time, p95 rebuffering, CDN errors) and surface these KPIs in a web dashboard.
*   **Goal 2:** Build an agent using LangChain that uses Retrieval-Augmented Generation (RAG) to draft incident post-mortems and convert plain-English requests into OpenAPI skeletons and GitHub issue payloads.
*   **Goal 3:** Deliver deployable artifacts, including a GitHub repo, a deployed demo, Postman/OpenAPI files, runbook templates, and a 5–7 minute demo video.

### Key Features

*   Telemetry ingestion API to collect and store simulated streaming events.
*   KPI aggregator job to compute and expose metrics like median, p95, and error rates.
*   React dashboard to visualize KPIs and surface anomaly alerts.
*   Agent endpoints to summarize anomalies, auto-draft post-mortems, generate OpenAPI skeletons, and create GitHub issue payloads.
*   RAG capability using Chroma and vector embeddings for contextual recommendations.

### Tech Stack

*   **Languages/Frameworks:** Node.js (Express), React (Vite)
*   **Datastore:** MongoDB Atlas
*   **RAG/Embeddings:** Chroma, OpenAI/Hugging Face embeddings
*   **Agent Orchestration:** LangChain.js
*   **LLM Provider:** OpenAI (GPT-4) or Hugging Face
*   **DevOps/Hosting:** GitHub, Vercel, Render, Docker

---

## Previous Python Project

Details about this project will be added soon.
