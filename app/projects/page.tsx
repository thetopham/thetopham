// projects/page.tsx
import React from "react";
import { allProjects, type Project } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

const spotlightSlugs = [
  "school-of-the-ancients",
  "tradingview-bot",
  "ai-radar",
  "cu-robotics",
];

export const revalidate = 60;

export default async function ProjectsPage() {
  const views: Record<string, number> = redis
    ? (
        await redis.mget<number[]>(
          ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
        )
      ).reduce((acc, v, i) => {
        acc[allProjects[i].slug] = v ?? 0;
        return acc;
      }, {} as Record<string, number>)
    : {};

  const spotlightProjects = spotlightSlugs
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));

  const [featured, ...secondarySpotlights] = spotlightProjects;

  const sorted = allProjects
    .filter((p) => p.published)
    .filter((project) => !spotlightSlugs.includes(project.slug))
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto text-center lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Explorations in robotics, XR, and agentic AI — from rapid prototypes to
            production-ready tools.
          </p>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {featured && (
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
            <Card>
              <Article project={featured} views={views[featured.slug] ?? 0} />
            </Card>

            <div className="flex w-full flex-col gap-8 border-t border-gray-900/20 lg:mx-0 lg:border-t-0">
              {secondarySpotlights.map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
            </div>
          </div>
        )}
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
