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
    role: "Proposal Lead & AI/VR Systems Architect",
    focus:
      "Integrating offline AI, rover autonomy, and AR overlays so astronauts get EVA copilots they can trust.",
    tech: "AI • VR • Unreal • WebSocket • Offline LLMs",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
  },
  {
    title: "School of the Ancients (VR + AI)",
    role: "Founder & Prototyper",
    focus:
      "Voice-driven Socratic mentors that blend philosophy, dialogue, and spatial learning for immersive study.",
    tech: "MetaHorizon • TypeScript • Gemini-2.5-flash-native-audio • XR Interaction Toolkit",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
  },
  {
    title: "TradingView Bot",
    role: "Creator",
    focus:
      "Python automation that reads TradingView charts, reasons about market structure, and logs AI decisions for futures traders.",
    tech: "Python • gpt-5/gemini-2.5/claude-opus-4.1/grok-4/deepseek-v3.1 • Supabase • TradingView • n8n",
    href: "https://github.com/thetopham/tradingview-bot",
  },
  {
    title: "CU Robotics",
    role: "Documentation & Systems",
    focus:
      "Organizational guides, firmware docs, and onboarding playbooks for RoboMaster autonomous robotics teams.",
    tech: "Python • Rust • TypeScript • C • C++ • Jupyter",
    href: "https://github.com/CU-Robotics",
  },
  {
    title: "AI Radar",
    role: "Builder",
    focus:
      "RSS → GPT pipeline that summarizes daily AI research, news feeds, and filters the noise for busy teams.",
    tech: "Python • Feedparser • GitHub Actions",
    href: "https://github.com/thetopham/ai-radar",
  },
];

const stackBadges = [
  "Python",
  "TypeScript",
  "React",
  "Supabase",
  "Node.js",
  "Docker",
  "Unity",
  "Vercel",
  "Postgres",
];

const focusAreas = [
  "Agentic AI systems that plan, reason, and build autonomously",
  "Mixed-reality interfaces for robotics, space, and education",
  "Financial AI with real-time market cognition",
  "Pipelines that connect vision, voice, and reasoning across devices",
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
              I’m Matt, a Boulder-based engineer focused on agentic AI, robotics, and mixed reality. I study CS @ CU Boulder and prototype systems that blend hardware, software, and interface design so people can trust the copilots, labs, and trading tools they depend on.
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
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg backdrop-blur transition hover:border-emerald-400/60 hover:shadow-emerald-500/10"
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                    {item.role}
                  </p>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 group-hover:text-zinc-200">{item.focus}</p>
                </div>
                <div className="mt-6 text-xs text-zinc-400">
                  <p className="font-mono uppercase tracking-wide text-zinc-500">Stack</p>
                  <p className="text-zinc-300">{item.tech}</p>
                </div>
                <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-wide text-emerald-300/80">
                  View build →
                </span>
              </a>
            ))}
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
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">Stack</h2>
                <p className="mt-3 text-base text-zinc-400">
                  Tools I reach for when shipping AI copilots, VR classrooms, and data-heavy dashboards.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {stackBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-6 pb-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-lg backdrop-blur">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">GitHub pulse</h2>
              <p className="mt-3 text-base text-zinc-400">
                Building in public keeps me honest—here’s the rolling snapshot from the README board.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=thetopham&show_icons=true&theme=tokyonight&hide_border=true"
                  alt="Matt's GitHub stats"
                  className="w-full rounded-2xl border border-white/10"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=thetopham&layout=compact&theme=tokyonight&hide_border=true"
                  alt="Top languages"
                  className="w-full rounded-2xl border border-white/10"
                />
                <img
                  src="https://streak-stats.demolab.com?user=thetopham&theme=tokyonight&hide_border=true"
                  alt="GitHub streak"
                  className="w-full rounded-2xl border border-white/10"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-lg backdrop-blur">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">Visitors</h2>
                <p className="mt-3 text-base text-zinc-400">Thanks for stopping by—here’s the live counter.</p>
                <img
                  src="https://komarev.com/ghpvc/?username=thetopham&color=blueviolet&style=flat-square"
                  alt="Visitor count"
                  className="mt-6 w-48"
                />
              </div>
              <div className="rounded-3xl border border-white/5 bg-black/40 p-8 shadow-lg backdrop-blur">
                <p className="text-xl font-medium text-zinc-100">
                  “Understanding people. Building things they want. Getting those things in front of them.”
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-emerald-300/80">Operating mantra</p>
              </div>
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
