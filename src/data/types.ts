/* ==========================================================================
   Описание того, из чего состоит содержимое сайта.

   Зачем это нужно. Здесь перечислено всё, что должно быть переведено.
   Если в русской версии забыть хоть одну строчку, редактор подчеркнёт
   ошибку красным, а сборка сайта не пройдёт. То есть выпустить сайт
   с наполовину переведённой страницей просто не получится.

   Без такой проверки недопереведённые куски находят уже клиенты.
   ========================================================================== */

export interface Content {
  /** Служебное: заголовок вкладки и описание для поисковиков */
  meta: { title: string; description: string };

  nav: { label: string; href: string }[];

  labels: {
    skipLink: string;
    menu: string;
    mainNav: string;
    footerNav: string;
    langSwitch: string;
    before: string;
    after: string;
    sliderHint: string;
    /* «до» и «после» — только для квартир. Для портретов нужна
       обычная подпись: на портрете никакого «после» не бывает. */
    photo: string;
    photoBefore: string;
    photoAfter: string;
  };

  buttons: {
    quote: string;
    work: string;
    consultation: string;
    learnMore: string;
    seeAll: string;
  };

  hero: { heading: string; subheading: string };

  problem: { heading: string; body: string[] };

  stats: { value: string; unit: string; label: string; source?: string }[];

  services: {
    eyebrow: string;
    title: string;
    items: { slug: string; name: string; price: string; summary: string }[];
  };

  work: {
    eyebrow: string;
    title: string;
    items: { slug: string; title: string; type: string; room: string }[];
  };

  process: {
    eyebrow: string;
    title: string;
    items: { step: string; name: string; body: string }[];
  };

  testimonials: {
    eyebrow: string;
    items: { quote: string; name: string; role: string }[];
  };

  finalCta: { heading: string; body: string };

  footer: { demoNotice: string };

  /** Страница, которую видят при опечатке в адресе */
  notFound: { title: string; body: string; button: string };
}
