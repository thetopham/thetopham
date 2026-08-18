import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "portfolio", href: "https://thetopham.github.io/", external: true },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const navClass =
  "nav-link text-sm sm:text-base font-bold text-white hover:text-green-400 transition-transform transform hover:scale-105 bg-black/60 px-3 sm:px-4 py-2 rounded-lg text-shadow border border-white/10 hover:border-green-400/40";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-5">
      <nav className="z-20 mb-12 mt-8 animate-fade-in sm:mb-16">
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

      <div className="hidden h-px w-screen animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-left" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <main className="z-10 flex max-w-5xl flex-col items-center text-center">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.32em] text-green-300/80 sm:text-sm">
          AI systems · persistent worlds · local compute
        </p>
        <h1 className="cursor-default whitespace-nowrap bg-white bg-clip-text text-5xl text-transparent duration-1000 text-edge-outline animate-title font-display sm:text-7xl md:text-9xl">
          thetopham
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
          Building systems that remember worlds—and infrastructure that can run them locally.
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
          AI runtimes, a multi-node local AI fleet, world-state infrastructure,
          roleplay-to-animation pipelines, and the occasional civilization-scale thought experiment.
        </p>
        <div className="mt-6 rounded-lg border border-green-400/20 bg-black/50 px-4 py-3 font-mono text-xs leading-6 text-green-300/70 sm:text-sm">
          local stack: SSH/Tailscale control · Qwen3.8 27B · MiniMax H3 · ComfyUI · shared GPU workload switching
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="https://thetopham.github.io/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-green-400/50 bg-green-400/10 px-5 py-3 font-mono text-sm font-bold text-green-300 transition hover:bg-green-400/20">professional portfolio ↗</a>
          <a href="https://thetopham.github.io/views/resume.html" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-zinc-600 bg-black/50 px-5 py-3 font-mono text-sm font-bold text-zinc-200 transition hover:border-zinc-400 hover:text-white">resume ↗</a>
        </div>
      </main>

      <div className="mt-12 hidden h-px w-screen animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-right" />
      <div className="z-10 mt-10 text-center font-mono text-xs uppercase tracking-[0.24em] text-zinc-600 animate-fade-in">
        Boulder, Colorado · 2026
      </div>
    </div>
  );
}
