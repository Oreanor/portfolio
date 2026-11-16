"use client";

import { usePathname } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { NotFoundContent } from "@/components/NotFound";

export default function NotFound() {
  const locale = usePathname().split("/")[1];
  return <NotFoundContent locale={isLocale(locale) ? locale : "en"} />;
}
