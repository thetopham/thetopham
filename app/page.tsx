import Link from "next/link";
import React from "react";
import {
  ArrowUpRight,
  FileText,
  Github,
  Mail,
  Rocket,
} from "lucide-react";
import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const actions = [
  {
    href: "https://thetopham.github.io",
    label: "portfolio",
    description: "Interactive workbench & case studies",
    icon: ArrowUpRight,
  },
  {
    href: "https://thetopham.github.io/views/resume.html",
    label: "resume",
    description: "One-page snapshot of skills & roles",
    icon: FileText,
  },
  {
    href: "https://github.com/thetopham",
    label: "github",
    description: "Shipping in public & open-sourcing",
    icon: Github,
  },
  {
    href: "mailto:dev@thetopham.com",
    label: "email",
    description: "Let’s collaborate on human-centered tools",
    icon: Mail,
  },
];

const highlights = [
  {
    title: "School of the Ancients (VR + AI)",
    description:
      "Voice-driven Socratic mentor built in Unity VR with GPT-4o, expressive avatars, and an embodied lesson graph.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
  },
  {
    title: "TradingView Bot",
    description:
      "Python automation that parses TradingView alerts, routes signals into Alpaca, and keeps humans-in-the-loop.",
    href: "https://github.com/thetopham/tradingview-bot",
  },
  {
    title: "CU Robotics",
    description:
      "Leading embedded experiments across navigation, perception, and ROS tooling for the CU Robotics collective.",
    href: "https://github.com/CU-Robotics",
  },
  {
    title: "AI Radar",
    description:
      "RSS-to-GPT agent that tracks emerging AI research, condenses it, and publishes a daily intelligence brief.",
    href: "https://github.com/thetopham/ai-radar",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-12 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase tracking-wide text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white px-3 py-1.5 rounded-lg border border-transparent hover:border-zinc-700 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={120} />

      <div className="max-w-4xl px-6 text-center space-y-10 animate-fade-in">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-300">
            <Rocket className="h-4 w-4" aria-hidden="true" /> Agentic AI & Mixed Reality
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-white">
            Matt Topham — building human-centered tools for the frontier of robotics, AR/VR, and finance.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
            CS @ CU Boulder, NASA SUITS 2026 finalist, and systems thinker who prototypes fast, tests with real people, and ships polished experiences. I combine spatial computing with agentic AI to help teams learn faster and act with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.href}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-700/60 bg-zinc-900/40 px-6 py-6 text-left transition hover:border-zinc-500 hover:bg-zinc-900/70"
              >
                <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-200 group-hover:text-white">
                  <Icon className="h-4 w-4" aria-hidden="true" /> {action.label}
                </span>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-200">
                  {action.description}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="space-y-6 text-left">
          <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-zinc-400 text-center">
            Highlights
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-5 py-6 transition hover:border-zinc-500 hover:bg-zinc-900/70"
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-200">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-16 mb-10 text-xs uppercase tracking-[0.3em] text-zinc-500">
        Understanding people. Building things they want. Getting those things in front of them.
      </footer>
    </div>
  );
}
