import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const highlights = [
  {
    title: "NASA SUITS 2026 — TUXEDO AI/VR System",
    description:
      "Proposal lead designing an offline AI copilot, rover autonomy, and AR safety overlays for astronauts during EVA missions.",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
    meta: "AI/VR Systems Architect • NASA SUITS",
  },
  {
    title: "School of the Ancients (VR + AI)",
    description:
      "Building a voice-driven Socratic mentor platform that blends philosophy, dialogue, and spatial learning inside immersive XR worlds.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    meta: "Meta Horizon • TypeScript • XR Interaction",
  },
  {
    title: "TradingView Bot",
    description:
      "Autonomous market assistant that reads TradingView charts, scores risk, and routes alerts through an AI decision pipeline for futures traders.",
    href: "https://github.com/thetopham/tradingview-bot",
    meta: "Python • Multi-agent reasoning • Supabase",
  },
];

const focusAreas = [
  "Agentic AI systems that plan, reason, and build autonomously",
  "Mixed-reality interfaces for robotics, space, and education",
  "Financial AI with real-time market cognition",
  "Pipelines that connect vision, voice, and reasoning",
];

const communityWork = [
  {
    title: "CU Robotics",
    description:
      "Authored onboarding and technical guides across RoboMaster repos to help the team ship autonomous robotics faster.",
    href: "https://github.com/CU-Robotics",
  },
  {
    title: "AI Radar",
    description:
      "RSS → GPT daily brief that filters, summarizes, and ships the most important AI research signals.",
    href: "https://github.com/thetopham/ai-radar",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <nav className="flex justify-center pt-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 rounded-full border border-zinc-800 bg-black/60 px-6 py-3 text-sm uppercase tracking-widest text-zinc-300 shadow-lg backdrop-blur">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-green-400"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-24 sm:pt-32">
        <section className="space-y-10">
          <div className="space-y-6 text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300/80">
              Matt Topham
            </p>
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl font-display">
              Robotics, AI/Finance, and AR/VR builder crafting useful tools.
            </h1>
            <p className="text-lg text-zinc-300 sm:w-4/5">
              I design agentic AI systems, mixed-reality interfaces, and resilient automation pipelines — shipping clean, human-centered tools while learning in public.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <Link
              href="https://thetopham.github.io/views/resume.html"
              className="rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
            >
              View Resume
            </Link>
            <Link
              href="https://github.com/thetopham"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              Say hello
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-black/50 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Currently focusing on</h2>
            <ul className="mt-6 space-y-4 text-sm text-zinc-300">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black/50 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Community & teams</h2>
            <ul className="mt-6 space-y-4 text-sm text-zinc-300">
              {communityWork.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group block rounded-lg border border-transparent p-3 transition hover:border-zinc-700 hover:bg-zinc-900/60"
                  >
                    <p className="text-base font-medium text-white group-hover:text-green-300">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-400 group-hover:text-zinc-200">{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Highlighted builds</h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-green-300 transition hover:text-green-200"
            >
              Explore projects →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-zinc-800 bg-black/50 p-6 text-left transition hover:border-green-400/50 hover:bg-black/70"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-green-300/80">{item.meta}</p>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-green-300">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-400 group-hover:text-zinc-200">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-black/50 p-8 text-sm text-zinc-400 backdrop-blur">
          <p className="text-base text-zinc-200">
            “Understanding people. Building things they want. Getting those things in front of them.”
          </p>
          <p className="mt-4">
            That mantra guides how I approach every prototype — from aerospace AR copilots to AI-driven trading systems. If you’re exploring similar problems, let’s collaborate.
          </p>
        </section>
      </main>
    </div>
  );
}
