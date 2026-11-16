import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl } from "@/content/profile";
import { locales, languageTags, localPath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return locales.flatMap((locale) => ["", ...projects.map((project) => `/projects/${project.slug}`)].map((path) => ({ url: `${siteUrl}${localPath(locale, path)}`, alternates: { languages: Object.fromEntries(locales.map((language) => [languageTags[language], `${siteUrl}${localPath(language, path)}`])) } })));
}
