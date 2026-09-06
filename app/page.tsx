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
    status: "Open-source contributions",
    description: "Persistent AI worlds, agent capabilities, and reference-grounded storyboards that connect roleplay to animation.",
    href: "https://github.com/Pasta-Devs/Marinara-Engine",
    link: "explore Marinara",
  },
  {
    name: "Manfred",
    status: "Wearable assistant prototype",
    description: "An Android/Flutter companion and Python services for wearable audio, transcription, and experimental smart-glasses image capture.",
    href: "https://github.com/thetopham/manfred",
    link: "explore Manfred",
  },
  {
    name: "Demerzel",
    status: "Local AI infrastructure · in development",
    description: "Bounded worker execution, durable task queues, and reviewable artifacts. Worker dispatch is paused pending post-refactor validation.",
    href: "https://thetopham.github.io/views/projects.html#demerzel",
    link: "read the architecture overview",
  },
];

const navClass =
  "nav-link text-sm sm:text-base font-bold text-white hover:text-green-400 transition-transform transform hover:scale-105 bg-black/60 px-3 sm:px-4 py-2 rounded-lg text-shadow border border-white/10 hover:border-green-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-5 pb-8">
      <nav aria-label="Primary" className="z-20 mb-12 mt-8 animate-fade-in sm:mb-16">
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {navigation.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={navClass}>
                {item.name} ↗
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={navClass}>{item.name}</Link>
            ),
          )}
        </ul>
      </nav>

      <div aria-hidden="true" className="hidden h-px w-full animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-left" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <main className="z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-green-300 sm:text-sm">
          AI applications · wearable assistants · local AI infrastructure
        </p>
        <h1 className="cursor-default whitespace-nowrap bg-white bg-clip-text text-5xl text-transparent duration-1000 text-edge-outline animate-title font-display sm:text-7xl md:text-9xl">
          thetopham
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">
          Building AI for imagined worlds—and the world outside the screen.
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base">
          I’m Matt, a computer science student at CU Boulder. I build AI applications,
          wearable assistants, and local AI infrastructure—with room for the occasional
          civilization-scale thought experiment.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="https://thetopham.github.io/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-green-400/50 bg-green-400/10 px-5 py-3 font-mono text-sm font-bold text-green-300 transition hover:bg-green-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">professional portfolio ↗</a>
          <a href="https://thetopham.github.io/views/resume.html" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-600 bg-black/50 px-5 py-3 font-mono text-sm font-bold text-zinc-200 transition hover:border-zinc-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">resume ↗</a>
          <a href="https://www.linkedin.com/in/mrtopham" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-600 bg-black/50 px-5 py-3 font-mono text-sm font-bold text-zinc-200 transition hover:border-zinc-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">LinkedIn ↗</a>
        </div>

        <section aria-labelledby="current-work" className="mt-12 w-full text-left">
          <h2 id="current-work" className="mb-4 text-center font-mono text-sm uppercase tracking-widest text-green-300">What I’m building</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="flex flex-col rounded-xl border border-green-400/20 bg-black/70 p-5">
                <p className="font-mono text-xs leading-5 text-green-300">{project.status}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{project.name}</h3>
                <p className="mb-5 mt-3 text-sm leading-6 text-zinc-300">{project.description}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-auto text-sm font-semibold text-green-300 underline decoration-green-400/40 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">{project.link} ↗</a>
              </article>
            ))}
          </div>
          <p className="mt-4 text-center font-mono text-xs leading-5 text-zinc-400">Manfred image capture remains experimental. Private runtime data and operational configuration are not published here.</p>
        </section>
      </main>

      <div aria-hidden="true" className="mt-12 hidden h-px w-full animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-right" />
      <footer className="z-10 mt-8 text-center font-mono text-xs uppercase tracking-[0.24em] text-zinc-400 animate-fade-in">Boulder, Colorado · 2026</footer>
    </div>
  );
}
