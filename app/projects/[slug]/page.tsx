import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
export const revalidate = 60;
type Props = {
  params: {
    slug: string;
  };
};
const redis = Redis.fromEnv();
export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}
export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);
  if (!project) {
    notFound();
  }
  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;
  return (
    <div className="relative min-h-screen pb-16">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />
      <div className="px-4">
        <article className="mx-auto mt-10 max-w-4xl rounded-3xl border border-zinc-800/60 bg-zinc-950/80 px-6 py-12 shadow-2xl backdrop-blur-lg prose prose-invert prose-quoteless">
          <Mdx code={project.body.code} />
        </article>
      </div>
    </div>
  );
}
