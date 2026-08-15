/* ==========================================================================
   Описание содержимого внутренних страниц: Услуги, Работы, О нас, Контакты.

   Почему отдельно от types.ts, а не в общей куче: тексты главной нужны
   на каждой странице (шапка, подвал), а эти — только на своей. Держать
   их врозь проще и понятнее.

   Как и там, здесь перечислено всё, что должно быть переведено.
   Забыть строчку в каком-то языке технически невозможно: не соберётся.
   ========================================================================== */

export interface Pages {
  services: {
    title: string;
    intro: string;
    priceNote: string;
    includesLabel: string;
    durationLabel: string;
    items: {
      slug: string;
      name: string;
      price: string;
      duration: string;
      description: string;
      includes: string[];
    }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
  };

  work: {
    title: string;
    intro: string;
    filterAll: string;
    filterLabel: string;
    areaLabel: string;
    resultLabel: string;
    items: {
      slug: string;
      title: string;
      /** «Пустая квартира» или «Жилая квартира» — по нему работает фильтр */
      type: string;
      room: string;
      area: string;
      result: string;
    }[];
  };

  about: {
    /* На этой странице заголовок — длинная фраза-история, она хороша
       на самой странице, но не годится для вкладки браузера и поисковика.
       Поэтому короткое название и описание заданы отдельно. */
    metaTitle: string;
    intro: string;
    title: string;
    story: string[];
    signature: string;
    principlesTitle: string;
    principles: { name: string; body: string }[];
    teamTitle: string;
    /** slug — имя файла с фотографией: public/photos/team/<slug>.webp */
    team: { slug: string; name: string; role: string }[];
  };

  /* Две РАЗНЫЕ страницы, и это принципиально.

     «Контакты» — как с нами связаться: телефон, WhatsApp, часы, районы.
     Человек приходит сюда, когда хочет позвонить прямо сейчас.

     «Рассчитать стоимость» — форма заявки. Другое намерение, другая страница.

     Раньше обе вели на один адрес: и пункт меню, и кнопка в шапке.
     Два элемента рядом, ведущие в одно место, — верный способ запутать. */
  contact: {
    title: string;
    intro: string;
    infoTitle: string;
    hoursLabel: string;
    hoursValue: string;
    areasLabel: string;
    phoneLabel: string;
    emailLabel: string;
    /** Карточка-переход на страницу расчёта */
    quoteTitle: string;
    quoteBody: string;
    quoteButton: string;
  };

  quote: {
    title: string;
    intro: string;
    form: {
      legend: string;
      name: string;
      email: string;
      emailHint: string;
      phone: string;
      phoneHint: string;
      whatsappTitle: string;
      whatsappBody: string;
      whatsappButton: string;
      or: string;
      address: string;
      area: string;
      areaHint: string;
      state: string;
      stateVacant: string;
      stateOccupied: string;
      timing: string;
      timingOptions: string[];
      message: string;
      optional: string;
      submit: string;
      note: string;
      errorRequired: string;
      errorEmail: string;
      errorPhone: string;
      successTitle: string;
      successBody: string;
      demoNotice: string;
    };
  };

  /* Призыв в конце страницы — свой для каждой.
     Одинаковый блок на всех страницах выдаёт шаблонный сайт: человек
     листает третью страницу и видит тот же текст, что и на первой.
     Цену повторяем только там, где она к месту — на главной и в услугах. */
  cta: {
    services: CtaBlock;
    work: CtaBlock;
    about: CtaBlock;
  };
}

export interface CtaBlock {
  heading: string;
  body: string;
  button: string;
}
