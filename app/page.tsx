import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const primaryLinks = [
  {
    name: "Portfolio",
    href: "https://thetopham.github.io",
  },
  {
    name: "Resume",
    href: "https://thetopham.github.io/views/resume.html",
  },
  {
    name: "GitHub",
    href: "https://github.com/thetopham",
  },
];

const highlights = [
  {
    title: "School of the Ancients (VR + AI)",
    description:
      "Voice-driven Socratic mentor built in Unity, blending conversational AI with embodied learning in virtual reality.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    meta: "Agentic XR",
  },
  {
    title: "TradingView Bot",
    description:
      "Python automation that listens for TradingView alerts, executes decisions, and routes updates to the right trading tools.",
    href: "https://github.com/thetopham/tradingview-bot",
    meta: "AI + Finance",
  },
  {
    title: "CU Robotics",
    description:
      "Hands-on hardware experiments with embedded systems, controls, and autonomy as part of the CU Robotics community.",
    href: "https://github.com/CU-Robotics",
    meta: "Robotics",
  },
  {
    title: "AI Radar",
    description:
      "RSS-to-GPT pipeline that distills the daily AI firehose into actionable briefings for builders and teams.",
    href: "https://github.com/thetopham/ai-radar",
    meta: "Intelligence Ops",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <nav className="z-20 mt-12 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link rounded-lg bg-black/60 px-4 py-2 text-lg font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-1 hover:text-green-400"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden h-px w-screen animate-fade-left animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <main className="relative z-10 flex w-full flex-1 items-center justify-center px-6 pb-24 pt-16 sm:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
          <section className="flex-1 space-y-6 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
              Robotics • AR/VR • AI/Finance
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Matt Topham
            </h1>
            <p className="text-lg text-zinc-300 sm:text-xl">
              Building clean, useful tools — and learning in public.
            </p>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              🎓 CS @ CU Boulder • Agentic AI & Mixed-Reality Interfaces. Collaborating with teams like NASA SUITS to prototype the next wave of human-computer interfaces.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-green-400/40 bg-green-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-green-300 transition hover:-translate-y-1 hover:border-green-300 hover:bg-green-400/20 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </section>
          <section className="flex-1 space-y-6">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Highlights
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                A snapshot of the projects and communities I&apos;m building with right now.
              </p>
            </div>
            <div className="grid gap-4">
              {highlights.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-zinc-800 bg-black/40 p-5 transition duration-200 hover:-translate-y-1 hover:border-green-400/60 hover:bg-black/60"
                >
                  <article className="space-y-2 text-left">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-green-400 group-hover:text-green-300">
                      {item.meta}
                    </span>
                    <h2 className="text-xl font-semibold text-white sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-200">
                      {item.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="hidden h-px w-screen animate-fade-right animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
    </div>
  );
}
