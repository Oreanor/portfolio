import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, categories } from "@/content/projects";
import { profile, siteUrl } from "@/content/profile";
import { ProjectGallery } from "@/components/ProjectMedia";
import { Arrow } from "@/components/Arrow";
import { copy, localPath, isLocale } from "@/lib/i18n";
import { alternates } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

type Props = { params: Promise<{ slug: string; locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug, locale);
  if (!project) notFound();
  return {
    title: project.name, description: project.summary,
    alternates: alternates(locale, `/projects/${project.slug}`),
    openGraph: { title: `${project.name} — Sergei Nikonets`, description: project.summary, type: "article" },
    twitter: { card: "summary_large_image", title: `${project.name} — Sergei Nikonets`, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const project = getProject(slug, locale);
  if (!project) notFound();
  const index = projects.findIndex((entry) => entry.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const category = categories.find((category) => category.id === project.category);
  const structuredData = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.name, description: project.summary, inLanguage: locale, author: { "@type": "Person", name: profile.name }, ...(siteUrl ? { url: `${siteUrl}${localPath(locale, `/projects/${project.slug}`)}` } : {}) };
  return (
    <div className="container project-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Link className="back-link" href={localPath(locale, "/#work")}>← {t.allProjects}</Link>
      <header className="project-intro"><div className="project-kicker"><p className="eyebrow">{category && t.categories[category.id]} / {project.kind}</p><span>{String(index + 1).padStart(2, "0")} / {projects.length}</span></div><h1>{project.name}</h1><p className="project-pitch">{project.tagline}</p><ul className="tech-tags">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul></header>
      <ProjectGallery project={project} locale={locale} />
      {project.disclaimer && <p className="disclaimer">{project.disclaimer}</p>}
      <div className="case-study">
        <section className="case-section"><h2>{t.idea}</h2><p className="large-copy">{project.idea}</p></section>
        {project.gameplay && <section className="case-section"><h2>{t.gameplay}</h2><div className="decisions">{project.gameplay.map((step) => <div key={step.title}><h3>{step.title}</h3><p>{step.description}</p></div>)}</div></section>}
        <section className="case-section"><h2>{t.different}</h2><ol className="feature-list">{project.features.map((feature, index) => <li key={feature}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{feature}</p></li>)}</ol></section>
        <section className="case-section"><h2>{t.decisions}</h2><div className="decisions">{project.decisions.map((decision) => <div key={decision.title}><h3>{decision.title}</h3><p>{decision.description}</p></div>)}</div></section>
        <section className="case-section"><h2>{t.howWorked}</h2><div><p>{project.contribution}</p><p className="workflow-note">{t.workflow}</p></div></section>
        <section className="case-section"><h2>{t.status}</h2><div><p>{project.status}</p>{project.links.length > 0 && <div className="project-links">{project.links.map((link) => <a className="button-link" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.url.includes("github.com") ? t.repository : project.category === "games" ? t.play : t.live} <Arrow diagonal /></a>)}</div>}</div></section>
      </div>
      <nav className="project-pagination" aria-label={t.allProjects}><Link href={localPath(locale, "/#work")} className="text-link">← {t.allProjects} ({projects.length})</Link><Link href={localPath(locale, `/projects/${next.slug}`)} className="next-project"><span>{t.nextProject}</span><strong>{next.name} <Arrow /></strong></Link></nav>
    </div>
  );
}
