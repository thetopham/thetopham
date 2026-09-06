# Matthew Topham

### Building AI for stories, everyday memory, and my own computers

I’m Matt, a computer science student at CU Boulder. I’m building tools that turn roleplay into animation, assist with projects and lifelogging, and keep my AI projects running on computers I manage at home.

[Portfolio](https://thetopham.github.io/) · [Résumé](https://thetopham.github.io/views/resume.html) · [LinkedIn](https://www.linkedin.com/in/mrtopham) · [Email](mailto:thetopham@gmail.com) · [Matrix mode](https://thetopham.com/)

## Marinara — Bring roleplays to life

**We already write scripts every day in roleplay. Why not turn them into animation and anime?**

I contribute to [Marinara Engine](https://github.com/Pasta-Devs/Marinara-Engine) and [Marinara Agents](https://github.com/Pasta-Devs/Marinara-Agents). I've created a MiniMax H3 workflow in ComfyUI, a visual tool for connecting AI image and video steps. The dream is an anime that grows and changes with the story we’re playing.

The workflow I built uses each character’s sheet as a visual reference, alongside their persona or written description. World Maps supplies pictures of the places in the story. Together, those references are meant to keep characters recognizable and backgrounds consistent—including locations that look like the fictional worlds fans know.

Roleplay narration becomes the script. AI breaks it into a storyboard—a scene-by-scene plan—and prepares keyframes, the still images that guide the animation. ComfyUI brings the character and location references, keyframes, and motion instructions together to generate the video.

<details>
<summary>Code, contributions, and technical details</summary>

My contributions include tools that remember where characters are, reuse character and location images, plan animated scenes, and recover when an operation fails.

- [Animation workflow](https://github.com/Pasta-Devs/Marinara-Engine/pull/4840)
- [World Maps and location tracking](https://github.com/Pasta-Devs/Marinara-Engine/pull/3565)
- [Tools for downloadable AI agents](https://github.com/Pasta-Devs/Marinara-Engine/pull/3693)

100 merged pull requests across Engine (68) and Agents (32), verified September 5, 2026. [Engine contributions](https://github.com/Pasta-Devs/Marinara-Engine/pulls?q=is%3Apr+is%3Amerged+author%3Athetopham) · [Agents contributions](https://github.com/Pasta-Devs/Marinara-Agents/pulls?q=is%3Apr+is%3Amerged+author%3Athetopham)

Built with TypeScript, React, Node.js, model integrations, ComfyUI, and automated tests. The current animation experiment builds on earlier contributions; it is not a finished one-click anime generator.

</details>

## [Manfred](https://github.com/thetopham/manfred) — AI ears and eyes for everyday life

Manfred is my wearable assistant project. An Omi wearable provides the audio for daily transcription and lifelogging: turning recordings into a searchable record of conversations for ingestion into the daily LLM wiki upload.

I’m also connecting E09 smart glasses to ChatGPT Live for voice conversations and photo uploads. The idea is to interface with gpt live voice through the users gpt account that contains all the users context built up over years instead of a blank api through the glasses audio and img to share in a more natural way.

**The glasses work for voice; photo capture and sharing are still being made more reliable.** This is a prototype, not a finished always-on assistant. 

<details>
<summary>Technical details</summary>

Android/Flutter companion, Bluetooth audio, Python transcription and search, phone-side upload buffering, and Tasker automation. The app can hold a captured image until it is ready to send. [Photo setup and limitations](https://github.com/thetopham/manfred/blob/main/docs/eyevue-photos.md)

</details>

## Demerzel — My local AI fleet manager 

Demerzel brings together daily AI briefs, a personal wiki built from my daily conversations, and management of the computers that run my AI projects.

The goal is simple: keep useful information from getting lost, give me a daily overview, and help manage which AI programs are running on which machine.

### The home AI fleet

“Fleet” just means the group of computers I use together:

| Machine | What I use it for |
| --- | --- |
| AMD Radeon AI PRO R9700 system | Larger local AI models and MiniMax H3 animation experiments, switching between jobs that share the graphics card. |
| Dual NVIDIA RTX 3060 system | Local language models and a separate machine for coding and research experiments. |
| Single NVIDIA RTX 3060 system | ComfyUI image-generation workflows. |

The management tools check what is running, start or stop supported AI programs, and prevent jobs from fighting over the same graphics card. That supports the other projects instead of making each one manage the hardware itself.

The separate automatic coding/research workers are a work in progress. Personal wiki content, recordings, and machine access details remain private.

## Other things I’m building

**[School of the Ancients](https://github.com/School-of-the-Ancients):** learn through conversations with AI historical mentors, on the web and in VR prototypes.

**[AI Radar](https://github.com/thetopham/ai-radar):** collect AI news and research and turn it into a shorter daily read.

**[NASA SUITS 2026 prototype](https://github.com/nasa-suits-challenge/suits-2026):** contributed to an experimental assistant and augmented-reality interface for a student project.

<details>
<summary>Skills and education</summary>

**Tools:** Python, TypeScript, JavaScript, SQL, React, Node.js, Flutter, Linux, Docker, GitHub Actions, Playwright, and ComfyUI.

- **University of Colorado Boulder** — B.A. Computer Science, expected May 2027
- **Front Range Community College** — A.S. Computer Science, 2025
- **NVIDIA-Certified Associate** — AI Infrastructure & Operations, August 2025

</details>

Open to software and AI development opportunities alongside finishing my degree.
