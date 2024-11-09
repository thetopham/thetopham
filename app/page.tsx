import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black">
      {/* Particles Background */}
      <Particles className="absolute inset-0 -z-10" />

      {/* Navigation */}
      <nav className="my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-green-400 hover:text-green-200 font-mono"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Main Title */}
      <h1 className="z-10 text-4xl text-green-400 cursor-default font-mono sm:text-6xl md:text-9xl whitespace-nowrap">
        thetopham
      </h1>

      {/* Additional Content */}
      <div className="my-16 text-center text-green-400 font-mono">
        {/* Add any additional content here */}
      </div>
    </div>
  );
}
