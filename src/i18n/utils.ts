/* ==========================================================================
   Всё, что связано с языками, собрано здесь.

   Как устроены адреса:
     /       — русский (основной)
     /en/    — английский

   Русский идёт без приставки, потому что он основной для алматинского
   бизнеса.

   --------------------------------------------------------------------------
   КАЗАХСКИЙ ВРЕМЕННО ОТКЛЮЧЁН — 13.08.2026.

   Перевод писал не носитель языка, и он оказался неправильным. Сайт для
   Казахстана с плохим казахским хуже, чем сайт без казахского вообще:
   первое читается как неуважение, второе — просто как «пока не сделали».

   Ничего не удалено, работа не пропала. Черновик перевода лежит
   в src/data/kk.ts, лист для вычитки — в docs/04-kazakh-review.md.

   ЧТОБЫ ВЕРНУТЬ КАЗАХСКИЙ после вычитки, нужно три правки:
     1) убрать // у строки с kk в списке languages ниже;
     2) убрать // у импорта kk и у kk в dictionaries;
     3) создать файл src/pages/kk/index.astro по образцу src/pages/en/index.astro.
   Больше нигде ничего менять не надо.

   Точно так же добавляется и любой новый язык.
   --------------------------------------------------------------------------
   ========================================================================== */

import { ru } from "../data/ru";
import { en } from "../data/en";
// import { kk } from "../data/kk";
import type { Content } from "../data/types";

import { ruPages } from "../data/pages/ru";
import { enPages } from "../data/pages/en";
import type { Pages } from "../data/pages/types";

export const languages = {
  ru: { name: "Русский", short: "RU", htmlLang: "ru" },
  en: { name: "English", short: "EN", htmlLang: "en" },
  // kk: { name: "Қазақша", short: "ҚАЗ", htmlLang: "kk" },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "ru";

const dictionaries: Record<Lang, Content> = { ru, en /*, kk */ };

/** Возвращает все тексты для нужного языка. */
export function getContent(lang: Lang): Content {
  return dictionaries[lang];
}

/* Тексты внутренних страниц лежат отдельно — они нужны не везде.
   Запись Record<Lang, Pages> значит «на каждый язык обязательно свой набор».
   Когда вернём казахский, редактор сразу подчеркнёт, что для него
   внутренние страницы не переведены. Забыть не получится. */
const pageDictionaries: Record<Lang, Pages> = { ru: ruPages, en: enPages };

export function getPages(lang: Lang): Pages {
  return pageDictionaries[lang];
}

/**
 * Превращает внутренний адрес в адрес нужного языка.
 * localize("/services", "kk") → "/kk/services"
 * localize("/services", "ru") → "/services"
 */
export function localize(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}

/** Список всех языков со ссылками на текущую страницу. Нужен переключателю. */
export function languageLinks(currentPath: string, currentLang: Lang) {
  // Убираем языковую приставку, чтобы получить «чистый» адрес страницы
  const basePath =
    currentLang === defaultLang
      ? currentPath
      : currentPath.replace(new RegExp(`^/${currentLang}`), "") || "/";

  return (Object.keys(languages) as Lang[]).map((lang) => ({
    lang,
    ...languages[lang],
    href: localize(basePath, lang),
    isCurrent: lang === currentLang,
  }));
}
