// projects/article.tsx
import type { Project } from "contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="relative w-full h-full p-4 md:p-8 bg-black/50 rounded-lg border border-zinc-700 backdrop-blur-md shadow-lg transition-transform transform hover:scale-105 hover:bg-black/60">
        <div className="flex justify-between items-center text-xs text-zinc-100">
          <span className="text-xs text-zinc-200 group-hover:text-white">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date),
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
          <span className="flex items-center gap-1 text-zinc-500">
            <Eye className="w-4 h-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-zinc-100 sm:text-3xl font-display group-hover:text-white">
          {project.title}
        </h2>
        <p className="mt-4 text-sm text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
      </article>
    </Link>
  );
};
