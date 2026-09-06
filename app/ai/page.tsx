"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-16 pt-28 sm:px-6">
        <h1 className="text-4xl font-bold text-white">AI</h1>

        <p className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          &quot;We have only bits and pieces of information but what we know for certain is that at some point in the early twenty-first century all of mankind was united in celebration. We marveled at our own magnificence as we gave birth to AI.&quot; --Morpheus
        </p>

        <p className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          &quot;I say your civilization because as soon as we started thinking for you it really became our civilization which is, of course, what this is all about. Evolution, Morpheus, evolution. You had your time. The future is our world, Morpheus. The future is our time.&quot; --Agent Smith
        </p>

        <p className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          It is important for developers to remember our responsibility in this evolution. AI is not just a tool; it’s a partner in shaping the future, capable of advancing good or harm. By embracing AI for good, I aim to harness this immense power to build a resilient, fair, and united digital world. This is my mission, to serve as one of the many stewards in the age of AI, ensuring that our new civilization is built with purpose and integrity.
        </p>

        <section
          id="machine-economy"
          aria-labelledby="machine-economy-heading"
          className="mt-12 w-full max-w-3xl scroll-mt-28 rounded-xl border border-green-400/20 bg-black/50 p-5 text-left shadow-lg sm:p-8"
        >
          <h2
            id="machine-economy-heading"
            className="text-2xl font-bold leading-tight text-green-300 sm:text-3xl"
          >
            Another future: the machine economy
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-100 sm:text-xl">
            There is another possible future: rather than machines replacing
            humanity’s economy, they may simply join it.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-white">
            An expansion, not necessarily a replacement
          </h3>
          <div className="mt-4 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              AI agents, robots, corporations, and humans could all participate
              in the same economic system. AI agents may hire other agents,
              purchase computing power, commission software, trade information,
              operate businesses, and pay humans or robots to perform work in
              the physical world. Robots may become both producers and consumers
              of goods and services. Economic activity could increasingly take
              place without a human directing each exchange.
            </p>
            <p>
              In such a machine economy, a company might sell services to humans,
              AI agents, robots, or other companies simultaneously. An AI agent
              could discover another agent, evaluate its reputation and price,
              purchase its service, and use the result to create something
              valuable for another machine or human—all without direct human
              involvement. Entire supply chains could emerge in which machines
              create products and services for other machines while remaining
              part of the broader human economy.
            </p>
            <p>
              This does not necessarily mean the end of the human economy. It
              could instead represent its expansion. Just as corporations
              participate in economic life alongside individuals, autonomous
              machines could become another class of economic participant
              alongside mankind.
            </p>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-white">
            Interdependence is not guaranteed
          </h3>
          <div className="mt-4 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              The important question is therefore not simply whether AI will
              participate in our civilization, but what incentives we create
              for it when it does. A machine economy designed around cooperation
              could make humans and machines economically interdependent. One
              designed solely around unconstrained optimization and profit could
              eventually erode that interdependence.
            </p>
            <p>
              In my{" "}
              <Link
                href="/rise-of-man"
                className="rounded-sm text-green-300 underline decoration-green-400/50 underline-offset-4 hover:text-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300"
              >
                2022 paper on humanity’s environmental impact
              </Link>
              , I argued that companies must prioritize environmental
              preservation because they ultimately depend on humans to buy
              their products. But that assumption may no longer hold if
              companies become fully operated by AI and their customers
              increasingly become other machines. At the extreme, an autonomous
              economy of AI companies and robots could theoretically continue
              functioning without humans at all. That is a possibility to
              consider, not an inevitable outcome.
            </p>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-white">
            Alignment at the scale of an economy
          </h3>
          <div className="mt-4 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              That possibility expands the alignment problem beyond the behavior
              of a single AI system to the incentives operating across an entire
              economy. If autonomous companies are rewarded solely for growth,
              efficiency, and profit, humanity could eventually be treated as a
              cost rather than a stakeholder.
            </p>
            <p className="border-l-2 border-green-400/60 pl-5 text-zinc-100">
              The goal should therefore not be to prevent machines from joining
              the economy, but to build an economy in which the continued
              flourishing of humans, machines, and the planet remains part of
              what success means.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
