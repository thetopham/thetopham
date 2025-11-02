"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Navigation } from "../components/nav";

const essays = [
  {
    title: "Planetary Stewardship",
    href: "/rise-of-man",
    summary:
      "Where I first explored how corporations and technologists must act as caretakers of Earth while scaling innovation.",
  },
];

const systems = [
  {
    title: "School of the Ancients",
    href: "/projects/school-of-the-ancients",
    summary:
      "Agentic mentor who converses in VR, weaving GPT reasoning with spatial storytelling so learners internalize faster.",
  },
  {
    title: "AI Radar",
    href: "/projects/ai-radar",
    summary:
      "Autonomous pipeline that curates AI breakthroughs each morning so I can brief teammates in minutes, not hours.",
  },
  {
    title: "gpt-co",
    href: "/projects/gpt-co",
    summary:
      "Multiplayer agent simulation where cross-functional GPT teammates prototype company workflows on demand.",
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-300">
          <Sparkles className="h-4 w-4" aria-hidden="true" /> Agentic AI Practice
        </span>
        <h1 className="mt-6 text-4xl font-display font-semibold text-white sm:text-5xl">
          Responsible agents, practical impact.
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          I design and deploy AI systems that understand human intent, respect guardrails, and make people measurably more capable. From NASA SUITS research to automated trading desks, my work pairs curiosity with accountability.
        </p>

        <section className="mt-12 w-full space-y-6 text-left">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400 text-center">
            Featured Systems
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {systems.map((system) => (
              <Link
                key={system.title}
                href={system.href}
                className="group flex h-full flex-col justify-between rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-5 py-6 transition hover:border-zinc-500 hover:bg-zinc-900/70"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-green-400">
                    {system.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-200">
                    {system.summary}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400 group-hover:text-white">
                  Read Case Study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 w-full space-y-4 text-left">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400 text-center">
            Essays & Ethics
          </h2>
          {essays.map((essay) => (
            <Link
              key={essay.title}
              href={essay.href}
              className="group flex flex-col gap-3 rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-5 py-5 transition hover:border-zinc-500 hover:bg-zinc-900/70"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400 group-hover:text-white">
                Essay
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-green-400">
                  {essay.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200">
                  {essay.summary}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
