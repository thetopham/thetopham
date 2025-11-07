import { Redis } from "@upstash/redis";
import { Mdx } from "@/app/components/mdx";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((project) => project.published)
    .map((project) => ({
      slug: project.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params.slug;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className="min-h-screen bg-black/20">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />
      <article className="px-4 py-12 mx-auto prose prose-white prose-quoteless rounded-lg shadow-lg">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
