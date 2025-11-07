import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { getRedisClient } from "@/util/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((candidate) => candidate.slug === slug) ?? notFound();
  const redis = getRedisClient();

  let views = 0;

  if (redis) {
    try {
      views =
        (await redis.get<number>(["pageviews", "projects", project.slug].join(":"))) ?? 0;
    } catch (error) {
      console.error("Failed to load project view count", error);
    }
  }

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
