import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  large?: boolean;
};

export default function ProjectCard({ project, large = false }: ProjectCardProps) {
  const hasThumbnail = Boolean(project.thumbnailImage && project.thumbnailImage.trim().length > 0);
  const useVideoFallback = !hasThumbnail && project.heroMediaType === "video";
  const videoPreviewSrc = `${project.heroMediaUrl}#t=0.1`;

  return (
    <article className="card-glow group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--coral-500)]/40">
      <Link href={`/projects/${project.slug}`}>
        <div className={`relative ${large ? "aspect-[21/9]" : "aspect-video"}`}>
          {hasThumbnail ? (
            <Image
              src={project.thumbnailImage as string}
              alt={project.title}
              fill
              sizes={large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : useVideoFallback ? (
            <video
              src={videoPreviewSrc}
              preload="metadata"
              muted
              playsInline
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(145deg,#122347,#0a142c)]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          {useVideoFallback ? (
            <div className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/35 bg-black/35 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/90">
              Auto thumbnail
            </div>
          ) : null}
        </div>
      </Link>
      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-[0.14em] text-[color:var(--neutral-400)]">{project.category}</p>
          <p className="text-xs text-[color:var(--neutral-500)]">{project.year}</p>
        </div>
        <div>
          <h3 className="font-display text-2xl leading-tight text-[color:var(--neutral-50)]">{project.title}</h3>
          <p className="mt-2 text-sm text-[color:var(--neutral-300)]">{project.shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-[color:var(--neutral-200)]">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 text-sm">
          <Link
            className="rounded-full bg-[color:var(--coral-500)] px-4 py-2 font-medium text-[color:var(--navy-950)] hover:bg-[color:var(--coral-400)]"
            href={`/projects/${project.slug}`}
          >
            Watch
          </Link>
          <Link className="rounded-full border border-white/20 px-4 py-2 text-[color:var(--neutral-200)] hover:border-white/40" href={`/projects/${project.slug}`}>
            Breakdown
          </Link>
        </div>
      </div>
    </article>
  );
}
