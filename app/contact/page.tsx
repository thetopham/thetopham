"use client";

import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/thetopham",
    label: "Twitter",
    handle: "@thetopham",
    description: "Build logs, robotics experiments, and occasional space memes.",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@thetopham.com",
    label: "Email",
    handle: "dev@thetopham.com",
    description: "Reach out for collaborations, research, or mentorship chats.",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/thetopham",
    label: "GitHub",
    handle: "thetopham",
    description: "Latest experiments across AI, VR, robotics, and automation.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-white">
      <Navigation />
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pb-20 pt-32 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Let’s build something useful</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">
          I partner with teams who care about agency, learning, and real-world impact. Drop a note — I respond faster than the bots I automate.
        </p>
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
          {socials.map((social) => (
            <Card key={social.label}>
              <Link
                href={social.href}
                target="_blank"
                className="group relative flex h-full flex-col items-center gap-4 rounded-xl p-8 text-center duration-700"
              >
                <span
                  className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-zinc-500/60 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-zinc-200 transition duration-1000 group-hover:border-zinc-200 group-hover:text-white">
                  {social.icon}
                </span>
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="font-display text-xl text-zinc-100 transition duration-150 group-hover:text-white">
                    {social.handle}
                  </span>
                  <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                    {social.label}
                  </span>
                  <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200">
                    {social.description}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
