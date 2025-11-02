import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const published = allProjects
    .filter((project) => project.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  const featured =
    published.find((project) => project.slug === "school-of-the-ancients") ??
    published[0];

  const spotlight =
    published.find(
      (project) => project.slug === "ai-radar" && project.slug !== featured.slug,
    ) ?? published.find((project) => project.slug !== featured.slug);

  const remaining = published.filter(
    (project) =>
      project.slug !== featured.slug && project.slug !== spotlight?.slug,
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            From NASA SUITS research to automation side quests — a mix of lab work,
            shipping experiments, and learning in public.
          </p>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        {featured && spotlight ? (
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
            <Card>
              <Link href={`/projects/${featured.slug}`}>
                <Article project={featured} views={views[featured.slug] ?? 0} />
              </Link>
            </Card>

            <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
              <Card key={spotlight.slug}>
                <Article
                  project={spotlight}
                  views={views[spotlight.slug] ?? 0}
                />
              </Card>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
            {published.slice(0, 2).map((project) => (
              <Card key={project.slug}>
                <Article
                  project={project}
                  views={views[project.slug] ?? 0}
                />
              </Card>
            ))}
          </div>
        )}

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {[0, 1, 2].map((column) => (
            <div key={column} className="grid grid-cols-1 gap-4">
              {remaining
                .filter((_, i) => i % 3 === column)
                .map((project) => (
                  <Card key={project.slug}>
                    <Article
                      project={project}
                      views={views[project.slug] ?? 0}
                    />
                  </Card>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
