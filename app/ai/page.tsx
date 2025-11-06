"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const pillars = [
  {
    title: "North star",
    description:
      "Treat AI as a cofounder, not a bolt-on feature. Every experiment starts with a real operator workflow—astronauts in EVA suits, traders staring at heatmaps, students debating Socrates—and ends with software that lightens their load.",
  },
  {
    title: "Agentic tooling",
    description:
      "I prototype systems that perceive, reason, and act. That means chaining speech, vision, simulation, and planning models, then instrumenting them with telemetry so we can trust the outcomes.",
  },
  {
    title: "Responsible deployment",
    description:
      "Safety is a product requirement. I map failure modes, build human-in-the-loop controls, and make sure the models can run offline when the mission—spacewalks, field robotics, or finance—demands resilience.",
  },
];

const experiments = [
  "EVA copilots that blend computer vision, natural language planning, and heads-up displays.",
  "Multimodal trading agents that read order flow, summarize edge, and journal decisions.",
  "Spatial learning mentors that let students interrogate primary sources inside VR.",
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 pb-20 pt-32">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            The AI Lab
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Building agentic systems that work in the real world.
          </h1>
          <p className="text-lg text-zinc-300 md:max-w-3xl">
            This is where I document the experiments that connect robotics, finance, and mixed reality. Each prototype pairs frontier models with disciplined engineering so the humans in the loop stay informed, in control, and inspired.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur"
            >
              <h2 className="text-lg font-semibold text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm text-zinc-300">{pillar.description}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/5 bg-black/30 p-8 shadow-lg backdrop-blur">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            What I’m exploring now
          </h2>
          <p className="mt-3 text-base text-zinc-300">
            Pull requests, lab notes, and research threads currently on the bench.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-zinc-200">
            {experiments.map((experiment) => (
              <li key={experiment} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" aria-hidden />
                <span>{experiment}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/5 bg-black/40 p-6 shadow-lg backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Guiding principles</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>Measure everything—latency, accuracy, and operator trust.</li>
              <li>Keep humans in the loop with reversible actions and clear audit trails.</li>
              <li>Prefer open, portable stacks so teams can deploy offline and own their data.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/5 bg-black/20 p-6 backdrop-blur">
            <h2 className="text-lg font-semibold text-white">Let’s team up</h2>
            <p className="mt-4 text-sm text-zinc-300">
              I collaborate with research labs, robotics teams, and funds who want to blend AI reasoning with real-world hardware or market workflows. If that’s you, reach out and let’s scope a build.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full border border-emerald-400/60 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
