import { getProjects, categories } from "@/content/projects";
import { profile, siteUrl } from "@/content/profile";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCatalog } from "@/components/ProjectCatalog";
import { SectionLink } from "@/components/SectionLink";
import { Arrow } from "@/components/Arrow";
import { copy, isLocale } from "@/lib/i18n";
import { alternates } from "@/lib/metadata";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { title: { absolute: `Sergei Nikonets — ${copy[locale].heroFirst} ${copy[locale].heroSecond}` }, alternates: alternates(locale) };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];
  const projects = getProjects(locale);
  const filters = categories.map((category) => ({ ...category, label: t.categories[category.id], count: category.id === "all" ? projects.length : projects.filter((project) => project.category === category.id).length }));
  const person = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: "Senior Frontend Engineer", sameAs: [profile.github], ...(siteUrl ? { url: siteUrl } : {}) };
  const aboutSections = [{ title: t.foundation, paragraphs: t.foundationCopy }, { title: t.independentTitle, paragraphs: t.independentCopy }, { title: t.aiTitle, paragraphs: t.aiCopy }];
  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div><h1 id="hero-title">{t.heroFirst}<br /><em>{t.heroSecond}</em></h1><p className="hero-description">{t.heroDescription}</p></div>
          <aside className="hero-aside">
            <dl className="hero-facts">{t.heroFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
            <SectionLink locale={locale} section="about" className="text-link">{t.about} <Arrow diagonal /></SectionLink>
          </aside>
        </div>
      </section>
      <section id="work" className="work-section section-rule" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">{t.independent} <sup>({projects.length})</sup></h2></div>
        <ProjectCatalog filters={filters} locale={locale}>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} locale={locale} />)}</ProjectCatalog>
      </section>
      <section id="about" className="about-section section-rule" aria-labelledby="about-title">
        <div className="section-heading"><h2 id="about-title">{t.about}</h2></div>
        <div className="about-content">
          {aboutSections.map((section) => <section className="case-section" key={section.title}><h2>{section.title}</h2><div>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}
          <section className="case-section"><h2>{t.portfolio}</h2><div className="approach-list">{(["tools", "data", "games"] as const).map((category, index) => <p key={category}><strong>{t.categories[category]}</strong><span>{t.categoryDescriptions[index]}</span></p>)}<SectionLink locale={locale} section="work" className="text-link">{t.allCount} <Arrow /></SectionLink></div></section>
        </div>
      </section>
    </div>
  );
}
