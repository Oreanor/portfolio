import { ImageResponse } from "next/og";
import { copy, isLocale } from "@/lib/i18n";

export const alt = "Sergei Nikonets — Senior frontend engineer. Independent product builder.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = copy[isLocale(locale) ? locale : "en"];
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "70px 80px", background: "#f7f6f2", color: "#19211f", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 18, letterSpacing: "1px", color: "#216f62" }}>SERGEI NIKONETS / {t.role}</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: locale === "ru" ? 78 : 96, letterSpacing: "-4px", lineHeight: 1.1 }}><span>{t.heroFirst}</span><span style={{ fontStyle: "italic" }}>{t.heroSecond}</span></div>
    </div>, size,
  );
}
