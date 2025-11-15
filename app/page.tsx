import Link from "next/link";
import Particles from "./components/particles";

const navigation = [
  { name: "Highlights", href: "#highlights" },
  { name: "Stack", href: "#stack" },
  { name: "Focus", href: "#focus" },
  { name: "Stats", href: "#stats" },
  { name: "AI", href: "/ai" },
  { name: "Contact", href: "/contact" },
];

const heroLinks = [
  { label: "Portfolio", href: "https://thetopham.github.io" },
  { label: "Resume", href: "https://thetopham.github.io/views/resume.html" },
  { label: "NASA SUITS 2026", href: "https://github.com/nasa-suits-challenge/suits-2026" },
];

const highlights = [
  {
    emoji: "🛰️",
    title: "NASA SUITS 2026 — TUXEDO AI/VR System",
    role: "AI/VR Systems Architect",
    focus:
      "Prototyping an AI assistant, rover autonomy, and astronaut AR overlays for mission-critical ops.",
    tech: "AI • VR • Unreal • WebSocket",
    link: "https://github.com/nasa-suits-challenge/suits-2026",
    linkLabel: "View Project",
  },
  {
    emoji: "🏛️",
    title: "School of the Ancients (VR + AI)",
    role: "Creator",
    focus:
      "Socratic mentor platform for spatial learning with dialogues from figures like Socrates and Galileo.",
    tech: "MetaHorizon • TypeScript • Gemini-2.5-flash-native-audio • XR Interaction Toolkit",
    link: "https://github.com/thetopham/school-of-the-ancients-vr",
    linkLabel: "Repo",
  },
  {
    emoji: "📈",
    title: "TradingView Bot",
    role: "Autonomous Researcher",
    focus:
      "n8n + Python workflow that reads charts, analyzes trends, and logs AI-driven day trading decisions.",
    tech: "Python • gpt-5/gemini-2.5/claude-opus-4.1/grok-4/deepseek-v3.1 • Supabase • TradingView • n8n",
    link: "https://github.com/thetopham/tradingview-bot",
    linkLabel: "Repo",
  },
  {
    emoji: "🔧",
    title: "CU Robotics",
    role: "Org Documentarian",
    focus:
      "RoboMaster team support with onboarding docs and technical guides across hive-rs, swarm, waggle, and firmware.",
    tech: "Python • Rust • TypeScript • C • JupyterNotebook • C++",
    link: "https://github.com/CU-Robotics",
    linkLabel: "Org",
  },
  {
    emoji: "🧭",
    title: "AI Radar",
    role: "Builder",
    focus:
      "RSS → GPT pipeline that filters and summarizes AI research/news into a minimal daily brief.",
    tech: "Python • Feedparser • GitHub Actions",
    link: "https://github.com/thetopham/ai-radar",
    linkLabel: "Repo",
  },
];

const stackBadges = [
  {
    label: "Python",
    url: "https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white",
  },
  {
    label: "TypeScript",
    url: "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white",
  },
  {
    label: "React",
    url: "https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB",
  },
  {
    label: "Supabase",
    url: "https://img.shields.io/badge/-Supabase-3FCF8E?logo=supabase&logoColor=white",
  },
  {
    label: "Node.js",
    url: "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white",
  },
  {
    label: "Docker",
    url: "https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white",
  },
  {
    label: "Unity",
    url: "https://img.shields.io/badge/-Unity-000?logo=unity&logoColor=white",
  },
  {
    label: "Vercel",
    url: "https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white",
  },
  {
    label: "Postgres",
    url: "https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white",
  },
];

const focusAreas = [
  "Agentic AI systems",
  "Mixed-reality interfaces for robotics, space, and education",
  "Financial AI with real-time market cognition",
  "Modular pipelines that connect vision, voice, and reasoning",
];

const statsImages = [
  {
    alt: "Matt's GitHub stats",
    src: "https://github-readme-stats.vercel.app/api?username=thetopham&show_icons=true&theme=tokyonight&hide_border=true",
  },
  {
    alt: "Top Languages",
    src: "https://github-readme-stats.vercel.app/api/top-langs/?username=thetopham&layout=compact&theme=tokyonight&hide_border=true",
  },
  {
    alt: "GitHub Streak",
    src: "https://streak-stats.demolab.com?user=thetopham&theme=tokyonight&hide_border=true",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={110} />

      <div className="relative z-10 max-w-6xl px-6 py-12 mx-auto space-y-24">
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm uppercase tracking-[0.2em] text-zinc-300">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition text-xs sm:text-sm hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <header className="flex flex-col items-center text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-green-400">
            Matt Topham
          </p>
          <h1 className="text-4xl font-semibold sm:text-6xl md:text-7xl font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-green-400">
            Robotics • AI/Finance • AR/VR
          </h1>
          <p className="max-w-3xl text-lg text-zinc-200">
            Building clean, useful tools and learning in public. CS @ CU Boulder. Agentic AI & Mixed-Reality Interfaces.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {heroLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-zinc-700 rounded-full hover:border-green-400 hover:text-green-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </header>

        <section id="highlights" className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-400">Highlights</p>
            <h2 className="text-3xl font-semibold">Systems, experiments, and teams I’m building with</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.title} className="p-6 space-y-4 bg-black/40 border border-zinc-800 rounded-3xl shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    {item.emoji}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{item.role}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
                <p className="text-zinc-200">{item.focus}</p>
                <p className="text-sm text-zinc-400">{item.tech}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300"
                >
                  {item.linkLabel} ↗
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-400">Stack</p>
            <h2 className="text-3xl font-semibold">Tools I reach for daily</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {stackBadges.map((badge) => (
              <img
                key={badge.label}
                src={badge.url}
                alt={`${badge.label} badge`}
                className="h-8"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section id="focus" className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-400">Current Focus</p>
            <h2 className="text-3xl font-semibold">What I’m exploring right now</h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((area) => (
              <li key={area} className="p-4 border border-zinc-800 rounded-2xl bg-black/50">
                {area}
              </li>
            ))}
          </ul>
        </section>

        <section id="stats" className="space-y-6 text-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-green-400">GitHub Stats</p>
            <h2 className="text-3xl font-semibold">Learning in public</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {statsImages.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="w-full rounded-2xl border border-zinc-800 bg-black/60"
                loading="lazy"
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://komarev.com/ghpvc/?username=thetopham&color=blueviolet&style=flat-square"
              alt="Visitor Count"
              className="h-8"
              loading="lazy"
            />
          </div>
        </section>

        <section className="pb-12 text-center text-zinc-300">
          <p className="italic max-w-3xl mx-auto">
            “Understanding people. Building things they want. Getting those things in front of them.”
          </p>
        </section>
      </div>
    </div>
  );
}
