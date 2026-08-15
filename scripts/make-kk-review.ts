/**
 * Собирает таблицу для вычитки казахского перевода.
 *
 * Проходит по русскому и казахскому файлам одновременно и выписывает
 * каждую фразу парой: слева русский оригинал, справа мой казахский
 * и пустая клетка под исправление.
 *
 * Человеку, который будет вычитывать, не нужно ничего знать о коде —
 * он просто заполняет третью колонку.
 *
 * Запуск:  npm run kk-review
 */

import { ru } from "../src/data/ru.ts";
import { kk } from "../src/data/kk.ts";
import { writeFileSync } from "node:fs";

type Anything = unknown;

/** Разворачивает вложенную структуру в плоский список «путь → строка». */
function flatten(value: Anything, path: string[] = []): [string, string][] {
  if (typeof value === "string") return [[path.join("."), value]];

  if (Array.isArray(value)) {
    return value.flatMap((item, i) => flatten(item, [...path, String(i)]));
  }

  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) =>
      flatten(item, [...path, key]),
    );
  }

  return [];
}

const rows = flatten(ru);
const kkMap = new Map(flatten(kk));

/* Строки, которые переводить не надо: цифры, проценты, номера шагов.
   Незачем гонять человека по клеткам, где и так всё одинаково. */
const skip = (a: string, b: string) => a === b || /^[\d\s%+.,₸-]+$/.test(a);

const lines: string[] = [
  "# Вычитка казахского перевода",
  "",
  "**Что нужно сделать.** В третьей колонке напишите правильный вариант.",
  "Если строка переведена нормально — оставьте клетку пустой, я пойму,",
  "что менять не надо. Код трогать не нужно, я перенесу правки сам.",
  "",
  "**На что смотреть в первую очередь:**",
  "",
  "- окончания падежей — самое частое место, где ошибается неноситель;",
  "- канцелярит и калька с русского: фразы, которые по-казахски так не говорят;",
  "- термины. Для «хоум-стейджинга» устоявшегося казахского слова нет —",
  "  подскажите, как это принято называть, или предложите своё;",
  "- обращение к клиенту: везде ли уместно «сіз» и звучит ли естественно.",
  "",
  "Названия компании (Tal & Tas) и имена людей переводить не надо.",
  "",
  "---",
  "",
  "| № | Русский оригинал | Мой казахский | Как правильно |",
  "|---|---|---|---|",
];

let n = 0;
for (const [key, rusText] of rows) {
  const kkText = kkMap.get(key);
  if (!kkText || skip(rusText, kkText)) continue;

  n += 1;
  const cell = (s: string) => s.replace(/\|/g, "\\|");
  lines.push(`| ${n} | ${cell(rusText)} | ${cell(kkText)} |  |`);
}

lines.push("", `_Всего строк для проверки: ${n}._`);

writeFileSync("docs/04-kazakh-review.md", lines.join("\n") + "\n");
console.log(`Готово: docs/04-kazakh-review.md, строк — ${n}`);
