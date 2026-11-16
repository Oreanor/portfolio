export const profile = {
  name: "Sergei Nikonets",
  github: "https://github.com/Oreanor",
  // Add only confirmed public contact details. No placeholder links are rendered.
  email: null as string | null,
  linkedin: null as string | null,
  cv: null as string | null,
};

// Set SITE_URL in the hosting environment when the real production domain is known.
// Until then, avoid publishing invented canonical URLs or localhost in a sitemap.
export const siteUrl = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).origin
  : undefined;
