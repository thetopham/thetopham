"use client";

import React from "react";
import { Navigation } from "../components/nav";

const principles = [
  {
    title: "Agency with accountability",
    body:
      "AI systems should extend human capability, not replace human judgment. Every agent I build has explicit guardrails, logging, and an accountable owner.",
  },
  {
    title: "Embodied learning",
    body:
      "Humans think with their hands and environment. Mixed-reality tutors, haptics, and voice interfaces are how we make AI feel intuitive.",
  },
  {
    title: "Open tooling",
    body:
      "I share build logs, starter kits, and metrics in public so others can reproduce results and push the ideas further.",
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white">
      <Navigation />
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center px-6 pb-20 pt-28 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">Agentic AI</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Building systems that teach, guide, and collaborate with humans. AI is a co-worker — a mentor when we need wisdom, a pair-programmer when we need momentum.
        </p>

        <blockquote className="mt-8 max-w-3xl rounded-2xl border border-zinc-700 bg-black/40 p-6 text-left text-sm text-zinc-300 sm:text-base">
          “We have only bits and pieces of information but what we know for certain is that at some point in the early twenty-first century all of mankind was united in celebration. We marveled at our own magnificence as we gave birth to AI.” — Morpheus
        </blockquote>

        <section className="mt-12 grid w-full gap-6 text-left md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-zinc-700 bg-black/30 p-6"
            >
              <h2 className="text-lg font-semibold text-white">{principle.title}</h2>
              <p className="text-sm text-zinc-300">{principle.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 flex flex-col gap-6 text-left text-zinc-300">
          <p>
            I think of AI builders as stewards. The tools we ship have leverage. They can coordinate teams, teach students, and move capital — or they can amplify harm. Responsible AI is about purpose: who we empower and which incentives we reinforce.
          </p>
          <p>
            In <strong>School of the Ancients</strong>, agents guide astronauts through critical tasks with Socratic prompts. In <strong>AI Radar</strong>, they filter an overwhelming news cycle into a digestible brief. Different contexts, same goal: keep humans in command while letting machines handle the drudgery.
          </p>
          <p>
            Companies that optimize only for profit risk forgetting the humans they serve. AI lets us rethink that contract — aligning incentives around resilience, equity, and curiosity.
          </p>
        </section>
      </div>
    </div>
  );
}
