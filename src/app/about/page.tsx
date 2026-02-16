import type { Metadata } from "next";
import Image from "next/image";

import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About | Lazy Motion Labs AI Studio",
  description: "About Lazy Motion Labs AI Studio and our cinematic, production-minded AI workflow."
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--neutral-300)]">About / Studio</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-[color:var(--neutral-50)] md:text-5xl">Lazy Motion Lab AI Studio</h1>
        <p className="mt-3 text-lg text-[color:var(--coral-400)]">Cinematic AI Production. Built for the New Era.</p>
      </Reveal>

      <Reveal className="mt-8 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1fr_1.25fr] md:p-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/about/khalil-portrait.png"
            alt="Khalil Chapman portrait"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        </div>

        <div className="space-y-6 text-[color:var(--neutral-300)]">
          <p>
            Lazy Motion Lab AI Studio is a next-generation creative production lab focused on cinematic storytelling powered by advanced generative AI
            systems.
          </p>
          <p>
            Founded by AI filmmaker and workflow architect Khalil Chapman, the studio exists to redesign how films, trailers, and visual campaigns are
            created in the age of generative intelligence.
          </p>
          <p>This is not a demo-driven operation.</p>
          <p>This is not surface-level AI experimentation.</p>
          <p className="font-semibold text-[color:var(--neutral-100)]">This is production architecture.</p>
        </div>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h2 className="font-display text-3xl text-[color:var(--neutral-50)]">The Founder</h2>
        <p className="mt-2 text-base font-semibold text-[color:var(--neutral-100)]">Khalil Chapman</p>
        <p className="text-sm uppercase tracking-[0.12em] text-[color:var(--neutral-400)]">Founder, AI Filmmaker, Workflow Architect</p>

        <div className="mt-6 space-y-5 text-[color:var(--neutral-300)]">
          <p>
            Khalil&apos;s background in visual storytelling, brand development, music, photography, and video production laid the foundation for a
            systems-driven approach to creativity.
          </p>
          <p>
            When generative AI began reshaping media production, he approached it not as a tool collector, but as a filmmaker rethinking the entire
            production pipeline.
          </p>
          <p>
            Today, he leads Lazy Motion Lab AI Studio in building structured AI filmmaking systems that prioritize cinematic quality, narrative
            consistency, and scalable execution.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h2 className="font-display text-3xl text-[color:var(--neutral-50)]">What We Do</h2>
        <p className="mt-4 text-[color:var(--neutral-300)]">Lazy Motion Lab AI Studio develops production-grade AI workflows for:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[color:var(--neutral-200)]">
          <li>Cinematic trailers</li>
          <li>Music videos</li>
          <li>Narrative proof-of-concept films</li>
          <li>Micro-dramas</li>
          <li>High-concept visual campaigns</li>
        </ul>
        <p className="mt-6 text-[color:var(--neutral-300)]">
          Every project begins with story structure, shot design, lighting strategy, coverage planning, and continuity frameworks. AI platforms are
          then integrated into that structure as part of a cohesive system.
        </p>
        <p className="mt-3 font-semibold text-[color:var(--neutral-100)]">Technology serves the film. Not the other way around.</p>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <h2 className="font-display text-3xl text-[color:var(--neutral-50)]">Our Approach</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[color:var(--navy-900)]/50 p-5">
            <h3 className="font-semibold text-[color:var(--neutral-100)]">Cinematic First</h3>
            <p className="mt-2 text-sm text-[color:var(--neutral-300)]">Story, framing, tone, performance, and atmosphere lead. AI accelerates execution.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[color:var(--navy-900)]/50 p-5">
            <h3 className="font-semibold text-[color:var(--neutral-100)]">Integrated AI Pipelines</h3>
            <p className="mt-2 text-sm text-[color:var(--neutral-300)]">
              We combine multiple generative platforms into unified production stacks spanning image, video, voice, sound, and continuity.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[color:var(--navy-900)]/50 p-5">
            <h3 className="font-semibold text-[color:var(--neutral-100)]">Continuity Engineering</h3>
            <p className="mt-2 text-sm text-[color:var(--neutral-300)]">
              Character bibles, JSON prompt extraction, visual anchors, lighting protocols, and modular coverage systems ensure narrative stability
              across scenes.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[color:var(--navy-900)]/50 p-5">
            <h3 className="font-semibold text-[color:var(--neutral-100)]">Scalable Production Architecture</h3>
            <p className="mt-2 text-sm text-[color:var(--neutral-300)]">
              We design workflows that compress traditional team requirements into streamlined, high-efficiency pipelines without sacrificing cinematic
              depth.
            </p>
          </article>
        </div>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border border-[color:var(--coral-500)]/30 bg-[linear-gradient(135deg,#151f3a,#0a1126)] p-6 md:p-8">
        <h2 className="font-display text-3xl text-[color:var(--neutral-50)]">The Mission</h2>
        <p className="mt-4 text-[color:var(--neutral-300)]">
          To redefine how cinematic content is conceived, developed, and produced in the era of generative filmmaking.
        </p>
        <p className="mt-4 text-[color:var(--neutral-300)]">Lazy Motion Lab AI Studio operates at the intersection of:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[color:var(--neutral-200)]">
          <li>Filmmaking craft</li>
          <li>Workflow engineering</li>
          <li>Cutting-edge AI innovation</li>
        </ul>
        <p className="mt-5 text-[color:var(--neutral-300)]">We believe the future of filmmaking is hybrid.</p>
        <p className="mt-3 font-semibold text-[color:var(--neutral-100)]">Human vision.</p>
        <p className="font-semibold text-[color:var(--neutral-100)]">AI acceleration.</p>
        <p className="font-semibold text-[color:var(--neutral-100)]">Structured systems.</p>
        <p className="mt-5 text-[color:var(--neutral-200)]">Lazy Motion Lab AI Studio exists to build that future.</p>
      </Reveal>
    </div>
  );
}
