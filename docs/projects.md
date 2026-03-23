---
layout: default
title: Projects
---

# Capstone Project: The Sentinel Hybrid-SOC

## Executive Summary

The Sentinel Hybrid-SOC is a comprehensive security ecosystem designed to provide unified visibility and automated response across on-premise endpoints and cloud infrastructure. By integrating Wazuh (SIEM/EDR), AWS (Cloud), and Shuffle (SOAR), the project simulates a modern Security Operations Center (SOC) capable of detecting sophisticated multi-stage attacks and containing them without human intervention.

## Problem Statement

Modern organizations suffer from "Alert Fatigue" and fragmented security visibility. Most entry-level security setups focus solely on local networks, ignoring the risks of cloud credential theft or the need for rapid, automated containment. This project solves these gaps by providing a centralized "single pane of glass" for detection and a "low-latency" response mechanism.

## Technical Architecture

#### System Components

*   **SIEM/EDR (Wazuh)**: Centralized log analysis, file integrity monitoring, and vulnerability assessment.
*   **Telemetry (Sysmon)**: Deep-level Windows event logging (Process creation, Network connections).
*   **Cloud (AWS)**: Monitoring for unauthorized API calls and resource manipulation via CloudTrail.
*   **Orchestration (Shuffle)**: Automated workflow engine for alert enrichment and response.

#### High-Level Logic

1.  **Ingestion**: A Windows 10 agent forwards endpoint logs (including Sysmon events) to the Wazuh Manager. Simultaneously, AWS CloudTrail logs are ingested to monitor cloud activity.
2.  **Detection**: An alert is triggered within Wazuh if a rule with a severity level greater than 10 is matched.
3.  **Enrichment**: The high-severity alert is forwarded to a Shuffle workflow. The workflow automatically queries VirusTotal to check the reputation of any IP addresses or file hashes associated with the alert.
4.  **Action**: If the enrichment step confirms the indicator is malicious, Shuffle sends an automated command back to the Wazuh agent, instructing it to isolate the compromised host from the network.

## Project Objectives (SMART)

*   **Visibility**: Centralize logs from Windows 10 endpoints and AWS CloudTrail into a single Wazuh Manager instance.
*   **Detection**: Map all simulated attacks to the MITRE ATT&CK framework to ensure realistic threat detection.
*   **Automation**: Reduce Mean Time to Respond (MTTR) by automating the isolation of infected hosts in under 60 seconds using Shuffle SOAR.
*   **Reporting**: Generate professional-grade incident reports for every high-severity alert that a non-technical manager can understand.

## Implementation Roadmap

*   **Month 1 (Bones)**: Virtualization setup, Wazuh Manager installation, and Agent deployment.
*   **Month 2 (Nerves)**: Simulation of Malware (Endpoint) and Credential Theft (Cloud) using Atomic Red Team tests.
*   **Month 3 (Brain)**: Workflow automation in Shuffle and final Portfolio documentation.