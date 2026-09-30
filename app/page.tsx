import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "portfolio", href: "https://thetopham.github.io/", external: true },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const projects = [
  {
    name: "Matrix Loading Operator",
    tagline: "Latest work · v1.1 released",
    description:
      "A persistent Three.js/WebXR world you can create and edit with AI, then enter from desktop, VR, or AR. Operator connects voice and text requests to Codex, procedural creation, and Blender asset workflows.",
    detail:
      "v1.1 adds active-turn steering, precise placement points, and room-relative AR layout controls. Save a world and return to it; a separate PC-hosted AI Citizens prototype explores routines and bounded interactions.",
    status:
      "Released September 29, 2026. Local services require setup. v1.2 work is in progress.",
    href: "https://thetopham.github.io/views/projects.html#matrix",
    link: "project and release evidence",
  },
  {
    name: "Manfred",
    tagline: "Wearable AI · Prototype",
    description:
      "An Android/Flutter companion and Python services for wearable audio, transcription, search, and visual context. Omi audio and E09 smart glasses connect daily context to a personal knowledge system.",
    detail:
      "The glasses support voice conversations through ChatGPT Live. Experimental photo capture and phone-side upload buffering connect what the wearer sees to the conversation.",
    status:
      "Voice works; photo delivery and confirmation still need reliability work. This remains a prototype.",
    href: "https://github.com/thetopham/manfred",
    link: "source and current limits",
  },
  {
    name: "Marinara",
    tagline: "Open-source contributions · Interactive storytelling",
    description:
      "A local-first AI roleplay and game platform. I contributed persistent world state, reusable character and location references, agent capability APIs, and a roleplay-to-animation workflow.",
    detail:
      "The MiniMax H3 / ComfyUI flow turns narration into storyboards and keyframes, then uses those frames to ground each shot’s motion. The tested prompt chain is packaged as reusable Storyboard choices.",
    status:
      "The flow produced a multi-shot clip with synchronized motion and audio. The broader interactive-anime experience is still a longer-term direction.",
    href: "https://thetopham.github.io/views/projects.html#marinara",
    link: "roleplay to animation",
  },
  {
    name: "Demerzel",
    tagline: "Personal AI operations · Local compute",
    description:
      "Daily AI briefs, conversation-to-wiki ingestion, and tools for the computers running my local AI workloads. It connects useful context with the practical work of running models and media pipelines.",
    detail:
      "The home fleet includes an AMD Radeon AI PRO R9700, a dual RTX 3060 system, and a single RTX 3060 system. Service health checks and workload controls help avoid GPU contention.",
    status:
      "Separate autonomous coding and research workers are still being refined.",
    href: "https://thetopham.github.io/views/projects.html#demerzel",
    link: "AI operations and fleet",
  },
];

const navClass =
  "nav-link text-sm sm:text-base font-bold text-white hover:text-green-400 transition-transform transform hover:scale-105 bg-black/60 px-3 sm:px-4 py-2 rounded-lg text-shadow border border-white/10 hover:border-green-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300";
const actionClass =
  "rounded-lg border border-zinc-600 bg-black/50 px-5 py-3 font-mono text-sm font-bold text-zinc-200 transition hover:border-zinc-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-5 pb-8">
      <nav aria-label="Primary" className="z-20 mb-12 mt-8 animate-fade-in sm:mb-16">
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={navClass}>
                  {item.name} ↗
                </a>
              ) : (
                <Link href={item.href} className={navClass}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div aria-hidden="true" className="hidden h-px w-full animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-left" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <main className="z-10 flex w-full max-w-6xl flex-col items-center text-center">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-green-300 sm:text-sm">
          Spatial creation · wearable AI · interactive worlds
        </p>
        <h1 className="cursor-default whitespace-nowrap bg-white bg-clip-text text-5xl text-transparent duration-1000 text-edge-outline animate-title font-display sm:text-7xl md:text-9xl">
          thetopham
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-100 sm:text-2xl">
          AI tools for worlds you can step into.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">
          I’m Matt, a computer science student at CU Boulder. My latest project is
          Matrix: describe what you want to create, build it with AI, and explore
          the same persistent world in a browser, VR, or AR.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="https://www.youtube.com/watch?v=RJhQpiS-w2o" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-green-400/50 bg-green-400/10 px-5 py-3 font-mono text-sm font-bold text-green-300 transition hover:bg-green-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">watch the Matrix demo ↗</a>
          <a href="https://github.com/School-of-the-Ancients/matrix-loading-operator/releases/tag/v1.1.0" target="_blank" rel="noopener noreferrer" className={actionClass}>v1.1 release ↗</a>
          <a href="https://thetopham.github.io/views/resume.html" target="_blank" rel="noopener noreferrer" className={actionClass}>résumé ↗</a>
          <a href="https://www.linkedin.com/in/mrtopham" target="_blank" rel="noopener noreferrer" className={actionClass}>LinkedIn ↗</a>
        </div>

        <section aria-labelledby="current-work" className="mt-12 w-full text-left">
          <h2 id="current-work" className="mb-5 text-center font-mono text-sm uppercase tracking-widest text-green-300">Selected projects</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="flex min-w-0 flex-col rounded-xl border border-green-400/20 bg-black/70 p-6">
                <p className="font-mono text-xs leading-5 text-green-300">{project.tagline}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-200">{project.description}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{project.detail}</p>
                <p className="mb-6 mt-4 text-sm leading-6 text-zinc-400">{project.status}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-auto text-sm font-semibold text-green-300 underline decoration-green-400/40 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">{project.link} ↗</a>
              </article>
            ))}
          </div>
        </section>
        <p className="mt-10 max-w-2xl text-sm leading-6 text-zinc-300">
          The projects are practical; the questions behind them are bigger. What happens
          when AI agents and machines become participants in the same economy as people?
        </p>
        <Link href="/ai#machine-economy" className="mt-3 text-sm font-semibold text-green-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">thoughts on AI and the machine economy →</Link>
      </main>

      <div aria-hidden="true" className="mt-12 hidden h-px w-full animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-right" />
      <footer className="z-10 mt-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 animate-fade-in">Boulder, Colorado · 2026</footer>
    </div>
  );
}
