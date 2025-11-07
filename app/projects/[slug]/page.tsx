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
    <div className="min-h-screen bg-black/70 backdrop-blur">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />
      <article className="mx-auto my-12 max-w-3xl rounded-xl border border-white/10 bg-black/80 px-6 py-12 shadow-2xl shadow-black/40 backdrop-blur-sm prose prose-white prose-quoteless sm:px-10">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
