import Link from "next/link";
import Particles from "./components/particles";
import Balancer from "react-wrap-balancer";
import { ArrowUpRight, FileText, Github, Mail } from "lucide-react";
import { Card } from "./components/card";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const heroLinks = [
  {
    label: "Projects",
    href: "/projects",
    icon: ArrowUpRight,
  },
  {
    label: "Resume",
    href: "https://thetopham.github.io/views/resume.html",
    icon: FileText,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:dev@thetopham.com",
    icon: Mail,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/thetopham",
    icon: Github,
    external: true,
  },
];

const highlights = [
  {
    title: "School of the Ancients",
    description:
      "Voice-driven Socratic mentor for Quest headsets. Blending Unity, GPT-4o, and embodied pedagogy for NASA SUITS 2026.",
    href: "https://github.com/thetopham/school-of-the-ancients-vr",
    year: "2024",
    tags: ["Unity", "C#", "OpenAI", "Mixed Reality"],
  },
  {
    title: "AI Radar",
    description:
      "Agent that monitors technical feeds, summarizes them with GPT, and ships a daily intelligence brief via Supabase + Next.js.",
    href: "https://github.com/thetopham/ai-radar",
    year: "2024",
    tags: ["Next.js", "Supabase", "TypeScript", "OpenAI"],
  },
  {
    title: "TradingView Bot",
    description:
      "Python automation that turns TradingView alerts into disciplined trades with risk controls, journaling, and analytics dashboards.",
    href: "https://github.com/thetopham/tradingview-bot",
    year: "2023",
    tags: ["Python", "Automation", "Finance"],
  },
  {
    title: "CU Robotics",
    description:
      "Building embedded tooling and mechatronics experiments for the CU Boulder robotics community — teaching robots to see and move.",
    href: "https://github.com/CU-Robotics",
    year: "2022 →",
    tags: ["Robotics", "Embedded", "Community"],
  },
];

const stack = [
  "Python",
  "TypeScript",
  "React",
  "Supabase",
  "Node.js",
  "Docker",
  "Unity",
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={140} />

      <header className="w-full">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-10 text-sm uppercase tracking-widest text-zinc-400">
          <span className="font-display text-lg text-zinc-100">thetopham</span>
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 w-full max-w-5xl flex-1 px-6 pb-24">
        <section className="mt-12 md:mt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">Matt Topham</p>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-6xl md:text-7xl">
            Robotics • AR/VR • AI/Finance
          </h1>
          <div className="mt-6 text-lg text-zinc-300 sm:text-xl">
            <Balancer>
              Building clean, useful tools — and learning in public. CS @ CU Boulder
              focused on agentic AI and mixed-reality interfaces.
            </Balancer>
          </div>
          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Currently exploring NASA SUITS 2026, embodied tutoring systems, and resilient
            automation for builders and traders.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-black/40 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-green-400 hover:text-white"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xs uppercase tracking-[0.35em] text-zinc-500">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-zinc-700 bg-black/40 px-4 py-2 text-sm text-zinc-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 space-y-6">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-zinc-500">Highlights</h2>
            <p className="mt-4 max-w-2xl text-sm text-zinc-400 sm:text-base">
              A rotating set of builds from robotics labs, trading floors, and virtual classrooms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <Card key={item.title}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full flex-col justify-between gap-6 p-6"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
                    <span>{item.year}</span>
                    <span className="flex items-center gap-1 text-zinc-300 group-hover:text-white">
                      Visit
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white font-display">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-700 bg-black/50 px-3 py-1 text-xs uppercase tracking-widest text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 max-w-3xl text-sm text-zinc-500 sm:text-base">
          <Balancer>
            “Understanding people. Building things they want. Getting those things in front of them.”
          </Balancer>
        </section>
      </main>
    </div>
  );
}
