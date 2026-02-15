import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--navy-950)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--neutral-200)]">Lazy Lab AI Studio</p>
          <p className="mt-2 max-w-md text-sm text-[color:var(--neutral-400)]">
            Story-first cinematic AI production for trailers, music visuals, and branded narratives.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-sm sm:items-end">
          <Link className="text-[color:var(--coral-500)] hover:text-[color:var(--coral-400)]" href="/contact">
            Have a project? Contact
          </Link>
          <a className="text-[color:var(--neutral-300)] hover:text-white" href="mailto:hello@lazylabai.studio">
            hello@lazylabai.studio
          </a>
          <p className="text-[color:var(--neutral-500)]">YouTube · TikTok · Instagram</p>
        </div>
      </div>
    </footer>
  );
}
