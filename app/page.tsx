import Link from "next/link";
import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Rise of Man", href: "/rise-of-man" },
  { name: "AI", href: "/ai" },
  { name: "Contact", href: "/contact" },
];

const highlights = [
  {
    title: "NASA SUITS 2026 — TUXEDO AI/VR System",
    description:
      "Proposal lead and systems architect for an offline EVA copilot that blends rover autonomy, XR overlays, and safety tooling.",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
    meta: "AI • Robotics • AR/VR",
  },
  {
    title: "School of the Ancients (Mixed-Reality Mentor)",
    description:
      "Building a spatial academy where learners debate with Socrates, Galileo, and other historical mentors through voice-driven AI.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    meta: "XR • TypeScript • Agentic Audio",
  },
  {
    title: "TradingView Bot",
    description:
      "Python, Supabase, and multi-model LLM orchestration to analyze futures markets and surface trade-ready insights in real time.",
    href: "https://github.com/thetopham/tradingview-bot",
    meta: "Python • LLM Ops • Automation",
  },
];

const focusAreas = [
  "Agentic AI systems that can reason, plan, and build autonomously",
  "Mixed-reality interfaces for robotics, space exploration, and education",
  "Financial AI with real-time market cognition and human-in-the-loop guardrails",
  "Pipelines that weave together vision, voice, and embodied interaction",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={120} />

      <div className="relative mx-auto flex flex-col items-center space-y-16 px-6 py-16 sm:px-8 md:space-y-24 lg:max-w-6xl lg:py-24">
        <nav className="animate-fade-in">
          <ul className="flex items-center justify-center gap-4 sm:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-zinc-800/80 bg-black/50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:-translate-y-0.5 hover:border-green-400/60 hover:text-green-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        <header className="flex flex-col items-center text-center">
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.35em] text-green-300/80">
            Matt Topham — Robotics · AI/Finance · AR/VR
          </p>
          <h1 className="animate-title bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text py-6 text-4xl font-bold text-transparent sm:text-6xl md:text-7xl">
            Building clean, useful tools — and learning in public.
          </h1>
          <p className="max-w-3xl text-lg text-zinc-300 sm:text-xl">
            I build agentic systems and spatial interfaces that help people make better decisions — from EVA copilots for NASA SUITS to market cognition bots and mixed-reality classrooms. Currently studying Computer Science at CU Boulder while shipping products that blend autonomy with human intuition.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://thetopham.github.io/views/resume.html"
              className="group flex items-center gap-2 rounded-full bg-green-400/90 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-green-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="https://github.com/thetopham"
              className="group flex items-center gap-2 rounded-full border border-zinc-700/80 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:-translate-y-0.5 hover:border-green-400/60 hover:text-green-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="mailto:matt@thetopham.com"
              className="group flex items-center gap-2 rounded-full border border-zinc-700/80 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:-translate-y-0.5 hover:border-green-400/60 hover:text-green-300"
            >
              Say hello
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </header>

        <section className="w-full space-y-8 rounded-3xl border border-zinc-800/80 bg-black/40 p-8 shadow-[0_0_45px_rgba(34,197,94,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Focus</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">What I&apos;m exploring right now</p>
          </div>
          <ul className="grid gap-4 text-left sm:grid-cols-2">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="group rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-4 text-sm text-zinc-200 transition hover:border-green-400/50 hover:bg-zinc-900/70"
              >
                <span className="block font-semibold text-green-300/80">→</span>
                <p className="mt-2 text-base text-zinc-300">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full space-y-8">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected projects</h2>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-green-300"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <Link
                key={highlight.title}
                href={highlight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-800/80 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-green-400/50 hover:bg-black/60"
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-green-400/70">Case Study</p>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{highlight.title}</h3>
                  <p className="text-sm text-zinc-300">{highlight.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-zinc-400">
                  <span>{highlight.meta}</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
