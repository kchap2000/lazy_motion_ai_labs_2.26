import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import HeroMedia from "@/components/hero-media";
import MarkdownLite from "@/components/markdown-lite";
import Reveal from "@/components/reveal";
import { getAllProjects, getProjectBySlug, getProjectOgImage } from "@/lib/projects";

type ProjectPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Lazy Motion Labs AI Studio"
    };
  }

  return {
    title: `${project.title} | Lazy Motion Labs AI Studio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Lazy Motion Labs AI Studio`,
      description: project.shortDescription,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: getProjectOgImage(project),
          width: 1200,
          height: 630,
          alt: `${project.title} thumbnail`
        }
      ]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breakdownParagraphs = project.longDescription
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const breakdownLead = breakdownParagraphs[0] ?? "";
  const breakdownRest = breakdownParagraphs.slice(1).join("\n\n");

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-16 pt-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--neutral-300)]">{project.category}</p>
        <h1 className="mt-3 font-display text-4xl text-[color:var(--neutral-50)] md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-[color:var(--neutral-300)]">{project.shortDescription}</p>
      </Reveal>

      <Reveal>
        <HeroMedia project={project} />
      </Reveal>

      <Reveal>
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-[color:var(--neutral-400)]">Role</p>
            <p className="mt-2 text-sm text-[color:var(--neutral-200)]">{project.quickFacts.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-[color:var(--neutral-400)]">Tools</p>
            <p className="mt-2 text-sm text-[color:var(--neutral-200)]">{project.tools.join(", ")}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-[color:var(--neutral-400)]">Timeline</p>
            <p className="mt-2 text-sm text-[color:var(--neutral-200)]">{project.quickFacts.timeline}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-[color:var(--neutral-400)]">Deliverables</p>
            <p className="mt-2 text-sm text-[color:var(--neutral-200)]">{project.quickFacts.deliverables.join(" · ")}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-5">
          <h2 className="font-display text-3xl text-[color:var(--neutral-50)]">Gallery</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.gallery.map((item) => (
              <div key={item} className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                <Image src={item} alt={`${project.title} still`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-display text-3xl text-[color:var(--neutral-50)]">Breakdown</h2>
          <MarkdownLite text={breakdownLead} />
          {breakdownRest ? (
            <details className="rounded-xl border border-white/10 bg-[color:var(--navy-900)] p-4">
              <summary className="cursor-pointer text-sm text-[color:var(--neutral-200)]">Read full breakdown</summary>
              <div className="mt-3">
                <MarkdownLite text={breakdownRest} />
              </div>
            </details>
          ) : null}
          <details className="rounded-xl border border-white/10 bg-[color:var(--navy-900)] p-4">
            <summary className="cursor-pointer text-sm text-[color:var(--neutral-200)]">Show prompt snippets</summary>
            <p className="mt-3 text-sm text-[color:var(--neutral-300)]">
              Prompt blocks are available on request for client and educational contexts.
            </p>
          </details>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-2xl border border-[color:var(--coral-500)]/30 bg-[linear-gradient(130deg,#1b2b4e,#0a1126)] p-6">
          <h2 className="font-display text-3xl text-[color:var(--neutral-50)]">Want something like this?</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[color:var(--coral-500)] px-5 py-2.5 text-sm font-semibold text-[color:var(--navy-950)]">
              Contact
            </Link>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-[color:var(--neutral-200)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
