"use client";

import { useEffect, useState, useSyncExternalStore, type ReactNode, type MouseEvent } from "react";
import { copy, localPath, type Locale } from "@/lib/i18n";

type Filter = { id: string; label: string; count: number };

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getCategory() {
  return new URLSearchParams(window.location.search).get("category") || "all";
}

export function ProjectCatalog({ filters, children, locale }: { filters: Filter[]; children: ReactNode; locale: Locale }) {
  const t = copy[locale];
  const category = useSyncExternalStore(subscribe, getCategory, () => "all");
  const selected = filters.find((filter) => filter.id === category) ?? filters[0];
  const [displayedId, setDisplayedId] = useState("all");
  const [fading, setFading] = useState(false);
  const displayed = filters.find((filter) => filter.id === displayedId) ?? filters[0];

  useEffect(() => {
    let swapTimer: number | undefined;
    const frame = window.requestAnimationFrame(() => {
      if (selected.id === displayedId || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplayedId(selected.id);
        setFading(false);
        return;
      }

      // Keep the outgoing cards in place until they have faded out.
      setFading(true);
      swapTimer = window.setTimeout(() => {
        setDisplayedId(selected.id);
        setFading(false);
      }, 160);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(swapTimer);
    };
  }, [selected.id, displayedId]);

  function selectCategory(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (selected.id === id) return;
    const url = new URL(window.location.href);
    if (id === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", id);
    url.hash = "work";
    window.history.pushState(null, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <div className="catalog" data-filter={displayed.id}>
      <nav className="project-filters" aria-label={t.filterLabel}>
        {filters.map((filter) => (
          <a key={filter.id} href={localPath(locale, filter.id === "all" ? "/#work" : `/?category=${filter.id}#work`)} aria-current={filter.id === selected.id ? "true" : undefined} onClick={(event) => selectCategory(event, filter.id)}>
            {filter.label} <span className="filter-count">({filter.count})</span>
          </a>
        ))}
      </nav>
      <p className="sr-only" role="status" aria-live="polite">{t.showing} {displayed.count} {t.projects}. {displayed.label}.</p>
      <div className="project-grid" data-fading={fading || undefined} aria-busy={displayed.id !== selected.id} inert={displayed.id !== selected.id}>{children}</div>
    </div>
  );
}
