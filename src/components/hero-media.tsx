import Image from "next/image";

import type { Project } from "@/types/project";

type HeroMediaProps = {
  project: Project;
};

export default function HeroMedia({ project }: HeroMediaProps) {
  const isYoutube = project.heroMediaType === "video" && project.heroMediaUrl.includes("youtube.com/embed");
  const isVimeo = project.heroMediaType === "video" && project.heroMediaUrl.includes("player.vimeo.com/video/");

  if (isYoutube || isVimeo) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          title={`${project.title} hero media`}
          src={project.heroMediaUrl}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (project.heroMediaType === "video") {
    return (
      <video className="aspect-video w-full rounded-2xl border border-white/10 object-cover" src={project.heroMediaUrl} controls />
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
      <Image src={project.heroMediaUrl} alt={project.title} fill className="object-cover" sizes="100vw" priority />
    </div>
  );
}
