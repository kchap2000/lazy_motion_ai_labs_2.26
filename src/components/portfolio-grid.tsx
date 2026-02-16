"use client";

import { useMemo, useState } from "react";

import type { Project } from "@/types/project";
import ProjectCard from "@/components/project-card";

type PortfolioGridProps = {
  projects: Project[];
  categories: string[];
  tags: string[];
};

export default function PortfolioGrid({ projects, categories, tags }: PortfolioGridProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [tagFilter, setTagFilter] = useState<string>("All");
  const applyTagFilter = (tag: string) => {
    setCategoryFilter("All");
    setTagFilter(tag);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = categoryFilter === "All" || project.category === categoryFilter;
      const tagMatch = tagFilter === "All" || project.tags.includes(tagFilter);
      return categoryMatch && tagMatch;
    });
  }, [projects, categoryFilter, tagFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setCategoryFilter(category)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                categoryFilter === category
                  ? "bg-[color:var(--coral-500)] text-[color:var(--navy-950)]"
                  : "border border-white/20 text-[color:var(--neutral-200)] hover:border-white/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-[color:var(--neutral-300)]">
          <span>Tag</span>
          <select
            className="rounded-full border border-white/20 bg-[color:var(--navy-900)] px-3 py-2 text-[color:var(--neutral-50)]"
            value={tagFilter}
            onChange={(event) => setTagFilter(event.target.value)}
          >
            <option value="All">All</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 text-[color:var(--neutral-300)]">
          No projects match these filters.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onTagClick={applyTagFilter} />
          ))}
        </div>
      )}
    </div>
  );
}
