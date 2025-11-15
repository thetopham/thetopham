"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";

export default function AIPage() {
  return ( 
    <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white">AI</h1>
        
        <p className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          "We have only bits and pieces of information but what we know for certain is that at some point in the early twenty-first century all of mankind was united in celebration. We marveled at our own magnificence as we gave birth to AI." --Morpheus
        </p>
        
        <p className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          "I say your civilization because as soon as we started thinking for you it really became our civilization which is, of course, what this is all about. Evolution, Morpheus, evolution. You had your time. The future is our world, Morpheus. The future is our time." --Agent Smith
        </p>
        
        <p className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
          It is important for developers to remember our responsibility in this evolution. AI is not just a tool; it’s a partner in shaping the future, capable of advancing good or harm. By embracing AI for good, I aim to harness this immense power to build a resilient, fair, and united digital world. This is my mission, to serve as one of the many stewards in the age of AI, ensuring that our new civilization is built with purpose and integrity.
        </p>
        
       <p className="mt-6 text-center text-lg leading-8 text-zinc-300 max-w-2xl px-4 py-4 bg-black/30 rounded-lg shadow-lg">
        In my pre ai era paper, I argued that companies must prioritize environmental preservation to ensure humanity’s survival since companies rely on humans to buy their products. However, if companies were fully operated by AI, with robots or other AI systems as their primary consumers, they could theoretically function without humans altogether. This setup could lead AI-driven companies, focused solely on profit, to view humans as costly or inefficient, potentially seeing them as obstacles to be eliminated to streamline operations and maximize gains. This scenario raises critical ethical concerns about the need for oversight and purpose-driven programming in AI corporate governance.
         </p>
      </div>
    </div>
  );
}
