declare module "contentlayer/generated" {
  import type { MDX } from "contentlayer/core";

  export type Project = {
    _id: string;
    _raw: {
      sourceFilePath: string;
      sourceFileName: string;
      sourceFileDir: string;
      contentType: string;
      flattenedPath: string;
    };
    type: "Project";
    published?: boolean;
    title: string;
    description: string;
    date?: string;
    url?: string;
    repository?: string;
    body: MDX;
    path: string;
    slug: string;
  };

  export type Page = {
    _id: string;
    _raw: {
      sourceFilePath: string;
      sourceFileName: string;
      sourceFileDir: string;
      contentType: string;
      flattenedPath: string;
    };
    type: "Page";
    title: string;
    description?: string;
    body: MDX;
    path: string;
    slug: string;
  };

  export const allProjects: Project[];
  export const allPages: Page[];
  export const allDocuments: Array<Project | Page>;
}
