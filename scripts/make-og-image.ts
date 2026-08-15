/**
 * Рисует картинку, которая показывается при отправке ссылки на сайт
 * в WhatsApp, Telegram или соцсети.
 *
 * Размер 1200×630 — стандарт, который понимают все площадки.
 *
 * Почему PNG, а не SVG: рисуем-то мы в SVG (это удобно, там просто текст
 * и фигуры), но WhatsApp и большинство соцсетей SVG не показывают. Поэтому
 * в конце превращаем в PNG с помощью sharp — она уже стоит вместе с Astro.
 *
 * Запуск:  npm run og
 */

import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { site } from "../src/data/site.ts";

/* Шрифт вшиваем прямо в SVG. Иначе sharp нарисует текст тем шрифтом,
   который найдётся в системе, и на другом компьютере картинка выйдет
   другой. Base64 — способ записать двоичный файл текстом. */
const fontData = readFileSync("public/fonts/literata-cyrillic.woff2").toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face {
        font-family: "Literata";
        src: url(data:font/woff2;base64,${fontData}) format("woff2");
      }
      .brand {
        font-family: "Literata", Georgia, serif;
        font-size: 30px;
        letter-spacing: 6px;
        fill: #6E6A63;
      }
      .head {
        font-family: "Literata", Georgia, serif;
        font-size: 72px;
        fill: #23272B;
      }
      .sub {
        font-family: "Literata", Georgia, serif;
        font-size: 34px;
        fill: #6E6A63;
      }
    </style>
  </defs>

  <rect width="1200" height="630" fill="#F7F4EF"/>

  <!-- Тот же знак, что и на вкладке браузера: ива и камень -->
  <path d="M92 128 C92 92, 105 70, 123 56" fill="none" stroke="#687A57" stroke-width="9" stroke-linecap="round"/>
  <rect x="137" y="62" width="9" height="66" rx="3" fill="#23272B"/>

  <text class="brand" x="92" y="210">TAL &amp; TAS</text>

  <text class="head" x="92" y="330">Предпродажная подготовка</text>
  <text class="head" x="92" y="420">квартир в Алматы</text>

  <text class="sub" x="92" y="510">Продаётся на 24 дня быстрее и на 6% дороже</text>

  <!-- Тонкая линия внизу вместо рамки: тот же приём, что и на сайте -->
  <rect x="92" y="556" width="1016" height="1" fill="#E3DED5"/>
  <text class="sub" x="92" y="600" style="font-size:26px">${site.areas}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");

writeFileSync("public/og-image.svg", svg.replace(/src: url\(data:font[^)]*\) format\("woff2"\);/, ""));
console.log("Готово: public/og-image.png (1200×630)");
