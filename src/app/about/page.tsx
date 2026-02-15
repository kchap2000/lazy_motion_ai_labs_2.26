import type { Metadata } from "next";

import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About | Lazy Lab AI Studio",
  description: "About Lazy Lab AI Studio and our cinematic, production-minded AI workflow."
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--neutral-300)]">About / Studio</p>
        <h1 className="mt-3 font-display text-4xl text-[color:var(--neutral-50)] md:text-5xl">AI for Real Life, built for real production.</h1>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <div className="space-y-6 text-[color:var(--neutral-300)]">
          <p>
            Lazy Lab AI Studio was built to close the gap between AI potential and production reality. We focus on cinematic storytelling that
            feels authored, coherent, and emotionally intentional.
          </p>
          <p>
            Instead of chasing novelty, we build tool-agnostic pipelines that preserve identity, continuity, and pacing. The result is work that
            is both visually distinctive and deployable in real campaign timelines.
          </p>
          <p>
            If you need trailer-grade visuals, narrative short-form, or a custom prompt system your team can reuse, we can design and ship it.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
