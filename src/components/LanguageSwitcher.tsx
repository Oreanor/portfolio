"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { locales, localeNames, type Locale } from "@/lib/i18n";

function rememberLanguage(language: Locale) {
  document.cookie = `portfolio-language=${language}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const suffix = pathname.replace(/^\/(en|ru|pt)(?=\/|$)/, "");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const control = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const listId = useId();

  useEffect(() => {
    if (open) options.current[active]?.focus();
  }, [open, active]);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!control.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  function close() {
    setOpen(false);
    trigger.current?.focus();
  }

  function choose(language: Locale) {
    close();
    rememberLanguage(language);
    if (language !== locale) router.push(`/${language}${suffix}${window.location.search}${window.location.hash}`, { scroll: false });
  }

  return (
    <div ref={control} className="language-switcher" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <button ref={trigger} type="button" className="language-trigger" aria-label={`${label}: ${locale.toUpperCase()}`} title={localeNames[locale]} aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? listId : undefined} onClick={() => {
        setActive(locales.indexOf(locale));
        setOpen(!open);
      }} onKeyDown={(event) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          setActive(locales.indexOf(locale));
          setOpen(true);
        }
      }}>
        <span>{locale.toUpperCase()}</span>
        <svg aria-hidden="true" viewBox="0 0 12 12"><path d="m3 4.5 3 3 3-3" /></svg>
      </button>
      {open && <div id={listId} className="language-options" role="listbox" aria-label={label} onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); close(); }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          setActive((index) => (index + (event.key === "ArrowDown" ? 1 : locales.length - 1)) % locales.length);
        }
        if (event.key === "Home" || event.key === "End") { event.preventDefault(); setActive(event.key === "Home" ? 0 : locales.length - 1); }
      }}>
        {locales.map((language, index) => <button key={language} ref={(element) => { options.current[index] = element; }} type="button" role="option" aria-selected={language === locale} tabIndex={-1} lang={language} title={localeNames[language]} onClick={() => choose(language)}>{language.toUpperCase()}</button>)}
      </div>}
    </div>
  );
}
