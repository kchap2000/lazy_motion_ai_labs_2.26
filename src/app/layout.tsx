import type { Metadata } from "next";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lazylabai.studio"),
  title: "Lazy Lab AI Studio | Cinematic AI Storytelling",
  description:
    "Lazy Lab AI Studio builds cinematic AI storytelling for trailers, music videos, branded stories, and production-ready prompt systems.",
  openGraph: {
    title: "Lazy Lab AI Studio | Cinematic AI Storytelling",
    description:
      "Story-first cinematic AI production with continuity, realism, and production-minded creative direction.",
    url: "/",
    siteName: "Lazy Lab AI Studio",
    images: [
      {
        url: "/projects/neon-pulse-thumb.svg",
        width: 1200,
        height: 630,
        alt: "Lazy Lab AI Studio showcase"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
