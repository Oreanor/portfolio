import Link from "next/link";
import { profile } from "@/content/profile";
import { Arrow } from "./Arrow";
import { copy, localPath, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SectionLink } from "./SectionLink";

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={localPath(locale)} className="brand" aria-label={`Sergei Nikonets — ${t.home}`}>
          <span className="monogram" aria-hidden="true">SN</span>
          <span>Sergei Nikonets</span>
        </Link>
        <div className="header-actions"><nav aria-label={t.nav}>
          <SectionLink locale={locale} section="work">{t.work}</SectionLink>
          <SectionLink locale={locale} section="about">{t.about}</SectionLink>
          <a className="github-nav" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>
        </nav><LanguageSwitcher locale={locale} label={t.language} /></div>
      </div>
    </header>
  );
}
