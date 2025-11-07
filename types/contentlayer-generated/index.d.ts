import type { ComponentType } from "react";

declare module "contentlayer/generated" {
  interface Body {
    raw: string;
    code: string;
  }

  export interface Project {
    _id: string;
    _raw: {
      flattenedPath: string;
    };
    type: "Project";
    title: string;
    description: string;
    slug: string;
    path: string;
    body: Body;
    date?: string;
    url?: string;
    repository?: string;
    published?: boolean;
  }

  export interface Page {
    _id: string;
    _raw: {
      flattenedPath: string;
    };
    type: "Page";
    title: string;
    description?: string;
    slug: string;
    path: string;
    body: Body;
  }

  export const allProjects: Project[];
  export const allPages: Page[];
}

declare module "next-contentlayer/hooks" {
  interface UseMDXComponentOptions {
    components?: Record<string, ComponentType<any>>;
  }

  export function useMDXComponent(
    code: string
  ): ComponentType<UseMDXComponentOptions>;
}
