// projects/page.tsx
import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { getRedisClient } from "@/util/redis";

export const revalidate = 60;

export default async function ProjectsPage() {
  const redis = getRedisClient();
  const slugs = allProjects.map((project) => project.slug);

  const views = slugs.reduce((acc, slug) => {
    acc[slug] = 0;
    return acc;
  }, {} as Record<string, number>);

  if (redis && slugs.length > 0) {
    try {
      const values = await Promise.all(
        slugs.map(async (slug) => {
          try {
            return await redis.get<number>(
              ["pageviews", "projects", slug].join(":"),
            );
          } catch (error) {
            console.error("Failed to load view count", { slug, error });
            return null;
          }
        }),
      );

      values.forEach((value, index) => {
        const slug = slugs[index];
        if (!slug) return;
        views[slug] = value ?? 0;
      });
    } catch (error) {
      console.error("Failed to load project view counts", error);
    }
  }

  const pinnedSlugs = [
    "nasa-suits-2026",
    "school-of-the-ancients",
    "tradingview-bot",
  ];

  const pinned = pinnedSlugs
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter((project): project is (typeof allProjects)[number] => Boolean(project));

  const [featured, ...spotlight] = pinned;

  const sorted = allProjects
    .filter((p) => p.published)
    .filter((project) => !pinnedSlugs.includes(project.slug))
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  const featuredProject = featured ?? sorted[0];
  const secondaryProjects =
    spotlight.length > 0
      ? spotlight
      : sorted
          .filter((project) => project.slug !== featuredProject?.slug)
          .slice(0, 2);

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Real-world systems that blend agentic AI, robotics, finance, and immersive interfaces.
          </p>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {featuredProject && (
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
            <Card>
              <Link href={`/projects/${featuredProject.slug}`}>
                <Article
                  project={featuredProject}
                  views={views[featuredProject.slug] ?? 0}
                />
              </Link>
            </Card>

            <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
              {secondaryProjects.map((project) => (
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
