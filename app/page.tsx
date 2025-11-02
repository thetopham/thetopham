import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "./components/card";
import Particles from "./components/particles";

const navigation: { name: string; href: string; external?: boolean }[] = [
  { name: "projects", href: "/projects" },
  { name: "ai", href: "/ai" },
  { name: "writing", href: "/rise-of-man" },
  { name: "contact", href: "/contact" },
  {
    name: "resume",
    href: "https://thetopham.github.io/views/resume.html",
    external: true,
  },
];

const quickLinks = [
  {
    label: "Explore projects",
    href: "/projects",
    description: "Autonomous systems, VR tools, and AI copilots built in public.",
  },
  {
    label: "View resume",
    href: "https://thetopham.github.io/views/resume.html",
    description: "NASA SUITS 2026 • CS @ CU Boulder • Hands-on robotics R&D.",
    external: true,
  },
  {
    label: "See what I'm building",
    href: "https://github.com/thetopham",
    description: "Daily experiments, prototypes, and open-source contributions.",
    external: true,
  },
];

const highlights = [
  {
    title: "School of the Ancients (VR + AI)",
    href: "/projects/school-of-the-ancients",
    description:
      "Voice-driven Socratic mentor for Quest headsets, blending Unity scenes with GPT-4 agents to guide immersive learning.",
  },
  {
    title: "TradingView Bot",
    href: "/projects/tradingview-bot",
    description:
      "Python automation that listens to TradingView alerts, places orders, and generates analytics for active strategies.",
  },
  {
    title: "AI Radar",
    href: "/projects/ai-radar",
    description:
      "RSS to GPT pipeline that curates daily AI briefings, highlighting the news that builders actually need to read.",
  },
];

const focusAreas = [
  {
    title: "Agentic AI",
    copy:
      "Designing multi-agent workflows that reason about markets, robotics operations, and personal productivity in real time.",
  },
  {
    title: "Mixed-reality interfaces",
    copy:
      "Prototyping spatial computing experiences for NASA SUITS and VR classrooms where human instruction meets responsive AI.",
  },
  {
    title: "Robotics & automation",
    copy:
      "From ROS experiments with CU Robotics to embedded tooling, I love shipping hardware-software loops that make teams faster.",
  },
];

const stack = [
  "Python",
  "TypeScript",
  "React",
  "Supabase",
  "Node.js",
  "Docker",
  "Unity",
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-tl from-black via-zinc-700/10 to-black text-white">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <nav className="z-10 flex justify-center pt-10 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4 rounded-full bg-black/50 px-6 py-3 text-sm uppercase tracking-wide text-zinc-300 shadow-lg shadow-black/30 backdrop-blur">
          {navigation.map((item) => {
            const linkClasses =
              "duration-200 hover:text-white text-zinc-300";
            if (item.external) {
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    {item.name}
                  </a>
                </li>
              );
            }
            return (
              <li key={item.name}>
                <Link href={item.href} className={linkClasses}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-24 sm:px-10">
        <section className="space-y-10">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-green-400/80">
              Matt Topham
            </p>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl">
              Robotics • AR/VR • AI/Finance
            </h1>
            <p className="max-w-2xl text-lg text-zinc-300">
              Building clean, useful tools — and learning in public. I’m a CS student at CU Boulder focused on agentic AI and mixed-reality interfaces, working hands-on with NASA SUITS 2026 and CU Robotics teams.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {quickLinks.map((item) => {
              const content = (
                <div className="flex h-full flex-col justify-between gap-3 rounded-xl border border-zinc-700/70 bg-black/40 p-5 text-left shadow-md shadow-black/30 transition hover:border-zinc-300/60 hover:bg-black/60">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-medium text-green-400">
                    Go <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              );
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {content}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            Current focus
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <Card key={area.title}>
                <div className="flex h-full flex-col gap-4 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="text-sm text-zinc-300">{area.copy}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Highlights
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
            >
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((project) => (
              <Card key={project.title}>
                <Link
                  href={project.href}
                  className="flex h-full flex-col gap-4 p-6"
                >
                  <div>
                    <p className="text-sm uppercase tracking-wide text-green-400/80">
                      Featured build
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-300">
                    {project.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl text-white sm:text-3xl">
            Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700/70 bg-black/40 px-4 py-2 text-sm text-zinc-200"
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
