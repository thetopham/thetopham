# Matthew Topham

### AI systems for interactive stories, wearable context, and local compute

I’m Matt, a computer science student at CU Boulder. I build end-to-end AI projects that connect models to real interfaces: interactive storytelling, wearable lifelogging, and a small local AI fleet that runs my own models and media workflows.

[Portfolio](https://thetopham.github.io/) · [Résumé](https://thetopham.github.io/views/resume.html) · [LinkedIn](https://www.linkedin.com/in/mrtopham) · [Email](mailto:thetopham@gmail.com) · [Matrix mode](https://thetopham.com/)

## Marinara — From roleplay to animation

I’m an active contributor to [Marinara Engine](https://github.com/Pasta-Devs/Marinara-Engine) and [Marinara Agents](https://github.com/Pasta-Devs/Marinara-Agents), a local-first AI roleplay and game platform.

My recent work connects the story we write during roleplay to a **working MiniMax H3 animation pipeline**. Roleplay narration becomes a storyboard; character sheets and personas ground who is in the scene; World Maps artwork grounds where it happens; generated keyframes establish each shot; and ComfyUI sends the grounded frame and motion plan into MiniMax H3 for animation.

The H3 flow is implemented and has produced a successful multi-shot clip with synchronized motion and audio. The packaged Storyboard prompts reuse that tested workflow. [Animation pipeline](https://github.com/Pasta-Devs/Marinara-Engine/pull/4840) · [MiniMax H3 prompts](https://github.com/Pasta-Devs/Marinara-Agents/pull/365)

### Why I’m building it

Roleplayers already create scripts every day through dialogue and narration. The next step is to let those stories become illustrations and animated scenes without losing the characters and locations that make the world recognizable.

- **Character continuity:** character-sheet artwork and persona data provide visual and written references for each character.
- **Location continuity:** World Maps artwork gives scenes a persistent visual reference for recurring places, including fandom settings.
- **Story to animation:** narration becomes a scene plan, keyframes, motion instructions, and then an animated clip.

The broader direction is an **interactive anime / multiverse experience**: combine characters, worlds, roleplay and game modes, make choices, and continue talking with characters who can respond in the context of recent adventures. That larger experience is the direction of the project; the working H3 animation pipeline is one piece already in place.

I’m also interested in how far local video models can go on consumer/pro hardware. Reaching Seedance-like action quality locally is an experiment and goal, not a claim of demonstrated parity.

<details>
<summary>More engineering details</summary>

My Marinara work spans persistent world state, reusable character/location references, storyboard orchestration, package APIs, recovery paths, UI, and automated validation.

- [World Maps and spatial state](https://github.com/Pasta-Devs/Marinara-Engine/pull/3565)
- [Capability APIs for downloadable agents](https://github.com/Pasta-Devs/Marinara-Engine/pull/3693)
- [Roleplay storyboards](https://github.com/Pasta-Devs/Marinara-Engine/pull/4326)
- [Shared World Maps artwork](https://github.com/Pasta-Devs/Marinara-Engine/pull/4279)
- [Travel and recovery](https://github.com/Pasta-Devs/Marinara-Engine/pull/4623)

100 merged pull requests across Engine (68) and Agents (32), verified September 5, 2026. [Engine contributions](https://github.com/Pasta-Devs/Marinara-Engine/pulls?q=is%3Apr+is%3Amerged+author%3Athetopham) · [Agents contributions](https://github.com/Pasta-Devs/Marinara-Agents/pulls?q=is%3Apr+is%3Amerged+author%3Athetopham)

**Stack:** TypeScript, React, Node.js, model integrations, ComfyUI, local inference, Playwright, and automated regression tests.

</details>

## [Manfred](https://github.com/thetopham/manfred) — Wearable AI memory and context

Manfred is my wearable AI project. An Omi wearable captures daily audio for transcription and lifelogging; those transcripts can feed the personal LLM wiki I use to organize conversations, project notes, and recurring context.

I’m also connecting E09 smart glasses to ChatGPT Live for voice conversations and image uploads. The goal is to use the normal ChatGPT account experience—rather than a blank, stateless API session—so a wearable interface can benefit from context already available there while letting the user speak naturally and share what they are seeing.

Voice through the glasses works. Photo capture and delivery have been tested and are still being made more reliable. This is a prototype, not a finished always-on assistant.

<details>
<summary>Technical details</summary>

Android/Flutter companion, Bluetooth audio, Python transcription/search services, durable phone-side upload buffering, and Tasker automation. [Photo setup and limitations](https://github.com/thetopham/manfred/blob/main/docs/eyevue-photos.md)

</details>

## Demerzel — Personal AI operations and fleet management

Demerzel is the layer behind my other projects: **daily AI briefs, LLM wiki ingestion from daily conversations, and management of the machines running local AI workloads**.

The wiki keeps useful context from disappearing into old chats. Daily briefs surface what changed and what needs attention. Fleet tools track what is running, start and stop supported services, and keep workloads from competing for the same GPU.

### Home AI fleet

| Machine | Primary role |
| --- | --- |
| **AMD Radeon AI PRO R9700** | Larger local language models and MiniMax H3 video experiments; workloads can be switched when they share the GPU. |
| **Dual NVIDIA RTX 3060** | Local language-model serving plus coding/research experiments. |
| **Single NVIDIA RTX 3060** | ComfyUI image-generation workflows. |

The point is not just owning several GPUs; it is treating them as a small managed compute pool that other projects can use without each project reinventing hardware control.

Separate autonomous coding/research workers are still being refined. Personal wiki content, recordings, credentials, and machine-access details remain private.

## Other projects

**[School of the Ancients](https://github.com/School-of-the-Ancients):** conversational learning with AI historical mentors across web and VR prototypes.

**[AI Radar](https://github.com/thetopham/ai-radar):** automated AI news/research collection and daily briefing.

**[NASA SUITS 2026 prototype](https://github.com/nasa-suits-challenge/suits-2026):** contributed to an experimental AI/VR assistant, rover-autonomy concepts, and augmented-reality interfaces for a student project.

<details>
<summary>Skills and education</summary>

**Software:** Python, TypeScript, JavaScript, SQL, React, Node.js, Flutter, REST/WebSockets.  
**AI / infrastructure:** local inference, ComfyUI, Linux, Docker, GitHub Actions, Playwright, GPU workload management.

- **University of Colorado Boulder** — B.A. Computer Science, expected May 2027
- **Front Range Community College** — A.S. Computer Science, 2025
- **NVIDIA-Certified Associate** — AI Infrastructure & Operations, August 2025

</details>

Open to software and AI development opportunities alongside finishing my degree.
