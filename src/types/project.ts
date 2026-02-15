export type ProjectCategory =
  | "Music Video"
  | "Trailer"
  | "Branded"
  | "Educational"
  | "Experimental";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectQuickFacts = {
  role: string;
  timeline: string;
  deliverables: string[];
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  category: ProjectCategory;
  tags: string[];
  year: number;
  thumbnailImage?: string;
  heroMediaType: "image" | "video";
  heroMediaUrl: string;
  shortDescription: string;
  longDescription: string;
  tools: string[];
  gallery: string[];
  links: ProjectLink[];
  featured: boolean;
  quickFacts: ProjectQuickFacts;
};
