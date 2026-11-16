"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { localPath, type Locale } from "@/lib/i18n";

// Next.js skips scrolling when the URL hash is already #section, so on the home page scroll manually.
export function SectionLink({ locale, section, className, children }: { locale: Locale; section: string; className?: string; children: ReactNode }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const onHome = window.location.pathname.replace(/\/$/, "") === localPath(locale);
    const target = document.getElementById(section);
    if (!onHome || !target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    if (window.location.hash !== `#${section}`) window.history.pushState(null, "", `${window.location.pathname}${window.location.search}#${section}`);
  }

  return <Link href={localPath(locale, `/#${section}`)} className={className} onClick={handleClick}>{children}</Link>;
}