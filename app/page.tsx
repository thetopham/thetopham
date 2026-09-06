import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "portfolio", href: "https://thetopham.github.io/", external: true },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

const projects = [
  {
    name: "Marinara",
    tagline: "Our roleplays, brought to life",
    description:
      "We already write scripts every day in our roleplays. Why not turn them into animation and anime? I’m working on a MiniMax H3 workflow with character-sheet images, written personas, and World Maps location references, so the same people and places can stay recognizable from scene to scene.",
    detail:
      "Our narration becomes the script. AI plans the scenes and keyframes—the still images that guide each shot—then ComfyUI brings the images and motion instructions together for animation. The dream is an anime that grows with the story.",
    status:
      "Still in development. Getting closer to Seedance-style action quality on my own hardware is a goal, not a demonstrated result.",
    href: "https://thetopham.github.io/views/projects.html#marinara",
    link: "from roleplay to animation",
  },
  {
    name: "Manfred",
    tagline: "AI ears and eyes for my day",
    description:
      "An Omi wearable turns daily audio into transcripts and searchable notes: a record of conversations and moments I want to remember. E09 smart glasses connect to ChatGPT Live for voice conversations and photo sharing.",
    detail:
      "The idea is to talk to AI through the glasses and share what I’m seeing, instead of stopping to type everything into my phone.",
    status:
      "Voice through the glasses works; I’m still improving photo capture and sharing. Personal recordings are not published here.",
    href: "https://github.com/thetopham/manfred",
    link: "meet Manfred",
  },
  {
    name: "Demerzel",
    tagline: "The helper behind the scenes",
    description:
      "Daily AI briefs, a personal wiki built from my daily conversations, and tools to manage the computers running my AI projects. The goal is to keep useful information from getting lost and put my own computers to work.",
    detail:
      "My home AI fleet includes an AMD Radeon AI PRO R9700 system for larger AI models and animation experiments, a dual RTX 3060 system for local language models, and a single RTX 3060 system for ComfyUI image generation. Its tools check what is running and keep jobs from competing for the same graphics card.",
    status:
      "The separate automatic coding/research workers are currently paused while I check recent changes. My wiki and machine access details remain private.",
    href: "https://thetopham.github.io/views/projects.html#demerzel",
    link: "the helper and the hardware",
  },
];

const navClass =
  "nav-link text-sm sm:text-base font-bold text-white hover:text-green-400 transition-transform transform hover:scale-105 bg-black/60 px-3 sm:px-4 py-2 rounded-lg text-shadow border border-white/10 hover:border-green-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300";
const actionClass =
  "rounded-lg border border-zinc-600 bg-black/50 px-5 py-3 font-mono text-sm font-bold text-zinc-200 transition hover:border-zinc-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-5 pb-8">
      <nav aria-label="Primary" className="z-20 mb-12 mt-8 animate-fade-in sm:mb-16">
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className={navClass}>
                  {item.name} ↗
                </a>
              ) : (
                <Link href={item.href} className={navClass}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div aria-hidden="true" className="hidden h-px w-full animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-left" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <main className="z-10 flex w-full max-w-6xl flex-col items-center text-center">
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-300 sm:text-sm">
          Stories · everyday memory · AI at home
        </p>
        <h1 className="cursor-default whitespace-nowrap bg-white bg-clip-text text-5xl text-transparent duration-1000 text-edge-outline animate-title font-display sm:text-7xl md:text-9xl">
          thetopham
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-100 sm:text-2xl">
          Bring stories to life. Remember my own.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">
          I’m Matt, a computer science student at CU Boulder. I’m building AI tools
          that turn roleplay into animation, help me remember my day, and run on
          computers I manage at home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="https://thetopham.github.io/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-green-400/50 bg-green-400/10 px-5 py-3 font-mono text-sm font-bold text-green-300 transition hover:bg-green-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">see what I’m building ↗</a>
          <a href="https://thetopham.github.io/views/resume.html" target="_blank" rel="noopener noreferrer" className={actionClass}>résumé ↗</a>
          <a href="https://www.linkedin.com/in/mrtopham" target="_blank" rel="noopener noreferrer" className={actionClass}>LinkedIn ↗</a>
        </div>

        <section aria-labelledby="current-work" className="mt-12 w-full text-left">
          <h2 id="current-work" className="mb-5 text-center font-mono text-sm uppercase tracking-widest text-green-300">The ideas I’m turning into projects</h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="flex min-w-0 flex-col rounded-xl border border-green-400/20 bg-black/70 p-6">
                <p className="font-mono text-xs leading-5 text-green-300">{project.tagline}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-200">{project.description}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-300">{project.detail}</p>
                <p className="mb-6 mt-4 text-sm leading-6 text-zinc-400">{project.status}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-auto text-sm font-semibold text-green-300 underline decoration-green-400/40 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">{project.link} ↗</a>
              </article>
            ))}
          </div>
        </section>
        <p className="mt-10 max-w-2xl text-sm leading-6 text-zinc-300">
          There’s room for bigger questions, too: what happens when humans and
          machines share an economy? That’s the other side of this site.
        </p>
        <Link href="/ai#machine-economy" className="mt-3 text-sm font-semibold text-green-300 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-300">thoughts about our shared future →</Link>
      </main>

      <div aria-hidden="true" className="mt-12 hidden h-px w-full animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block md:animate-fade-right" />
      <footer className="z-10 mt-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 animate-fade-in">Boulder, Colorado · 2026</footer>
    </div>
  );
}
