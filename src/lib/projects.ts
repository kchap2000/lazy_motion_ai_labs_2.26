import projectsJson from "@/data/projects.json";
import type { Project } from "@/types/project";

const projects = projectsJson as Project[];

export const studioName = "Lazy Motion Labs AI Studio";

function isRenderableProject(project: Project) {
  return project.published && project.heroMediaType === "video" && project.heroMediaUrl.trim().length > 0;
}

export function getAllProjects() {
  return projects.filter(isRenderableProject).sort((a, b) => b.year - a.year);
}

export function getFeaturedProjects() {
  return getAllProjects().filter((project) => project.featured).slice(0, 3);
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllCategories() {
  return Array.from(new Set(getAllProjects().map((project) => project.category)));
}

export function getAllTags() {
  return Array.from(new Set(getAllProjects().flatMap((project) => project.tags))).sort();
}

export function getProjectOgImage(project: Project) {
  return project.thumbnailImage || "/projects/neon-pulse-thumb.svg";
}
