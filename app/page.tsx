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

const quickLinks = [
  { label: "portfolio", href: "https://thetopham.github.io" },
  { label: "resume", href: "https://thetopham.github.io/views/resume.html" },
  {
    label: "NASA SUITS 2026",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
  },
];

const highlights = [
  {
    title: "NASA SUITS 2026 — TUXEDO AI/VR System",
    role: "Proposal Lead & AI/VR Systems Architect",
    description:
      "Integrating offline AI, rover autonomy, and AR overlays for EVA safety.",
    tech: "AI • VR • Unreal • WebSocket • Offline LLMs",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
    external: true,
  },
  {
    title: "School of the Ancients (VR + AI)",
    role: "Voice-driven Socratic mentor platform",
    description:
      "Immersive academy where learners debate historical mentors via spatial interfaces.",
    tech: "MetaHorizon • TypeScript • Gemini-2.5-flash-native-audio • XR Interaction Toolkit",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    external: true,
  },
  {
    title: "TradingView Bot",
    role: "Automation for futures traders",
    description:
      "Reads TradingView charts, analyzes trends, and logs AI decisions for alerts.",
    tech: "Python • gpt-5/gemini-2.5/claude-opus-4.1/grok-4/deepseek-v3.1 • Supabase • TradingView • n8n",
    href: "https://github.com/thetopham/tradingview-bot",
    external: true,
  },
  {
    title: "CU Robotics",
    role: "Documentation + onboarding lead",
    description:
      "Standardizing guides across hive-rs, swarm, waggle, and firmware for RoboMaster autonomy.",
    tech: "Python • Rust • TypeScript • C • JupyterNotebook • C++",
    href: "https://github.com/CU-Robotics",
    external: true,
  },
  {
    title: "AI Radar",
    role: "RSS → GPT daily brief",
    description:
      "Summarizes AI research/news feeds with GPT-powered filtering and synthesis.",
    tech: "Python • Feedparser • GitHub Actions",
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
  { label: "Python", color: "#3776AB" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "React", color: "#20232A", textColor: "#61DAFB" },
  { label: "Supabase", color: "#3FCF8E" },
  { label: "Node.js", color: "#339933" },
  { label: "Docker", color: "#2496ED" },
  { label: "Unity", color: "#000000" },
  { label: "Vercel", color: "#000000" },
  { label: "Postgres", color: "#4169E1" },
];

const githubStats = [
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
            <div>
              <h1 className="text-4xl font-semibold text-zinc-100 sm:text-5xl md:text-6xl">
                Matt Topham
              </h1>
              <p className="mt-4 text-2xl text-zinc-200">
                Building clean, useful tools, and learning in public.
              </p>
              <p className="mt-2 text-base text-zinc-400">
                🎓 CS @ CU Boulder | Agentic AI & Mixed-Reality Interfaces
              </p>
            </div>
            <p className="max-w-3xl text-lg text-zinc-300">
              Boulder-based engineer focused on agentic AI systems, mixed-reality interfaces, and financial cognition. Currently
              blending hardware, software, and storytelling to build EVA copilots, Socratic learning environments, and modular
              pipelines that connect vision, voice, and reasoning.
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
              <Link
                href="/contact"
                className="rounded-full border border-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/50"
              >
                Let’s collaborate
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-zinc-200 transition hover:border-white/40 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">🧩 Highlights</h2>
              <p className="mt-3 max-w-2xl text-base text-zinc-400">
                Proposal work, research experiments, and OSS initiatives currently shaping my lab notebook.
              </p>
            </div>
            <Link
              href="/projects"
              className="self-start rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 transition hover:border-white/50 hover:text-white"
            >
              Browse all projects
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="h-full">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur transition hover:border-emerald-400/60 hover:shadow-emerald-500/10"
                  >
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">{item.role}</p>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-200">{item.title}</h3>
                      <p className="text-sm text-zinc-300 group-hover:text-zinc-100">{item.description}</p>
                      <p className="text-xs text-zinc-400">{item.tech}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wide text-emerald-300/80">
                      View repo →
                    </span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur transition hover:border-emerald-400/60 hover:shadow-emerald-500/10"
                  >
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">{item.role}</p>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-emerald-200">{item.title}</h3>
                      <p className="text-sm text-zinc-300 group-hover:text-zinc-100">{item.description}</p>
                      <p className="text-xs text-zinc-400">{item.tech}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wide text-emerald-300/80">
                      View case study →
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-lg backdrop-blur">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">🚀 Current focus</h2>
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
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">🧰 Stack</h2>
            <p className="mt-3 text-base text-zinc-400">
              Tools I reach for when building agentic systems, immersive interfaces, and realtime data pipelines.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {stackBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: badge.color,
                    color: badge.textColor ?? "#ffffff",
                  }}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-lg backdrop-blur">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">📊 GitHub Stats</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {githubStats.map((stat) => (
                <div key={stat.alt} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <img src={stat.src} alt={stat.alt} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-black/40 p-8 text-center shadow-lg backdrop-blur">
            <div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">🪄 Visitors</h2>
              <img
                src="https://komarev.com/ghpvc/?username=thetopham&color=blueviolet&style=flat-square"
                alt="Visitor Count"
                className="mx-auto mt-4"
              />
            </div>
            <blockquote className="text-lg italic text-zinc-200">
              “Understanding people. Building things they want. Getting those things in front of them.”
            </blockquote>
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
