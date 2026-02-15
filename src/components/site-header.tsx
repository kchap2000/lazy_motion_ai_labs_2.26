import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--navy-950)]/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm tracking-[0.22em] text-[color:var(--neutral-50)]">
          LAZY LAB AI STUDIO
        </Link>
        <nav className="flex items-center gap-6 text-sm text-[color:var(--neutral-200)]">
          <Link className="hover:text-[color:var(--coral-500)]" href="/">
            Work
          </Link>
          <Link className="hover:text-[color:var(--coral-500)]" href="/about">
            About
          </Link>
          <Link className="hover:text-[color:var(--coral-500)]" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
