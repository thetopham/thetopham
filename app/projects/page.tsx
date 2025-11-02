// projects/page.tsx
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
const redis = Redis.fromEnv();

export const revalidate = 60;

const FEATURED_SLUG = "school-of-the-ancients";
const SPOTLIGHT_SLUGS = ["ai-radar", "tradingview-bot"];

export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const published = allProjects.filter((project) => project.published);
  if (published.length === 0) {
    return (
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-20 mx-auto max-w-3xl lg:px-8 md:pt-24 lg:pt-32">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display text-center">
            Projects
          </h2>
          <p className="mt-6 text-center text-lg text-zinc-400">
            I&apos;m tidying up my case studies. Check back soon for fresh builds.
          </p>
        </div>
      </div>
    );
  }

  const featured =
    published.find((project) => project.slug === FEATURED_SLUG) ?? published[0];

  const spotlight = SPOTLIGHT_SLUGS.map((slug) =>
    published.find((project) => project.slug === slug),
  )
    .filter((project): project is (typeof published)[number] => Boolean(project))
    .filter((project) => project.slug !== featured.slug);

  const spotlightSlugs = new Set(spotlight.map((project) => project.slug));

  const sorted = published
    .filter((project) =>
      project.slug === featured.slug ? false : !spotlightSlugs.has(project.slug),
    )
    .sort((a, b) => {
      const aDate = a.date ? new Date(a.date).getTime() : 0;
      const bDate = b.date ? new Date(b.date).getTime() : 0;
      return bDate - aDate;
    });

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Agentic AI, robotics, and spatial computing experiments that ladder up to
            resilient human workflows.
          </p>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Article project={featured} views={views[featured.slug] ?? 0} />
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {spotlight.map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
