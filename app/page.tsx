import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation: {
  name: string;
  href: string;
  external?: boolean;
}[] = [
  { name: "projects", href: "/projects" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
  {
    name: "resume",
    href: "https://thetopham.github.io/views/resume.html",
    external: true,
  },
];

const highlights = [
  {
    title: "NASA SUITS 2026 — TUXEDO AI/VR System",
    description:
      "Proposal lead & AI/VR architect integrating offline copilots, rover autonomy, and AR overlays to protect astronauts during EVA.",
    meta: "AI • VR • Unreal • WebSocket • Offline LLMs",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
    external: true,
  },
  {
    title: "School of the Ancients (VR + AI)",
    description:
      "Voice-driven Socratic mentor platform that blends philosophy dialogue with spatial learning environments.",
    meta: "MetaHorizon • TypeScript • Gemini-2.5 • XR Interaction Toolkit",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    external: true,
  },
  {
    title: "TradingView Bot",
    description:
      "Python agent that reads TradingView charts, reasons about market structure, and logs AI-assisted trade setups.",
    meta: "Python • multimodel LLM stack • Supabase • n8n",
    href: "https://github.com/thetopham/tradingview-bot",
    external: true,
  },
  {
    title: "CU Robotics",
    description:
      "RoboMaster team support—documenting embedded workflows and onboarding guides across hive-rs, swarm, waggle, and firmware repos.",
    meta: "Python • Rust • TypeScript • C • Jupyter • C++",
    href: "https://github.com/CU-Robotics",
    external: true,
  },
  {
    title: "AI Radar",
    description:
      "RSS → GPT pipeline that distills daily AI research into a concise signal for my lab notebook.",
    meta: "Python • Feedparser • GitHub Actions",
    href: "https://github.com/thetopham/ai-radar",
    external: true,
  },
];

const focusAreas = [
  "Agentic AI systems that plan, reason, and build autonomously",
  "Mixed-reality interfaces for robotics, space, and education",
  "Financial AI with real-time market cognition",
  "Pipelines that connect vision, voice, and reasoning across devices",
];

const stackBadges = [
  {
    name: "Python",
    badge: "https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white",
  },
  {
    name: "TypeScript",
    badge: "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white",
  },
  {
    name: "React",
    badge: "https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB",
  },
  {
    name: "Supabase",
    badge: "https://img.shields.io/badge/-Supabase-3FCF8E?logo=supabase&logoColor=white",
  },
  {
    name: "Node.js",
    badge: "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white",
  },
  {
    name: "Docker",
    badge: "https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white",
  },
  {
    name: "Unity",
    badge: "https://img.shields.io/badge/-Unity-000?logo=unity&logoColor=white",
  },
  {
    name: "Vercel",
    badge: "https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white",
  },
  {
    name: "Postgres",
    badge: "https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white",
  },
];

const statsImages = [
  {
    alt: "Matt's GitHub stats",
    src: "https://github-readme-stats.vercel.app/api?username=thetopham&show_icons=true&theme=tokyonight&hide_border=true",
  },
  {
    alt: "Top languages",
    src: "https://github-readme-stats.vercel.app/api/top-langs/?username=thetopham&layout=compact&theme=tokyonight&hide_border=true",
  },
  {
    alt: "GitHub streak",
    src: "https://streak-stats.demolab.com?user=thetopham&theme=tokyonight&hide_border=true",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10 opacity-60" quantity={120} />

      <nav className="relative z-20 border-b border-white/5 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-lg font-semibold uppercase tracking-[0.2em] text-zinc-200">
            Matt Topham
          </span>
          <ul className="flex items-center gap-4 text-sm font-medium text-zinc-300">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 uppercase tracking-wide text-xs transition hover:border-white/40 hover:text-white"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full border border-white/10 px-4 py-2 uppercase tracking-wide text-xs transition hover:border-white/40 hover:text-white"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="relative z-10 flex-1">
        <section className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col justify-center gap-10 px-6 pt-16 pb-24">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              🤖 Robotics • 🧠 AI/Finance • 🕶️ AR/VR
            </p>
            <h1 className="text-4xl font-semibold text-zinc-100 sm:text-5xl md:text-6xl">
              Building clean, useful tools — and learning in public.
            </h1>
            <p className="max-w-3xl text-lg text-zinc-300">
              CS @ CU Boulder. I design agentic AI systems, mixed-reality interfaces, and financial cognition tools that pair hardware discipline with creative software. Every build is an experiment in understanding people, shipping what they want, and getting it in front of them.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-emerald-300"
              >
                Explore projects
              </Link>
              <a
                href="https://thetopham.github.io/views/resume.html"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/50"
              >
                View resume
              </a>
              <a
                href="https://thetopham.github.io"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/50"
              >
                Portfolio site
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/50"
              >
                Let’s collaborate
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Featured builds</h2>
              <p className="mt-3 max-w-2xl text-base text-zinc-400">
                A snapshot of the systems I’m actively shipping—spanning EVA operations, immersive education, and autonomous finance tooling.
              </p>
            </div>
            <Link
              href="/projects"
              className="self-start rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 transition hover:border-white/50 hover:text-white"
            >
              Browse all projects
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => {
              const Card = (
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-200">
                      {item.description}
                    </p>
                    {item.meta && (
                      <p className="text-xs uppercase tracking-wide text-zinc-500">{item.meta}</p>
                    )}
                  </div>
                  <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wide text-emerald-300/80">
                    {item.external ? "Open repository →" : "View case study →"}
                  </span>
                </div>
              );

              return item.external ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur transition hover:border-emerald-400/60 hover:shadow-emerald-500/10"
                >
                  {Card}
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur transition hover:border-emerald-400/60 hover:shadow-emerald-500/10"
                >
                  {Card}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-lg backdrop-blur">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Current focus</h2>
            <p className="mt-3 text-base text-zinc-400">
              Themes guiding the experiments, prototypes, and research I share across GitHub and the lab notebook.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-300"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-lg backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">Stack</h2>
                <p className="mt-2 text-base text-zinc-400">
                  Tools I reach for when fusing AI reasoning, robotics, and immersive front-ends.
                </p>
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">🧰 Always tinkering</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {stackBadges.map((stack) => (
                <img
                  key={stack.name}
                  src={stack.badge}
                  alt={`${stack.name} badge`}
                  className="h-8 w-auto rounded-full border border-white/5 bg-white/5 p-1"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="space-y-6 rounded-3xl border border-white/5 bg-black/40 p-8 text-center shadow-lg backdrop-blur">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">GitHub pulse</h2>
            <p className="text-base text-zinc-400">
              Building in public means shipping often. Here’s a snapshot of the repos powering the experiments above.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {statsImages.map((stat) => (
                <img
                  key={stat.alt}
                  src={stat.src}
                  alt={stat.alt}
                  className="w-full rounded-2xl border border-white/10 bg-zinc-900/40 p-3"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 text-sm text-zinc-400">
              <img
                src="https://komarev.com/ghpvc/?username=thetopham&color=blueviolet&style=flat-square"
                alt="visitor counter"
                className="h-8"
                loading="lazy"
              />
              <p className="max-w-2xl text-xs uppercase tracking-wide text-zinc-500">
                “Understanding people. Building things they want. Getting those things in front of them.”
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-400 md:flex-row">
          <p>© {new Date().getFullYear()} Matt Topham. Building with curiosity.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/thetopham"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mrtopham"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dev@thetopham.com"
              className="transition hover:text-white"
            >
              dev@thetopham.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
