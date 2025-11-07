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
    <div className="relative min-h-screen bg-black/40">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />
      <div className="container px-4 pb-16 mx-auto">
        <article className="relative px-6 py-12 mx-auto mt-12 max-w-3xl prose prose-invert prose-quoteless rounded-3xl border border-white/10 bg-zinc-950/70 shadow-2xl backdrop-blur">
          <Mdx code={project.body.code} />
        </article>
      </div>
    </div>
  );
}
