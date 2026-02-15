import type { Metadata } from "next";

import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact | Lazy Lab AI Studio",
  description: "Contact Lazy Lab AI Studio for cinematic AI storytelling projects."
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--neutral-300)]">Contact</p>
        <h1 className="mt-3 font-display text-4xl text-[color:var(--neutral-50)] md:text-5xl">Let&apos;s build your next story.</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--neutral-300)]">
          Send a brief and we&apos;ll recommend the right production path, timeline, and deliverables.
        </p>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <form className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm text-[color:var(--neutral-300)]">
              <span>Name</span>
              <input className="w-full rounded-xl border border-white/15 bg-[color:var(--navy-900)] px-4 py-3 text-[color:var(--neutral-50)]" placeholder="Your name" />
            </label>
            <label className="space-y-2 text-sm text-[color:var(--neutral-300)]">
              <span>Email</span>
              <input
                type="email"
                className="w-full rounded-xl border border-white/15 bg-[color:var(--navy-900)] px-4 py-3 text-[color:var(--neutral-50)]"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-[color:var(--neutral-300)]">
            <span>Project brief</span>
            <textarea
              rows={6}
              className="w-full rounded-xl border border-white/15 bg-[color:var(--navy-900)] px-4 py-3 text-[color:var(--neutral-50)]"
              placeholder="Tell us the goal, audience, and timeline."
            />
          </label>
          <button
            type="button"
            className="rounded-full bg-[color:var(--coral-500)] px-6 py-3 text-sm font-semibold text-[color:var(--navy-950)] hover:bg-[color:var(--coral-400)]"
          >
            Send Inquiry
          </button>
        </form>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-[color:var(--neutral-300)]">
          <p>Email: hello@lazylabai.studio</p>
          <p className="mt-2">Based in the US, collaborating globally.</p>
        </div>
      </Reveal>
    </div>
  );
}
