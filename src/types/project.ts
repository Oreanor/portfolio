export type Category = "tools" | "data" | "games";

export type ProjectMedia =
  | { type: "image"; src: string; alt: string; caption: string; width: number; height: number }
  | { type: "video"; src: string; poster: string; caption: string };

export interface Project {
  slug: string;
  name: string;
  category: Category;
  kind: string;
  tagline: string;
  summary: string;
  idea: string;
  features: string[];
  decisions: { title: string; description: string }[];
  contribution: string;
  tech: string[];
  media: ProjectMedia[];
  links: { label: string; url: string }[];
  status: string;
  accent: string;
  motif: string;
  gameplay?: { title: string; description: string }[];
  disclaimer?: string;
}
