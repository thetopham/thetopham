import Link from "next/link";
import Particles from "./components/particles";

const navigation = [
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const ctas = [
  { label: "Portfolio", href: "https://thetopham.github.io" },
  { label: "Resume", href: "https://thetopham.github.io/views/resume.html" },
  { label: "NASA SUITS 2026", href: "https://github.com/nasa-suits-challenge/suits-2026" },
];

const highlights = [
  {
    title: "NASA SUITS 2026 — TUXEDO AI/VR System",
    role: "AI/VR Systems Architect",
    description: "Prototype AI assistant, rover autonomy, and AR overlays that guide astronauts during lunar operations.",
    tech: "AI • VR • Unreal • WebSocket",
    href: "https://github.com/nasa-suits-challenge/suits-2026",
    badge: "🛰️",
  },
  {
    title: "School of the Ancients (VR + AI)",
    role: "Spatial mentor platform",
    description:
      "Immersive academy where people learn by conversing with mentors like Socrates and Galileo in mixed-reality spaces.",
    tech: "MetaHorizon • TypeScript • Gemini-2.5-flash-native-audio • XR Interaction Toolkit",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    badge: "🏛️",
  },
  {
    title: "TradingView Bot",
    role: "Automation + analysis",
    description:
      "Python + n8n workflow that reads charts, forms hypotheses, executes trades, and logs AI reasoning end-to-end.",
    tech: "Python • gpt-5/gemini-2.5/claude-opus-4.1/grok-4/deepseek-v3.1 • Supabase • TradingView • n8n",
    href: "https://github.com/thetopham/tradingview-bot",
    badge: "📈",
  },
  {
    title: "CU Robotics",
    role: "RoboMaster systems + documentation",
    description:
      "Built onboarding playbooks and firmware/app docs for the hive-rs, swarm, waggle, and firmware repos to keep the org aligned.",
    tech: "Python • Rust • TypeScript • C • JupyterNotebook • C++",
    href: "https://github.com/CU-Robotics",
    badge: "🔧",
  },
  {
    title: "AI Radar",
    role: "Daily AI brief",
    description: "RSS → GPT pipeline that summarizes AI research/news feeds into a concise daily report.",
    tech: "Python • Feedparser • GitHub Actions",
    href: "https://github.com/thetopham/ai-radar",
    badge: "🧭",
  },
];

const stackBadges = [
  { label: "Python", src: "https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white" },
  { label: "TypeScript", src: "https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white" },
  { label: "React", src: "https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB" },
  { label: "Supabase", src: "https://img.shields.io/badge/-Supabase-3FCF8E?logo=supabase&logoColor=white" },
  { label: "Node.js", src: "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white" },
  { label: "Docker", src: "https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white" },
  { label: "Unity", src: "https://img.shields.io/badge/-Unity-000?logo=unity&logoColor=white" },
  { label: "Vercel", src: "https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white" },
  { label: "Postgres", src: "https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white" },
];

const focusAreas = [
  "Agentic AI systems",
  "Mixed-reality interfaces for robotics, space, and education",
  "Financial AI with real-time market cognition",
  "Pipelines that connect vision, voice, and reasoning",
];

const statCards = [
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black text-zinc-100">
      <Particles className="absolute inset-0 -z-10" quantity={120} />

      <header className="relative z-10 flex justify-center py-8">
        <nav className="flex items-center gap-6 rounded-full border border-white/10 bg-black/40 px-8 py-3 text-sm uppercase tracking-[0.2em] text-zinc-300 shadow-2xl backdrop-blur">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 text-base sm:px-8">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-green-400">Matt Topham</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">Building clean, useful tools, and learning in public.</h1>
          <p className="mt-4 text-lg text-zinc-300">🎓 CS @ CU Boulder • Agentic AI & Mixed-Reality Interfaces</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-green-400/40 bg-green-400/10 px-6 py-3 font-semibold text-green-300 transition hover:border-green-300 hover:bg-green-400/20"
              >
                {cta.label}
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-2xl font-semibold text-white">Highlights</h2>
            <p className="text-sm text-zinc-400">Hands-on work across AI, robotics, and immersive systems.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {highlights.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/10"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-green-300">
                  <span className="text-lg">{project.badge}</span>
                  {project.role}
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-zinc-300">{project.description}</p>
                <p className="text-sm text-zinc-400">{project.tech}</p>
                <span className="text-sm font-semibold text-green-300">View project →</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Stack</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {stackBadges.map((badge) => (
              <img
                key={badge.label}
                src={badge.src}
                alt={badge.label}
                className="h-8 rounded-lg border border-white/10 bg-white/10 p-1"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Current Focus</h2>
          <ul className="mt-4 space-y-3 text-lg text-zinc-300">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">GitHub Stats</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {statCards.map((stat) => (
              <div key={stat.alt} className="rounded-2xl border border-white/5 bg-black/60 p-4">
                <img src={stat.src} alt={stat.alt} className="w-full" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 text-center">
          <img
            src="https://komarev.com/ghpvc/?username=thetopham&color=blueviolet&style=flat-square"
            alt="Visitor Count"
            className="mx-auto h-10"
            loading="lazy"
          />
          <p className="text-lg italic text-zinc-300">“Understanding people. Building things they want. Getting those things in front of them.”</p>
        </section>
      </main>
    </div>
  );
}
