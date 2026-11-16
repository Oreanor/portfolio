import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile, siteUrl } from "@/content/profile";
import { copy, locales, isLocale, languageTags } from "@/lib/i18n";
import { notFound } from "next/navigation";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  return {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: "Sergei Nikonets — Frontend Engineer & Product Builder", template: "%s — Sergei Nikonets" },
  description: t.heroDescription,
  authors: [{ name: profile.name }],
  openGraph: { title: `Sergei Nikonets — ${t.heroFirst} ${t.heroSecond}`, description: t.heroDescription, type: "website", locale: { en: "en_US", ru: "ru_RU", pt: "pt_PT" }[locale], siteName: "Sergei Nikonets" },
  twitter: { card: "summary_large_image", title: `Sergei Nikonets — ${t.heroFirst} ${t.heroSecond}`, description: t.heroDescription },
  };
}

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export const dynamicParams = false;

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={languageTags[locale]}>
      <body>
        <a href="#main" className="skip-link">{copy[locale].skip}</a>
        <Header locale={locale} />
        <ViewTransition default="page-fade"><main id="main">{children}</main></ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
