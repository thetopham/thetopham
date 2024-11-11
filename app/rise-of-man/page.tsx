"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "../components/nav";

export default function RiseOfManPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        
        <div className="text-center">
          <Image
            src="/naturevsindustry.png"
            alt="Nature vs Industry"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold">Matthew R. Topham</h2>
          <h3>Professor Elizabeth Jackson</h3>
          <h4>Eng 122-500 Composition II</h4>
          <p>24 Apr. 2022</p>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-center max-w-2xl">The Population Explosion of Mankind: To What Extent Has Man Influenced the World?</h1>
        
        <h2 className="text-lg mt-4">Matthew R. Topham</h2>
        <h3 className="text-lg">April 24th, 2022</h3>
        
        <h4 className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          Audience: Corporate entities and people of the earth who care about the planet and our future as a species.
        </h4>

        <div className="mt-8">
          <Image
            src="/world.jpg"
            alt="World"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <section className="mt-8 text-left text-zinc-300 max-w-2xl leading-8">
          <p>
            Man has influenced the world. The countries of the first world have unintentionally changed the natural course
            of the planet through our industrialized society...
          </p>
          {/* Continue adding paragraphs here... */}
        </section>

        <div className="mt-8 text-center">
          <Image
            src="/climate change incoming sunlight.jpg"
            alt="Solar Activity and Global Temperature"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-2 text-zinc-400">(Climate Change: Incoming Sunlight)</p>
        </div>

        {/* Additional content can be styled similarly */}
      </div>
    </div>
  );
}
