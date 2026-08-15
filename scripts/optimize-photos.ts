/**
 * Готовит фотографии для сайта.
 *
 * Что делает: берёт файлы из папки photos-source, обрезает под нужное
 * соотношение сторон, уменьшает до разумного размера, переводит в формат
 * WebP и раскладывает по папкам внутри public/photos.
 *
 * Зачем это нужно. Нейросеть выдаёт картинки по 2–5 мегабайт. Если положить
 * их на сайт как есть, страница с шестью парами «до/после» будет весить
 * тридцать мегабайт — на телефоне через мобильный интернет она не откроется
 * никогда. После обработки каждая станет примерно 80–150 килобайт, и разницы
 * на глаз не будет.
 *
 * WebP — формат картинок, который весит на треть меньше JPG при том же
 * качестве. Его понимают все браузеры уже много лет.
 *
 * Как пользоваться:
 *   1. положить файлы в папку photos-source, назвав их точно как в docs/05-photos.md
 *   2. выполнить:  npm run photos
 *   3. обновить страницу в браузере
 *
 * Исходники в photos-source остаются нетронутыми — их можно обработать
 * заново в любой момент, если понадобится другой размер.
 */

import sharp from "sharp";
import { readdirSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, parse } from "node:path";

const SOURCE = "photos-source";
const TARGET = "public/photos";

/* Куда какой файл кладём и с какой формой кадра.
   Ключ — начало имени файла. */
const rules: { match: RegExp; folder: string; width: number; ratio: number }[] = [
  // Квартиры «до/после»: широкий кадр 3:2
  { match: /-(before|after)$/, folder: "work", width: 1400, ratio: 3 / 2 },
  // Портрет основательницы: вертикальный кадр 3:4
  { match: /^founder$/, folder: "about", width: 900, ratio: 3 / 4 },
  // Сотрудники: квадрат
  { match: /^(ayana|saltanat|yerlan|dana)$/, folder: "team", width: 700, ratio: 1 },
];

if (!existsSync(SOURCE)) {
  console.error(`Папки ${SOURCE} нет. Создайте её и положите туда фотографии.`);
  process.exit(1);
}

const files = readdirSync(SOURCE).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

if (files.length === 0) {
  console.log(`В папке ${SOURCE} нет картинок. Класть сюда: .jpg, .png или .webp`);
  process.exit(0);
}

let сделано = 0;
const непонятные: string[] = [];

for (const file of files) {
  const name = parse(file).name;
  const rule = rules.find((r) => r.match.test(name));

  if (!rule) {
    непонятные.push(file);
    continue;
  }

  const dir = join(TARGET, rule.folder);
  mkdirSync(dir, { recursive: true });

  const out = join(dir, `${name}.webp`);

  /* Считаем размер кадра сами, а не полагаемся на готовые настройки.

     Задача: обрезать под нужную форму (например 3:2) и при этом никогда
     не растягивать маленькую картинку — от растягивания она мылится.

     Как считаем: берём самый большой прямоугольник нужной формы, который
     влезает в исходник. Если картинка шире, чем надо, — режем бока;
     если выше — режем верх и низ. И только потом, если получилось больше
     разрешённого размера, уменьшаем. */
  const мета = await sharp(join(SOURCE, file)).metadata();
  const исхШирина = мета.width ?? rule.width;
  const исхВысота = мета.height ?? Math.round(rule.width / rule.ratio);

  const влезаетПоШирине = исхВысота * rule.ratio <= исхШирина;
  const кадрШирина = влезаетПоШирине ? исхВысота * rule.ratio : исхШирина;

  const ширина = Math.round(Math.min(rule.width, кадрШирина));
  const высота = Math.round(ширина / rule.ratio);

  await sharp(join(SOURCE, file))
    // cover обрезает лишнее по краям, а не сплющивает картинку
    .resize(ширина, высота, { fit: "cover", position: "centre" })
    .webp({ quality: 82 })
    .toFile(out);

  const было = statSync(join(SOURCE, file)).size;
  const стало = statSync(out).size;
  const итог = await sharp(out).metadata();

  console.log(
    `  ${file}` +
      `\n      ${Math.round(было / 1024)} КБ → ${Math.round(стало / 1024)} КБ` +
      `   (${итог.width}×${итог.height}, меньше в ${(было / стало).toFixed(1)} раза)`,
  );
  сделано += 1;
}

console.log(`\nОбработано: ${сделано}`);

if (непонятные.length) {
  console.log(
    `\nНе понял, куда положить (проверьте имя файла по docs/05-photos.md):\n` +
      непонятные.map((f) => `  ${f}`).join("\n"),
  );
}
