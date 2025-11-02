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
    name: "view projects",
    href: "/projects",
  },
  {
    name: "view resume",
    href: "https://thetopham.github.io/views/resume.html",
    external: true,
  },
  {
    name: "github",
    href: "https://github.com/thetopham",
    external: true,
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const highlights = [
  {
    title: "School of the Ancients (VR + AI)",
    description:
      "Voice-driven Socratic mentor built in Unity — blending AI tutoring with immersive storytelling.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
  },
  {
    title: "TradingView Bot",
    description:
      "Python automation that listens for alerts, routes decisions, and executes trades with guardrails.",
    href: "https://github.com/thetopham/tradingview-bot",
  },
  {
    title: "AI Radar",
    description:
      "RSS to GPT pipeline that curates AI news into daily briefings for builders and operators.",
    href: "https://github.com/thetopham/ai-radar",
  },
  {
    title: "CU Robotics",
    description:
      "Hardware, embedded experiments, and control systems with the CU Robotics collective.",
    href: "https://github.com/CU-Robotics",
  },
];

const focusAreas = [
  {
    title: "NASA SUITS 2026",
    description:
      "Designing agentic mixed-reality interfaces for astronaut EVA guidance as part of the NASA SUITS challenge.",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
  },
  {
    title: "Agentic AI & Mixed-Reality Interfaces",
    description:
      "Studying CS @ CU Boulder while building tools that combine robotics, AR/VR, and finance automation.",
  },
  {
    title: "Learning in public",
    description:
      "Documenting experiments, publishing notes, and sharing prototypes to help other builders move faster.",
  },
];

const stack = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Supabase",
  "Docker",
  "Unity",
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="mt-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-semibold uppercase tracking-widest text-zinc-200 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={120} />
      <main className="relative z-10 w-full max-w-5xl px-6 py-16 mx-auto space-y-16">
        <section className="text-center space-y-6">
          <p className="text-sm font-semibold tracking-[0.4em] text-green-400/80 uppercase">
            Matt Topham
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl font-display">
            Robotics • AR/VR • AI/Finance
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-300">
            Building clean, useful tools — and learning in public. I’m a CS student at CU Boulder focused on agentic AI systems and mixed-reality interfaces that help people move faster and make better decisions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="px-5 py-2 text-sm font-medium text-white transition border rounded-full border-zinc-700/60 bg-zinc-900/50 hover:border-green-400 hover:text-green-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-zinc-800 bg-black/40 p-6 transition hover:border-green-400/70 hover:bg-black/60"
            >
              <h2 className="text-xl font-semibold text-white group-hover:text-green-300">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                {item.description}
              </p>
            </Link>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-green-400/80 uppercase">
            Focus
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-black/40 p-5"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-white hover:text-green-300"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                )}
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-green-400/80 uppercase">
            Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-medium text-green-100/90 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </main>
      </div>
  );
}
