import Link from "next/link";
import Image from "next/image";

import PortfolioGrid from "@/components/portfolio-grid";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import { getAllCategories, getAllProjects, getAllTags, getFeaturedProjects } from "@/lib/projects";

const services = [
  {
    title: "AI Cinematic Video Production",
    body: "Trailer-grade visuals and music-driven storytelling with continuity-safe scene design."
  },
  {
    title: "Prompt Engineering Systems",
    body: "Reusable prompt frameworks that keep style, character identity, and pacing consistent."
  },
  {
    title: "Creative Direction + Pipeline Build",
    body: "End-to-end production strategy from concept boards to delivery-ready social cutdowns."
  }
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-10 md:gap-20 md:pt-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[color:var(--coral-500)]/20 blur-3xl" />
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[color:var(--neutral-300)]">Lazy Motion Labs AI Studio</p>
          <h1 className="hero-title max-w-3xl font-display text-4xl leading-tight text-[color:var(--neutral-50)] md:text-6xl">
            Cinematic AI storytelling, built like real production.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--neutral-300)] md:text-lg">
            We create trailers, music videos, branded story ads, and production-ready prompt systems that prioritize narrative,
            continuity, and believable visual language.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#portfolio" className="rounded-full bg-[color:var(--coral-500)] px-6 py-3 text-sm font-semibold text-[color:var(--navy-950)] hover:bg-[color:var(--coral-400)]">
              View Work
            </Link>
            <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 text-sm text-[color:var(--neutral-100)] hover:border-white/50">
              Book / Contact
            </Link>
          </div>
        </Reveal>
      </section>

      {featuredProjects.length > 0 && (
        <section className="space-y-6">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-3xl text-[color:var(--neutral-50)] md:text-4xl">Featured Projects</h2>
              <Link className="text-sm text-[color:var(--coral-500)] hover:text-[color:var(--coral-400)]" href="#portfolio">
                View full portfolio
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Reveal key={project.id}>
                <ProjectCard project={project} large />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section id="portfolio" className="space-y-6">
        <Reveal>
          <h2 className="font-display text-3xl text-[color:var(--neutral-50)] md:text-4xl">Portfolio Grid</h2>
        </Reveal>
        <Reveal>
          {allProjects.length > 0 ? (
            <PortfolioGrid projects={allProjects} categories={categories} tags={tags} />
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-[color:var(--neutral-300)]">
              No published videos yet. Add a project in <code>src/data/projects.json</code> and set <code>published</code> to <code>true</code>.
            </div>
          )}
        </Reveal>
      </section>

      <section className="space-y-6">
        <Reveal>
          <h2 className="font-display text-3xl text-[color:var(--neutral-50)] md:text-4xl">Services Snapshot</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-[color:var(--neutral-50)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--neutral-300)]">{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[1fr_1.5fr] md:p-10">
          <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 md:h-full">
            <Image
              src="/projects/outgrow-your-world-thumb.png"
              alt="Cinematic studio still"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--navy-950)]/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[color:var(--neutral-50)]">
              Studio Still
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--neutral-300)]">About The Studio</p>
            <h2 className="mt-2 font-display text-3xl text-[color:var(--neutral-50)]">We build with story discipline, not prompt chaos.</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--neutral-300)]">
              Lazy Motion Labs AI Studio translates cinematic instincts into practical AI production systems. Every project starts with narrative intent,
              then moves through a tool-agnostic pipeline built for repeatability and believable output.
            </p>
            <Link className="mt-6 inline-block text-sm text-[color:var(--coral-500)] hover:text-[color:var(--coral-400)]" href="/about">
              Read the studio story
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-[color:var(--coral-500)]/30 bg-[linear-gradient(135deg,#151f3a,#0a1126)] p-8 text-center md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--neutral-300)]">Ready to collaborate?</p>
          <h2 className="mt-3 font-display text-3xl text-[color:var(--neutral-50)] md:text-4xl">Have a project in mind?</h2>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[color:var(--coral-500)] px-6 py-3 text-sm font-semibold text-[color:var(--navy-950)] hover:bg-[color:var(--coral-400)]">
              Contact
            </Link>
            <Link href="#portfolio" className="rounded-full border border-white/20 px-6 py-3 text-sm text-[color:var(--neutral-200)] hover:border-white/40">
              View Work
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
