import type { Content } from "./types.ts";
import { prices } from "./site.ts";

/* ==========================================================================
   Английская версия.

   Кому она нужна на казахстанском сайте: покупателям-иностранцам,
   релокантам и экспатам в Алматы, а ещё это заметная часть портфолио —
   заказчику видно, что вы умеете делать многоязычные сайты.

   Если позже понадобится американский рынок, эта версия станет
   основой: поменять валюту, город и термины — и всё.
   ========================================================================== */

export const en: Content = {
  meta: {
    title: "Home Staging in Almaty",
    description:
      "We prepare Almaty apartments for sale: furniture, styling, lighting, photography. Vacant from 350,000 ₸, occupied from 180,000 ₸, consultations from 25,000 ₸.",
  },

  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  labels: {
    skipLink: "Skip to content",
    menu: "Menu",
    mainNav: "Main",
    footerNav: "Footer",
    langSwitch: "Language",
    before: "Before",
    after: "After",
    sliderHint: "Drag to compare the room before and after staging",
    photo: "Photo",
    photoBefore: "Before",
    photoAfter: "After",
  },

  buttons: {
    quote: "Get a Free Quote",
    work: "See Our Work",
    consultation: "Book a Consultation",
    learnMore: "Learn more",
    seeAll: "See all 180 projects",
  },

  hero: {
    heading: "Your apartment has been listed for months? It's rarely the price.",
    subheading:
      "We stage Almaty apartments for sale — furniture, lighting, photography. Buyers see a home they want to live in, not empty walls. On average: 24 days faster and 6% above asking.",
  },

  problem: {
    heading: "An empty room doesn't look bigger. It looks smaller.",
    body: [
      "Buyers can't picture furniture that isn't there. With nothing to measure against, an 18-square-metre room reads as cramped and a bedroom without a bed reads as storage. And if you still live there, all they see is someone else's belongings — never themselves.",
      "The decision is made in the first ninety seconds of a viewing. The layout gets the blame, not the emptiness or the clutter.",
      "That's the problem we solve. The furniture and styling are ours — we bring it in and take it away.",
    ],
  },

  stats: [
    { value: "24", unit: "days", label: "faster to sale than unstaged apartments" },
    { value: "6", unit: "%", label: "average sale price over asking" },
    { value: "180", unit: "+", label: "Almaty apartments staged since 2021" },
    {
      value: "73",
      unit: "%",
      label: "of agents say staging helps buyers picture a home as their own",
      source: "National Association of Realtors, USA",
    },
  ],

  services: {
    eyebrow: "Services",
    title: "Three ways to work with us.",
    items: [
      {
        slug: "vacant",
        name: "Vacant Apartment Staging",
        price: `from ${prices.vacant}`,
        summary:
          "The apartment is empty. We furnish it completely in one day — furniture, textiles, lighting, styling. We collect everything after the sale.",
      },
      {
        slug: "occupied",
        name: "Occupied Apartment Staging",
        price: `from ${prices.occupied}`,
        summary:
          "You still live there. We work with what you own, remove the excess, add what's missing — and it photographs like a magazine spread.",
      },
      {
        slug: "consultation",
        name: "Consultation",
        price: `from ${prices.consultation}`,
        summary:
          "Two hours, room by room, and a written plan you can execute yourself. Credited back if you book a full staging.",
      },
    ],
  },

  work: {
    eyebrow: "Recent work",
    title: "Drag the handle to see the difference.",
    items: [
      {
        slug: "alatau-2k",
        title: "Two-bedroom, Alatau complex, Bostandyq district",
        type: "Vacant",
        room: "Living room",
      },
      {
        slug: "medeu-studio",
        title: "Studio, Medeu district",
        type: "Vacant",
        room: "Open plan",
      },
      {
        slug: "almaly-3k",
        title: "Three-bedroom, Almaly district",
        type: "Occupied",
        room: "Kitchen",
      },
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "Four steps, one day on site.",
    items: [
      {
        step: "01",
        name: "Walkthrough",
        body: "We visit, photograph every room, and quote within 48 hours.",
      },
      {
        step: "02",
        name: "Design",
        body: "We pull from our own 200 m² warehouse. No two apartments get the same furniture.",
      },
      {
        step: "03",
        name: "Install",
        body: "One day, start to finish. By evening the apartment is ready to photograph and show.",
      },
      {
        step: "04",
        name: "Sell",
        body: "We collect everything after closing. Nothing for you to arrange.",
      },
    ],
  },

  testimonials: {
    eyebrow: "What people say",
    items: [
      {
        quote:
          "It sat on the market for four months and we dropped the price twice. After staging it sold in three weeks, above our original asking price. I'm still annoyed I waited.",
        name: "Dinara Sarsenova",
        role: "Seller, Bostandyq district",
      },
      {
        quote:
          "Every vacant listing goes to Tal & Tas now. My sellers see the photos and stop asking me why we aren't cutting the price.",
        name: "Marat Yeldesov",
        role: "Agent, Almaty",
      },
      {
        quote:
          "We bought it to flip and it showed terribly. Staging cost 340,000 ₸ and we sold 3.2 million above our target. That's the whole argument.",
        name: "Aigerim Nurlanova",
        role: "Investor",
      },
    ],
  },

  finalCta: {
    heading: `Still deciding? Start with the ${prices.consultation} consultation.`,
    body: "Two hours, no pressure, and you'll know exactly what your apartment needs — whether you hire us or not.",
  },

  footer: {
    demoNotice:
      "Demonstration site. Tal & Tas is a fictional company built as a portfolio piece. The projects, testimonials, prices and statistics on this site are invented.",
  },

  notFound: {
    title: "That page doesn't exist",
    body: "There may be a typo in the address, or the page has moved. Head back to the homepage — everything is reachable from there.",
    button: "Go to homepage",
  },
};
