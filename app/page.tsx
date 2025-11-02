import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "projects", href: "/projects" },
  { name: "rise of man", href: "/rise-of-man" },
  { name: "ai", href: "/ai" },
  { name: "contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-6"> {/* Increased gap */}
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-lg font-bold text-white hover:text-green-400 transition-transform transform hover:scale-110 bg-black/60 px-4 py-2 rounded-lg text-shadow"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        thetopham
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in space-y-6 px-6">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-zinc-400">
          Robotics • AR/VR • AI/Finance
        </p>
        <p className="max-w-xl mx-auto text-base text-zinc-300 sm:text-lg">
          Building clean, useful tools — and learning in public. Currently studying
          Computer Science at CU Boulder while exploring agentic AI and mixed-reality
          interfaces.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link
            href="https://thetopham.github.io"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 font-medium text-black bg-green-400 rounded-lg shadow-lg transition hover:bg-green-300"
          >
            View portfolio
          </Link>
          <Link
            href="https://github.com/thetopham/thetopham/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 font-medium text-zinc-200 border border-zinc-700 rounded-lg transition hover:border-zinc-500 hover:text-white"
          >
            Latest README
          </Link>
          <Link
            href="https://thetopham.github.io/views/resume.html"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 font-medium text-zinc-200 border border-zinc-700 rounded-lg transition hover:border-zinc-500 hover:text-white"
          >
            Resume
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
          <span className="px-4 py-1 rounded-full border border-zinc-800 bg-black/40">
            NASA SUITS 2026
          </span>
          <span className="px-4 py-1 rounded-full border border-zinc-800 bg-black/40">
            CU Robotics
          </span>
          <span className="px-4 py-1 rounded-full border border-zinc-800 bg-black/40">
            AI Radar
          </span>
        </div>
      </div>
    </div>
  );
}
