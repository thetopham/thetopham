import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "portfolio", href: "https://thetopham.github.io", external: true },
  { name: "resume", href: "https://thetopham.github.io/views/resume.html", external: true },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const highlights = [
  {
    title: "School of the Ancients (VR + AI)",
    description:
      "Voice-driven Socratic mentor experience for Quest VR, blending mixed reality interaction, spatial storytelling, and OpenAI tooling.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    meta: "Unity · OpenAI · Quest",
  },
  {
    title: "TradingView Bot",
    description:
      "Python automation that listens for chart alerts, executes trading workflows, and keeps humans in the loop with messaging hooks.",
    href: "https://github.com/thetopham/tradingview-bot",
    meta: "Python · Automation",
  },
  {
    title: "CU Robotics",
    description:
      "Hardware and embedded experiments for campus robotics teams, from motor control bring-up to rapid prototyping in the lab.",
    href: "https://github.com/CU-Robotics",
    meta: "Embedded · R&D",
  },
  {
    title: "AI Radar",
    description:
      "RSS → GPT pipeline that curates AI news, summarizes the signal, and delivers it through lightweight web experiences.",
    href: "https://github.com/thetopham/ai-radar",
    meta: "Next.js · Supabase",
  },
];

const stack = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Supabase",
  "Node.js",
  "Docker",
  "Unity",
  "C++",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <nav className="w-full pt-10 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4 px-6 text-sm font-medium uppercase tracking-wide text-zinc-300">
          {navigation.map((item) => {
            const className =
              "rounded-full border border-zinc-700/80 bg-black/60 px-4 py-2 text-zinc-200 transition hover:border-zinc-400 hover:text-white hover:bg-black/80";

            if (item.external) {
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {item.name}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link href={item.href} className={className}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-16 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-green-300/80">Robotics • AR/VR • AI/Finance</p>
        <h1 className="mt-6 text-4xl font-bold sm:text-6xl md:text-7xl font-display bg-gradient-to-br from-white via-zinc-200 to-green-200 bg-clip-text text-transparent">
          Matt Topham
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          Building clean, useful tools — and learning in public. I prototype agentic AI workflows, craft mixed-reality interfaces, and help teams ship robotics experiments that actually leave the lab.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-zinc-400">
          🎓 CS @ CU Boulder · Agentic AI &amp; Mixed-Reality Interfaces · 🛰️ NASA SUITS 2026 cohort member.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
          >
            Explore projects
            <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="https://github.com/thetopham/thetopham/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-black/50 px-6 py-3 font-semibold text-zinc-200 transition hover:border-zinc-400 hover:text-white"
          >
            Latest updates
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <section className="mt-16 w-full space-y-6 text-left">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-semibold text-white font-display">Highlights</h2>
            <p className="mt-2 max-w-3xl text-base text-zinc-400">
              A snapshot of current work — spanning immersive learning, automation, robotics R&amp;D, and AI-native products.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((highlight) => (
              <a
                key={highlight.href}
                href={highlight.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-zinc-700/70 bg-black/50 p-6 backdrop-blur transition hover:border-green-300/70 hover:bg-black/70"
              >
                <span className="text-xs uppercase tracking-widest text-green-200/80">
                  {highlight.meta}
                </span>
                <div className="mt-4 space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{highlight.title}</h3>
                  <p className="text-sm text-zinc-400">{highlight.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-200 transition group-hover:text-green-100">
                  View project
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 w-full max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white font-display">Stack</h2>
          <p className="mt-2 text-base text-zinc-400">
            Comfortable across the full pipeline — from embedded firmware and simulation to cloud APIs and production web apps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-zinc-700/80 bg-black/40 px-4 py-2 text-sm text-zinc-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
