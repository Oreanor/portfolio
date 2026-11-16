import Link from "next/link";
import type { Project } from "@/types/project";
import { ProjectCover } from "./ProjectMedia";
import { Arrow } from "./Arrow";
import { copy, localPath, type Locale } from "@/lib/i18n";

export function ProjectCard({ project, index, locale }: { project: Project; index: number; locale: Locale }) {
  return (
    <article className="project-card" data-category={project.category}>
      <Link href={localPath(locale, `/projects/${project.slug}`)} className="project-card-link" aria-labelledby={`title-${project.slug}`}>
        <ProjectCover project={project} locale={locale} />
        <div className="card-heading"><span className="project-number">{String(index + 1).padStart(2, "0")}</span><h3 id={`title-${project.slug}`}>{project.name}</h3><Arrow diagonal /></div>
        <p className="card-tagline">{project.tagline}</p>
        <ul className="tech-tags" aria-label={copy[locale].technologies}>{project.tech.slice(0, 3).map((tech) => <li key={tech}>{tech}</li>)}</ul>
      </Link>
    </article>
  );
}
