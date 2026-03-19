---
layout: default
title: Projects
---

## My Projects

### Project: StreamOps Agent — LLM-powered assistant for streaming TPM workflows
This project aims to build a MERN-stack prototype that ingests simulated streaming telemetry and connects to a retrieval-augmented LLM agent. This agent will detect anomalies, draft incident post-mortems, generate GitHub issues with acceptance criteria, and produce OpenAPI skeletons from plain-English requirements.

The tool demonstrates the operational, integration, and product-decision tasks of a Technical Product Manager for streaming platforms, providing interview-ready artifacts such as a deployed demo, runbooks, and API specifications.

#### Goals:
- Implement a telemetry ingestion + KPI aggregation pipeline.
- Build an agent (LangChain orchestration) using RAG (vector store) to draft incident post-mortems and convert plain-English requests into OpenAPI skeletons and GitHub issue payloads.
- Deliver deployable artifacts (GitHub repo, deployed demo, Postman/OpenAPI files, runbook templates, and a demo video) within a 12-week timeline.

#### Key Features:
- Telemetry ingestion API and KPI aggregator job.
- React dashboard for KPI visualization and anomaly alerts.
- Agent endpoints for summarizing anomalies, auto-drafting post-mortems, generating OpenAPI skeletons, and creating GitHub issue payloads.
- RAG capability for agent recommendations citing runbooks and logs.