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
    name: "Marinara",
    tagline: "Working roleplay-to-animation pipeline",
    description:
      "Marinara is a local-first AI roleplay and game platform. I implemented a MiniMax H3 / ComfyUI pipeline that turns roleplay narration into a storyboard, grounds characters with their sheets and personas, grounds locations with World Maps artwork, generates keyframes, and animates the resulting shots.",
    detail:
      "The H3 flow already works and has produced a multi-shot clip with synchronized motion and audio. The broader direction is an interactive anime / multiverse experience where characters, worlds, roleplay and game modes can be combined, choices shape the story, and later conversations can continue in the context of recent adventures.",
    status:
      "Working today: the animation pipeline. Still evolving: the larger interactive world around it. Seedance-like local action quality remains an experiment, not a claimed result.",
    href: "https://thetopham.github.io/views/projects.html#marinara",
    link: "roleplay to animation",
  },
  {
    name: "Manfred",
    tagline: "Wearable AI memory and context",
    description:
      "Manfred connects an Omi wearable, daily audio transcription, a personal LLM wiki, and E09 smart glasses. The glasses use ChatGPT Live for voice and can capture and upload images through the phone, giving the assistant both spoken and visual context.",
    detail:
      "The goal is a more natural wearable interface to the user’s normal ChatGPT experience rather than a blank API session: talk through the glasses, share what you’re seeing, and let useful daily context feed back into the personal knowledge system.",
    status:
      "Voice works today; photo capture and delivery are still being made more reliable. Personal recordings and private context are not published.",
    href: "https://github.com/thetopham/manfred",
    link: "meet Manfred",
  },
  {
    name: "Demerzel",
    tagline: "Personal AI operations and local compute",
    description:
      "Demerzel combines daily AI briefs, LLM wiki ingestion from my conversations, and management of the machines running local AI workloads. It keeps useful context organized while also handling the practical problem of which service should run on which GPU.",
    detail:
      "My home fleet includes an AMD Radeon AI PRO R9700 for larger local models and MiniMax H3 video work, a dual RTX 3060 system for local language models and coding/research experiments, and a single RTX 3060 system for ComfyUI image generation.",
    status:
      "Fleet monitoring and workload controls support the other projects; separate autonomous coding/research workers are still being refined. Private wiki data and machine-access details stay private.",
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
          Interactive stories · wearable AI · local compute
        </p>
        <h1 className="cursor-default whitespace-nowrap bg-white bg-clip-text text-5xl text-transparent duration-1000 text-edge-outline animate-title font-display sm:text-7xl md:text-9xl">
          thetopham
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-100 sm:text-2xl">
          Building AI that moves between stories, everyday life, and my own machines.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">
          I’m Matt, a computer science student at CU Boulder. My projects connect
          model-driven software to real interfaces: animated roleplay, wearable context,
          and a small local AI fleet.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="https://thetopham.github.io/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-green-400/50 bg-green-400/10 px-5 py-3 font-mono text-sm font-bold text-green-300 transition hover:bg-green-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">professional portfolio ↗</a>
          <a href="https://thetopham.github.io/views/resume.html" target="_blank" rel="noopener noreferrer" className={actionClass}>résumé ↗</a>
          <a href="https://www.linkedin.com/in/mrtopham" target="_blank" rel="noopener noreferrer" className={actionClass}>LinkedIn ↗</a>
        </div>

        <section aria-labelledby="current-work" className="mt-12 w-full text-left">
          <h2 id="current-work" className="mb-5 text-center font-mono text-sm uppercase tracking-widest text-green-300">Current projects</h2>
          <div className="grid gap-5 lg:grid-cols-3">
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
