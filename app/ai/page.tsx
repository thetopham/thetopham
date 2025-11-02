"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/nav";

const principles = [
  {
    title: "Human-centered agents",
    description:
      "Design AI systems that amplify human judgment instead of obscuring it. Each workflow exposes levers for review, override, and reflection.",
  },
  {
    title: "Transparent pipelines",
    description:
      "Instrumentation and eval harnesses live alongside prompts. When an agent acts, we log why — with traces that are easy to interrogate.",
  },
  {
    title: "Real-world feedback",
    description:
      "Pair lab experiments with field tests. Whether it’s a robotics rig or a VR classroom, the loop closes only when humans ship with it.",
  },
];

const builds = [
  {
    title: "School of the Ancients",
    description:
      "Agentic mentors inside VR guide learners through Socratic dialogue. Voice input, OpenAI tools, and spatial UX keep the session adaptive.",
    href: "/projects/school-of-the-ancients",
  },
  {
    title: "AI Radar",
    description:
      "An RSS → GPT pipeline that distills the AI firehose into trustworthy digests and dashboards for collaborators.",
    href: "/projects/ai-radar",
  },
  {
    title: "TradingView Bot",
    description:
      "Automation with human-in-the-loop guardrails. Every trade is auditable, replayable, and grounded in deterministic policy steps.",
    href: "/projects/tradingview-bot",
  },
];

const collaborations = [
  {
    title: "NASA SUITS 2026",
    description:
      "Working with the cohort on astronaut-assistive tooling keeps me honest about latency, resilience, and UX in critical systems.",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
    external: true,
  },
  {
    title: "Agent systems reading list",
    description:
      "I collect agent design patterns, eval frameworks, and failure analyses. Reach out if you’d like the living bibliography.",
    href: "mailto:dev@thetopham.com",
    external: false,
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-700/20 to-black text-white">
      <Navigation />
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-40">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-green-200/80">Agentic AI</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl font-display">Responsible systems, shipped.</h1>
          <p className="mt-6 text-lg text-zinc-300">
            I explore how autonomous agents can collaborate with humans across robotics, finance, and immersive learning. The goal: reliable tools that explain themselves and stay aligned with the people they serve.
          </p>
        </header>

        <section className="grid gap-6 rounded-3xl border border-zinc-700/60 bg-black/40 p-8 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-white">{principle.title}</h2>
              <p className="text-sm text-zinc-400">{principle.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-white font-display">Active builds</h2>
            <p className="mt-2 text-base text-zinc-400">
              Experiments shipping now — each one blends autonomous reasoning with the guardrails needed in the real world.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {builds.map((build) => (
              <Link
                key={build.title}
                href={build.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-700/70 bg-black/40 p-6 transition hover:border-green-300/70 hover:bg-black/60"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{build.title}</h3>
                  <p className="text-sm text-zinc-400">{build.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-200 transition group-hover:text-green-100">
                  Dive in
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-zinc-700/60 bg-black/30 p-8">
          <h2 className="text-3xl font-semibold text-white font-display text-center md:text-left">Ongoing research &amp; collaborations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {collaborations.map((item) => {
              const linkProps = item.external
                ? { target: "_blank" as const, rel: "noreferrer" as const }
                : {};

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-700/70 bg-black/40 p-6 transition hover:border-green-300/70 hover:bg-black/60"
                  {...linkProps}
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-200 transition group-hover:text-green-100">
                    Connect
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
