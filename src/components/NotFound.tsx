import Link from "next/link";
import { copy, localPath, type Locale } from "@/lib/i18n";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <div className="container not-found"><p className="eyebrow">404 / {t.notFound}</p><h1>{t.notFoundFirst}<br /><em>{t.notFoundSecond}</em></h1><p>{t.notFoundCopy}</p><Link className="button-link" href={localPath(locale, "/#work")}>{t.allProjects} →</Link></div>;
}
