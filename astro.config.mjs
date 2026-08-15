// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  /* Адрес, по которому сайт будет жить в интернете.
     Он нужен для карты сайта и для «канонических» ссылок — без него
     поисковик не знает, какой адрес у страницы главный.

     ⚠️ Сейчас здесь заглушка. Когда купим настоящий домен — заменить. */
  site: "https://taltas.kz",

  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    routing: {
      // Русский без приставки в адресе: "/" вместо "/ru/"
      prefixDefaultLocale: false,
    },
  },
});
