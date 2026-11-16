import Image from "next/image";
import type { Project } from "@/types/project";
import { copy, type Locale } from "@/lib/i18n";

export function ProjectPlaceholder({ project, detail = false, locale }: { project: Project; detail?: boolean; locale: Locale }) {
  return (
    <div className={`project-placeholder tone-${project.accent}${detail ? " detail-placeholder" : ""}`}>
      <div className="media-top"><span>{project.kind}</span><span aria-hidden="true">↗</span></div>
      <div className="placeholder-motif" aria-hidden="true">{project.motif}</div>
      <div className="media-bottom"><span className="placeholder-label">{copy[locale].placeholder}</span><span aria-hidden="true">＋</span></div>
    </div>
  );
}

export function ProjectCover({ project, locale }: { project: Project; locale: Locale }) {
  const cover = project.media.find((media) => media.type === "image");
  if (!cover || cover.type !== "image") return <ProjectPlaceholder project={project} locale={locale} />;
  return <div className="project-cover"><Image src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 46vw, 590px" /></div>;
}

export function ProjectGallery({ project, locale }: { project: Project; locale: Locale }) {
  if (project.media.length === 0) {
    return <figure className="project-gallery"><ProjectPlaceholder project={project} locale={locale} detail /><figcaption>{copy[locale].placeholderNote}</figcaption></figure>;
  }
  return (
    <div className="gallery-list">
      {project.media.map((media) => (
        <figure key={media.src} className="project-gallery">
          {media.type === "image" ? (
            <a href={media.src} target="_blank" rel="noopener noreferrer" aria-label={`${copy[locale].fullImage}: ${media.alt}`}>
              <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(max-width: 1279px) 94vw, 1200px" />
            </a>
          ) : <video controls playsInline preload="none" poster={media.poster} aria-label={media.caption}><source src={media.src} type="video/mp4" /><a href={media.src}>{copy[locale].downloadVideo}</a></video>}
          <figcaption>{media.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
