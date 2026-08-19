# Matthew Topham

### AI Systems Architect · Full-Stack Software Engineer

I build **persistent agent runtimes, local AI infrastructure, multimodal pipelines, and reliable full-stack AI products**. I’m an active developer on **[Marinara Engine](https://github.com/Pasta-Devs/Marinara-Engine)**, creator of a heterogeneous local-AI orchestration platform called **Demerzel**, and a computer science student at the University of Colorado Boulder.

[![Portfolio](https://img.shields.io/badge/Portfolio-2563EB?style=for-the-badge&logo=githubpages&logoColor=white)](https://thetopham.github.io)
[![Resume](https://img.shields.io/badge/Resume-FACC15?style=for-the-badge&logo=readthedocs&logoColor=111827)](https://thetopham.github.io/views/resume.html)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mrtopham)
[![Email](https://img.shields.io/badge/Email-374151?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thetopham@gmail.com)

> Open to AI engineering, agent systems, local AI infrastructure, full-stack software, and interactive-media opportunities.

## 🍝 Marinara Engine

**Role:** AI Systems Architect & Open-Source Developer  
**Stack:** TypeScript · React · Node.js · pnpm · local AI · ComfyUI · MiniMax H3 · multimodal generation · persistent world state

Marinara is a local-first AI chat, roleplay, and game engine. I’ve authored **100+ merged pull requests** spanning client and server architecture, shared contracts, transactional persistence, downloadable capability APIs, prompt orchestration, multimodal media, responsive UI, regression testing, and documentation.

### Selected systems I’ve shipped

- **[Roleplay-to-animation pipeline](https://github.com/Pasta-Devs/Marinara-Engine/pull/4840)** — shipped an end-to-end workflow that turns completed Roleplay exchanges into storyboard episodes, grounds people and places with Character Sheets and World Maps artwork, generates exact T=0 keyframes, refines motion against the rendered frame, and drives local image-to-video generation through ComfyUI/MiniMax H3. [Character Sheets](https://github.com/Pasta-Devs/Marinara-Engine/pull/4019) · [location references](https://github.com/Pasta-Devs/Marinara-Engine/pull/4112) · [MiniMax H3 prompts](https://github.com/Pasta-Devs/Marinara-Agents/pull/365)
- **[Hierarchical world state & spatial context](https://github.com/Pasta-Devs/Marinara-Engine/pull/3565)** — built persistent nested locations, graph validation, atomic/idempotent movement, snapshots/checkpoints, bounded prompt projection, AI map drafting/expansion, lore grounding, and responsive authoring UI.
- **[Capability API 1.3 host services](https://github.com/Pasta-Devs/Marinara-Engine/pull/3693)** — exposed safe package access to model routing, resources, persistence, transactions, history/checkpoints, logging, and client contribution lifecycle without leaking private Engine internals.
- **[Storyboards for Roleplay](https://github.com/Pasta-Devs/Marinara-Engine/pull/4326)** — extended multimodal storytelling beyond Game Mode with episode cadence, inline still/video playback, provider-neutral motion planning, prompt libraries, and per-chat generation controls.
- **[Shared World Maps artwork](https://github.com/Pasta-Devs/Marinara-Engine/pull/4279)** — added account-owned visual references across chats with guarded deletion, transactional lifecycle locks, race-safe reference creation, and shared-world integration.
- **[Unified travel & recovery](https://github.com/Pasta-Devs/Marinara-Engine/pull/4623)** — implemented server-owned route validation, step-by-step/instant travel, one canonical movement mutation per accepted turn, command-ID recovery, retry preservation, and deterministic spatial regressions.

[View all Marinara pull requests →](https://github.com/Pasta-Devs/Marinara-Engine/pulls?q=is%3Apr+author%3Athetopham)

## 🤖 Demerzel · Local AI Fleet & Autonomous Compute

A persistent personal AI operations platform that converts accumulated conversational context and wiki-backed goals into **bounded, reviewable autonomous work** instead of waiting for one-off prompts.

- Built a **conversation → LLM wiki → hourly task selection → sandboxed artifact → validation → human review** loop using local Qwen.
- Implemented a **SQLite Compute Broker** with atomic priority leasing, capability routing, TTL/retry budgets, preemption for interactive work, explicit review gates, append-only events, artifact verification, and useful-work metrics.
- Operate a heterogeneous **Windows/Linux local AI fleet** across AMD Radeon AI PRO R9700 and NVIDIA GPUs for language-model serving, multimodal generation, and supporting services.
- Benchmarked **Qwen3.8-27B MTP speculative decoding** from 25.3 to 47.2 tok/s average (**1.86×**), with production probes above 50 tok/s on the R9700.
- Added **60+ regression tests**, CI-validated private implementation backups, and an isolated disaster-recovery drill proving clone → encrypted runtime restore → worker execution → artifact → review → approval with production state and external networking hidden.

The implementation repository is private because it intentionally excludes public release of personal runtime state, sessions, credentials, and operational configuration.

## Engineering focus

- **AI / agents:** LLM integrations, Qwen/local inference, agent/runtime architecture, task brokers, bounded autonomy, prompt orchestration, multimodal generation
- **AI infrastructure:** heterogeneous GPU serving, llama.cpp, speculative decoding, Windows/Linux orchestration, workload leases, preemption, fleet health and recovery
- **State & reliability:** transactions, idempotency, revision conflicts, race handling, snapshots/checkpoints, retries, disaster recovery
- **Full stack:** TypeScript, React, Node.js, REST, WebSockets, React Query, responsive/PWA interfaces
- **Extensibility:** versioned capability contracts, package lifecycle/readiness, host APIs, shared resource boundaries
- **Validation:** deterministic regressions, Playwright, lint/type/build gates, container validation, CI, restore drills

## Other projects

### [School of the Ancients](https://github.com/School-of-the-Ancients)
Voice-driven Socratic learning across web and VR, built with React, TypeScript, Supabase/Postgres, Node.js, real-time voice AI, and Unity XR prototypes.

### [AI Radar](https://github.com/thetopham/ai-radar)
Python and GitHub Actions pipeline that ingests RSS feeds, filters and summarizes AI research/news with LLMs, and publishes a concise daily brief.

### [NASA SUITS 2026](https://github.com/nasa-suits-challenge/suits-2026)
Contributed to an AI/VR prototype involving assistant workflows, rover-autonomy concepts, and AR overlays.

## Education

- **University of Colorado Boulder** — B.A. Computer Science, expected May 2027
- **Front Range Community College** — A.S. Computer Science, 2025
- **NVIDIA-Certified Associate** — AI Infrastructure & Operations, 2025
