import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const spotlights = [
  {
    title: "School of the Ancients",
    description:
      "Voice-driven Socratic mentor experience for Quest VR — blending embodied AI tutoring with immersive story worlds.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
  },
  {
    title: "NASA SUITS 2026",
    description:
      "Designing augmented-reality astronaut interfaces with the CU team — systems that make extravehicular work safer.",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
  },
  {
    title: "AI Radar",
    description:
      "RSS to GPT pipeline for daily briefings — keeps founders and researchers aligned on the fast-moving AI landscape.",
    href: "https://github.com/thetopham/ai-radar",
  },
];

const actions = [
  {
    label: "Email",
    href: "mailto:dev@thetopham.com",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "https://thetopham.github.io/views/resume.html",
    icon: Download,
  },
  {
    label: "GitHub",
    href: "https://github.com/thetopham",
    icon: ArrowUpRight,
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="mt-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-5 text-sm uppercase tracking-wide text-zinc-400">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full border border-zinc-700/60 bg-black/40 px-4 py-2 font-medium text-zinc-200 transition hover:border-emerald-400/60 hover:text-white"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <header className="relative z-10 mx-auto mt-16 flex w-full max-w-4xl flex-col items-center gap-6 px-6 text-center sm:gap-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
          <Sparkles className="h-4 w-4" /> Agentic AI & Mixed-Reality Interfaces
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Matt Topham
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
          Robotics, AR/VR, and agentic AI — building clean, useful tools and sharing the journey. I study Computer Science at CU Boulder and work on immersive assistants that help humans think, learn, and explore.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group flex items-center gap-2 rounded-full border border-zinc-700/70 bg-black/50 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-emerald-400/60 hover:text-white"
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <action.icon className="h-4 w-4 transition group-hover:text-emerald-300" />
              {action.label}
            </Link>
          ))}
        </div>
      </header>

      <div className="relative z-10 mt-20 w-full max-w-5xl px-6 pb-24">
        <div className="mb-8 flex items-center justify-between text-zinc-400">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Recent work
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
          >
            Browse all projects
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {spotlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-700/70 bg-black/40 p-6 text-left transition hover:border-emerald-400/60 hover:bg-black/60"
            >
              <div>
                <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-200">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald-300 transition group-hover:translate-x-1 group-hover:text-emerald-200">
                View project
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
