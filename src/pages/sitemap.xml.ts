/**
 * Карта сайта — список всех страниц для поисковиков.
 *
 * Это не страница, а файл, который собирается на лету при сборке.
 * Расширение .ts вместо .astro как раз и означает «отдаём не страницу,
 * а данные». Открыть его можно по адресу /sitemap.xml
 *
 * Готовое дополнение для этого существует, но мы пишем сами — здесь
 * пятнадцать строк, зато видно, что внутри, и нет лишней зависимости.
 *
 * hreflang внутри карты говорит поисковику: вот эти два адреса —
 * одна и та же страница на разных языках, а не два разных материала.
 */
import type { APIRoute } from "astro";
import { languages, localize, type Lang } from "../i18n/utils";

/* Все внутренние адреса сайта. При добавлении новой страницы
   её надо дописать сюда — иначе поисковик про неё не узнает. */
const paths = ["/", "/services", "/work", "/about", "/contact", "/quote"];

export const GET: APIRoute = ({ site }) => {
  const base = site?.origin ?? "";
  const langs = Object.keys(languages) as Lang[];

  const urls = paths.flatMap((path) =>
    langs.map((lang) => {
      const alternates = langs
        .map(
          (other) =>
            `    <xhtml:link rel="alternate" hreflang="${languages[other].htmlLang}" href="${base}${localize(path, other)}" />`,
        )
        .join("\n");

      return `  <url>
    <loc>${base}${localize(path, lang)}</loc>
${alternates}
  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
