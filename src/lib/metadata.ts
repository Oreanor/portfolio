import { siteUrl } from "@/content/profile";
import { locales, languageTags, localPath, type Locale } from "./i18n";

export function alternates(locale: Locale, path = "") {
  if (!siteUrl) return undefined;
  return {
    canonical: `${siteUrl}${localPath(locale, path)}`,
    languages: { ...Object.fromEntries(locales.map((lang) => [languageTags[lang], `${siteUrl}${localPath(lang, path)}`])), "x-default": `${siteUrl}${localPath("en", path)}` },
  };
}
