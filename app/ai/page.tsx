"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const principles = [
  {
    title: "Human-centered copilots",
    body:
      "Augment the operator. I build agentic systems that explain themselves, invite feedback, and keep humans in the driver’s seat.",
  },
  {
    title: "Transparent autonomy",
    body:
      "Observability isn’t optional. Every workflow I ship exposes logs, rationales, and levers so teams can trust—and tune—AI decisions.",
  },
  {
    title: "Purposeful deployment",
    body:
      "Ship with intent. Each prototype explores how AI serves climate stewardship, education, or financial resilience rather than novelty for its own sake.",
  },
];

const experiments = [
  {
    name: "Quest-classroom mentors",
    description:
      "Extending School of the Ancients with lesson packs where GPT-4 agents co-teach alongside human instructors in VR.",
  },
  {
    name: "Autonomous research digest",
    description:
      "AI Radar orchestrates retrieval, clustering, and briefing so busy builders catch the signal. Next: personalized action plans.",
  },
  {
    name: "Quantitative copilots",
    description:
      "TradingView Bot is evolving into a portfolio assistant that reasons about risk, backtests, and communicates in plain English.",
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-700/20 to-black text-white">
      <Navigation />
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-24 sm:px-10">
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-green-400/80">
            Agentic AI
          </p>
          <h1 className="font-display text-4xl sm:text-6xl">
            Building copilots that respect the human in the loop
          </h1>
          <p className="max-w-3xl text-lg text-zinc-300">
            My AI work sits at the intersection of robotics, finance, and spatial computing. I prototype agentic systems that can explain their reasoning, coordinate across tools, and amplify human decision-making. The responsibility is clear: we steer the trajectory of the systems we ship.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl">Principles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <div className="flex h-full flex-col gap-4 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-zinc-300">{principle.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl">Active experiments</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {experiments.map((experiment) => (
              <Card key={experiment.name}>
                <div className="flex h-full flex-col gap-4 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {experiment.name}
                  </h3>
                  <p className="text-sm text-zinc-300">{experiment.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl">Let’s collaborate</h2>
          <p className="max-w-3xl text-sm text-zinc-300">
            I’m eager to partner with teams exploring mission-critical AI: robotics fleets that need resilient autonomy, educators shaping mixed-reality curricula, and finance groups turning raw data into trustworthy insights. If that’s you, reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-black/40 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-300/60 hover:bg-black/60"
            >
              Contact
            </Link>
            <Link
              href="https://thetopham.github.io/views/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-black/40 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-300/60 hover:bg-black/60"
            >
              Resume
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
