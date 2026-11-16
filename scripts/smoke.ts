import assert from "node:assert/strict";
import { getProjects } from "../src/content/projects";
import { copy, languageTags, locales } from "../src/lib/i18n";

const origin = process.env.SMOKE_URL ?? "http://127.0.0.1:3002";
const escape = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#x27;");

async function getPage(path: string) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, path);
  return response.text();
}

async function main() {
for (const locale of locales) {
  const home = await getPage(`/${locale}`);
  assert.ok(home.includes(`<html lang="${languageTags[locale]}"`));
  assert.equal((home.match(/class="project-card"/g) ?? []).length, 11);
  assert.ok(home.includes(escape(copy[locale].categories.tools)));
  assert.ok(home.includes(copy[locale].placeholder));
  assert.ok(!/href="#"/.test(home));
  assert.ok(home.includes('id="work"'));
  assert.ok(home.includes('id="about"'));
  const aboutRedirect = await fetch(`${origin}/${locale}/about`, { redirect: "manual" });
  assert.equal(aboutRedirect.status, 307);
  assert.equal(new URL(aboutRedirect.headers.get("location")!, origin).hash, "#about");
  for (const project of getProjects(locale)) {
    const path = `/${locale}/projects/${project.slug}`;
    const html = await getPage(path);
    assert.ok(html.includes(`<h1>${escape(project.name)}</h1>`), `${path}: title`);
    assert.ok(html.includes(escape(project.idea)), `${path}: individual content`);
    assert.ok(html.includes(copy[locale].howWorked), `${path}: workflow`);
    assert.ok(html.includes("application/ld+json"), `${path}: structured data`);
    if (project.category === "games") assert.ok(html.includes(escape(copy[locale].gameplay)), `${path}: gameplay`);
  }
}

for (const [language, expected] of [["ru-RU,ru;q=0.9", "ru"], ["pt-BR", "pt"], ["de-DE", "en"], ["en-GB", "en"]]) {
  const response = await fetch(origin, { redirect: "manual", headers: { "accept-language": language } });
  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location")!, origin).pathname, `/${expected}`);
  assert.match(response.headers.get("vary") ?? "", /Accept-Language/i);
}
const savedLanguage = await fetch(origin, { redirect: "manual", headers: { cookie: "portfolio-language=pt", "accept-language": "ru" } });
assert.equal(new URL(savedLanguage.headers.get("location")!, origin).pathname, "/pt");
const legacy = await fetch(`${origin}/projects/city-rider?category=games`, { redirect: "manual", headers: { "accept-language": "ru" } });
assert.equal(new URL(legacy.headers.get("location")!, origin).pathname, "/ru/projects/city-rider");
assert.equal(new URL(legacy.headers.get("location")!, origin).search, "?category=games");
for (const path of ["/en/projects/does-not-exist", "/ru/projects/does-not-exist", "/pt/projects/does-not-exist", "/fr", "/missing"]) assert.equal((await fetch(`${origin}${path}`)).status, 404, path);
for (const locale of locales) {
  const image = await fetch(`${origin}/${locale}/opengraph-image`);
  assert.equal(image.status, 200);
  assert.match(image.headers.get("content-type") ?? "", /image\/png/);
}
await getPage("/robots.txt");
await getPage("/sitemap.xml");
console.log("PASS: 33 project pages, 3 homepages with work and experience sections, experience redirects, language negotiation, saved preference, legacy redirects, 404s, 3 OG images and SEO routes.");
}

main().catch((error: unknown) => { console.error(error); process.exitCode = 1; });
