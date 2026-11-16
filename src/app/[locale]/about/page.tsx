import { notFound, redirect } from "next/navigation";
import { isLocale, localPath } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export default async function AboutRedirect({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  redirect(`${localPath(locale)}#about`);
}