# Matthew Topham

### AI Systems & Full-Stack Developer · CU Boulder CS

I’m a computer science student at the University of Colorado Boulder building **AI applications, wearable assistants, and local AI infrastructure**. My work connects the interfaces people use with the state, services, and compute behind them.

[Portfolio](https://thetopham.github.io/) · [Résumé](https://thetopham.github.io/views/resume.html) · [LinkedIn](https://www.linkedin.com/in/mrtopham) · [Email](mailto:thetopham@gmail.com) · [Matrix mode](https://thetopham.com/)

> Open to AI engineering, full-stack development, local AI infrastructure, and interactive-media opportunities compatible with completing my degree.

## Marinara Engine + Agents — Open-source AI applications

**TypeScript · React · Node.js · ComfyUI · local AI**

Contributed **100 merged pull requests across Marinara Engine and Marinara Agents**: 68 in Engine and 32 in Agents, verified September 5, 2026. The work spans persistent worlds, downloadable agent capabilities, multimodal generation, UI, and regression testing.

- **[Roleplay-to-animation](https://github.com/Pasta-Devs/Marinara-Engine/pull/4840):** connected storyboards, character/location references, generated keyframes, image-aware motion planning, and local image-to-video generation.
- **[World-state infrastructure](https://github.com/Pasta-Devs/Marinara-Engine/pull/3565):** nested locations, graph validation, snapshots/checkpoints, bounded prompt context, and recoverable movement.
- **[Capability host APIs](https://github.com/Pasta-Devs/Marinara-Engine/pull/3693):** versioned interfaces for model routing, resources, persistence, transactions, and package-owned client features.
- **[Storyboards](https://github.com/Pasta-Devs/Marinara-Engine/pull/4326), [shared artwork](https://github.com/Pasta-Devs/Marinara-Engine/pull/4279), and [travel recovery](https://github.com/Pasta-Devs/Marinara-Engine/pull/4623):** media workflows backed by persistent references, validation, and retry handling.

[Engine contributions](https://github.com/Pasta-Devs/Marinara-Engine/pulls?q=is%3Apr+is%3Amerged+author%3Athetopham) · [Agents contributions](https://github.com/Pasta-Devs/Marinara-Agents/pulls?q=is%3Apr+is%3Amerged+author%3Athetopham)

## [Manfred](https://github.com/thetopham/manfred) — Wearable AI assistant prototype

**Flutter / Android · Bluetooth LE · Python · transcription**

Building a wearable-to-phone-to-service pipeline for audio and visual context, rather than another standalone chat window.

- Android/Flutter companion with a BLE audio bridge, durable upload buffering, and capture controls.
- Python services for audio ingestion, voice activity detection, transcription, searchable archives, retention/deletion, and image-centered episodes.
- Explicit export contracts and independent validation separate wearable services from knowledge and compute management.

**Status:** Development prototype. EyeVue/E09 photo capture is experimental; source validation is not a claim of reliable end-to-end hardware operation or instant high-resolution Bluetooth transfer.

## Demerzel — Local AI infrastructure and task orchestration

**Python · durable queues · worker lifecycle · local inference**

Developed a system for turning selected work into bounded worker runs and reviewable artifacts. The engineering focus is task queues, sandboxed execution, heartbeats, stall handling, preemption, review bundles, and an operator-facing control center.

Knowledge management, task execution, and fleet control are separate components connected through validated interfaces. This keeps hardware control and personal context outside the worker implementation.

**Status:** Development project. Worker dispatch is paused following the architectural separation, pending runtime acceptance. Implementation and personal operational data remain private; public descriptions are architecture summaries, not live service claims.

## Other work

- **[School of the Ancients](https://github.com/School-of-the-Ancients):** voice-driven Socratic learning across web and VR, using React/TypeScript, Node.js, Supabase/Postgres, and Unity XR prototypes.
- **[AI Radar](https://github.com/thetopham/ai-radar):** Python and GitHub Actions pipeline for RSS ingestion, LLM-assisted filtering/summarization, and daily AI briefs.
- **[NASA SUITS 2026 prototype](https://github.com/nasa-suits-challenge/suits-2026):** contributions to AI/VR assistant workflows, rover-autonomy concepts, and AR overlays.

## Engineering focus

**Applications:** TypeScript, React, Node.js, Python, SQL, REST, WebSockets, Flutter.  
**AI systems:** model integration, local inference, multimodal orchestration, persistent state, wearable data pipelines.  
**Reliability:** transactions, idempotency, retries, validation, regression tests, Playwright, Linux, Docker, GitHub Actions.

## Education

- **University of Colorado Boulder** — B.A. Computer Science, expected May 2027
- **Front Range Community College** — A.S. Computer Science, 2025
- **NVIDIA-Certified Associate** — AI Infrastructure & Operations, August 2025
