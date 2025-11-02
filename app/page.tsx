import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const quickLinks = [
  {
    label: "GitHub",
    href: "https://github.com/thetopham",
  },
  {
    label: "Resume",
    href: "https://thetopham.github.io/views/resume.html",
  },
  {
    label: "NASA SUITS 2026",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
  },
];

const highlights = [
  {
    title: "NASA SUITS 2026 — TUXEDO AI/VR System",
    description:
      "Proposal lead and AI/VR systems architect. Integrating offline AI, rover autonomy, and EVA safety overlays.",
    tech: "AI • VR • Unreal • WebSocket • Offline LLMs",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
  },
  {
    title: "School of the Ancients (VR + AI)",
    description:
      "Voice-driven Socratic mentor platform that blends philosophy, dialogue, and spatial learning with XR.",
    tech: "MetaHorizon • TypeScript • Gemini-2.5-native-audio • XR Interaction Toolkit",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
  },
  {
    title: "TradingView Bot",
    description:
      "Automation that analyzes markets, captures trends, and syncs alerts to Supabase-backed AI pipelines.",
    tech: "Python • GPT-5 • Gemini-2.5 • Claude Opus • Grok-4 • Supabase • n8n",
    href: "https://github.com/thetopham/tradingview-bot",
  },
  {
    title: "CU Robotics",
    description:
      "Authored documentation and tooling that keep RoboMaster teams shipping dependable robotics software.",
    tech: "Python • Rust • TypeScript • C/C++ • Jupyter",
    href: "https://github.com/CU-Robotics",
  },
  {
    title: "AI Radar",
    description:
      "RSS → GPT pipeline that summarizes daily AI research and news for fast tactical awareness.",
    tech: "Python • Feedparser • GitHub Actions",
    href: "https://github.com/thetopham/ai-radar",
  },
];

const focusAreas = [
  "Agentic AI systems that plan, reason, and build autonomously",
  "Mixed-reality interfaces for robotics, space exploration, and education",
  "Financial AI with real-time market cognition",
  "Modular pipelines that connect vision, voice, and reasoning",
];

const stack = [
  "Python",
  "TypeScript",
  "React",
  "Supabase",
  "Node.js",
  "Docker",
  "Unity",
  "Vercel",
  "Postgres",
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <nav className="z-10 mt-10 flex justify-center px-4 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 rounded-full border border-white/10 bg-black/50 px-6 py-2 text-sm font-medium text-zinc-200 backdrop-blur">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="capitalize transition duration-200 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-6 py-20 sm:px-12">
        <section className="space-y-6 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">Matt Topham</p>
          <h1 className="text-4xl font-bold text-white sm:text-6xl md:text-7xl">
            Robotics. AI/Finance. AR/VR.
          </h1>
          <p className="text-lg text-zinc-300 sm:text-xl">
            Building clean, useful tools — and learning in public. CS @ CU Boulder focused on agentic AI and mixed-reality interfaces that keep humans in the loop.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-400/20"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Highlights</h2>
            <p className="mt-2 text-base text-zinc-400">
              High-impact projects from class, research, and late-night experiments.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-emerald-400/60 hover:bg-emerald-400/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-emerald-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm text-zinc-300">{project.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-200/80">
                  {project.tech}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]" id="focus">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Current Focus</h2>
            <ul className="space-y-3 text-sm text-zinc-300 sm:text-base">
              {focusAreas.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Stack</h2>
            <p className="text-sm text-zinc-400">
              Tooling I reach for when shipping prototypes, research tooling, and production deployments.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
