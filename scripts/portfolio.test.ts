import assert from "node:assert/strict";
import { test } from "node:test";
import { projects, getProjects } from "../src/content/projects";
import { projectTranslations } from "../src/content/project-translations";
import { copy, locales, preferredLocale, localPath } from "../src/lib/i18n";

test("all 11 projects have unique routes and the 3/2/6 category split", () => {
  assert.equal(projects.length, 11);
  assert.equal(new Set(projects.map((project) => project.slug)).size, 11);
  assert.deepEqual(["tools", "data", "games"].map((category) => projects.filter((project) => project.category === category).length), [3, 2, 6]);
});

test("every locale has complete project copy and all six games have a player experience", () => {
  for (const locale of locales) {
    if (locale !== "en") assert.deepEqual(Object.keys(projectTranslations[locale]).sort(), projects.map((project) => project.slug).sort());
    const localized = getProjects(locale);
    assert.equal(localized.length, 11);
    assert.equal(new Set(localized.map((project) => project.idea)).size, 11);
    for (const project of localized) {
      for (const value of [project.kind, project.tagline, project.summary, project.idea, project.contribution, project.status]) assert.ok(value.trim().length > 10, `${locale}/${project.slug} has incomplete copy`);
      assert.ok(project.features.length >= 3);
      assert.ok(project.decisions.length >= 2);
      if (project.category === "games") assert.equal(project.gameplay?.length, 3);
      if (locale !== "en") assert.notEqual(project.idea, projects.find((entry) => entry.slug === project.slug)?.idea);
      for (const link of project.links) assert.equal(new URL(link.url).protocol, "https:");
    }
    assert.ok(localized.find((project) => project.slug === "middle-earth")?.disclaimer);
    assert.ok(copy[locale].placeholder);
  }
});

test("browser language preference respects quality, regional tags and English fallback", () => {
  assert.equal(preferredLocale(null), "en");
  assert.equal(preferredLocale("ru-RU,ru;q=0.9,en;q=0.8"), "ru");
  assert.equal(preferredLocale("pt-PT,pt;q=0.9"), "pt");
  assert.equal(preferredLocale("pt-BR,en;q=0.5"), "pt");
  assert.equal(preferredLocale("en;q=0.2,ru;q=0.9"), "ru");
  assert.equal(preferredLocale("de-DE,de;q=0.9,ru;q=0.5"), "ru");
  assert.equal(preferredLocale("de-DE,de;q=0.9"), "en");
  assert.equal(preferredLocale("ru;q=0,en;q=1"), "en");
  assert.equal(localPath("pt", "/projects/city-rider"), "/pt/projects/city-rider");
});
