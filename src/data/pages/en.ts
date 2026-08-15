import type { Pages } from "./types";
import { prices, site } from "../site";

export const enPages: Pages = {
  services: {
    title: "Services and pricing",
    intro:
      "Three ways to work with us — from a written plan you carry out yourself, to fully furnishing an empty apartment in a single day. Prices below are honest starting points; the exact figure comes after we see the place, because it depends on floor area and room count.",
    priceNote:
      "The price depends on floor area, number of rooms and how long you need the furniture. After the walkthrough we give you a fixed figure and it doesn't change.",
    includesLabel: "What's included",
    durationLabel: "Timing",

    items: [
      {
        slug: "vacant",
        name: "Vacant apartment staging",
        price: `from ${prices.vacant}`,
        duration: "1 day on site, furniture stays up to 60 days",
        description:
          "The most common case and the most visible result. The apartment is empty, the buyer walks in and sees bare walls — nothing to hold their attention, nothing to judge the size of a room against. We bring our own furniture, lighting and styling and furnish the whole place in one day. After the sale we take it all away.",
        includes: [
          "site visit and measurements",
          "furniture and styling chosen for this specific apartment",
          "delivery, assembly, placement",
          "textiles, lighting, plants, tableware",
          "60 days of rental included",
          "removal after closing",
        ],
      },
      {
        slug: "occupied",
        name: "Occupied apartment staging",
        price: `from ${prices.occupied}`,
        duration: "1 day on site",
        description:
          "You still live there and you're not moving out before the sale. We work with what's already in place: remove the excess, rehang, rearrange, and add what's missing from our warehouse. The goal is for buyers to see the apartment rather than your life in it. Family photos, children's drawings and the fridge magnet collection all get in the way of them picturing themselves here.",
        includes: [
          "site visit and a room-by-room review",
          "a plan: what to remove, what to keep, what to add",
          "rearranging and rehanging",
          "missing decor and textiles from our warehouse",
          "preparation for the photo shoot",
        ],
      },
      {
        slug: "consultation",
        name: "Consultation with a written plan",
        price: `from ${prices.consultation}`,
        duration: "2 hours, written plan within 48 hours",
        description:
          "For people ready to do the work themselves. We spend two hours walking the apartment room by room and write up a plan: what to take out, what to move, what to buy and in what order. You then work through it at your own pace. If you later book a full staging, the consultation fee comes off the price.",
        includes: [
          "a 2-hour visit",
          "room-by-room review",
          "written plan in priority order",
          "shopping list with a rough budget",
          "advice on photos and the listing itself",
          "fee credited against a full staging",
        ],
      },
    ],

    faqTitle: "Frequently asked",
    faq: [
      {
        q: "How far in advance should I book?",
        a: "Usually one to two weeks. In spring and summer, when more places are selling, allow two to three.",
      },
      {
        q: "How long does the furniture stay, and what if the apartment doesn't sell?",
        a: "The base price covers 60 days. After that we extend month to month at 15% of the original figure. Most apartments sell well before then.",
      },
      {
        q: "What if there are children and pets?",
        a: "All the time. We choose pieces that survive a cat and a three-year-old, and we don't put glass at knee height.",
      },
      {
        q: "Does it actually pay for itself?",
        a: "Across our last 180 apartments the average spend on staging was 240,000 ₸ and the average gain on sale price was around 1.9 million. Do the arithmetic yourself.",
      },
      {
        q: "Do you do renovations?",
        a: "No. We don't paint walls or replace plumbing. If the apartment genuinely needs work we'll say so at the consultation, and tell you what pays off and what doesn't.",
      },
      {
        q: "Can I book photography only?",
        a: "Not on its own. Photography is part of staging. Shooting an unprepared apartment is pointless — a good camera will show the emptiness honestly.",
      },
    ],
  },

  work: {
    title: "Our work",
    intro:
      "Each pair is the same room before and after staging, shot from the same spot. Drag the handle in the middle of the photo.",
    filterAll: "All",
    filterLabel: "Show",
    areaLabel: "Area",
    resultLabel: "Result",

    items: [
      {
        slug: "alatau-2k",
        title: "Two-bedroom, Alatau complex",
        type: "Vacant",
        room: "Living room",
        area: "62 m²",
        result: "sold in 19 days, 4% above asking",
      },
      {
        slug: "medeu-studio",
        title: "Studio, Medeu district",
        type: "Vacant",
        room: "Open plan",
        area: "38 m²",
        result: "sold in 11 days",
      },
      {
        slug: "almaly-3k",
        title: "Three-bedroom, Almaly district",
        type: "Occupied",
        room: "Kitchen and living room",
        area: "94 m²",
        result: "sold in 27 days after four months on the market",
      },
      {
        slug: "bostandyk-2k",
        title: "Two-bedroom, Bostandyq district",
        type: "Occupied",
        room: "Bedroom",
        area: "58 m²",
        result: "three viewings in the first weekend",
      },
      {
        slug: "nauryzbay-house",
        title: "House, Nauryzbay district",
        type: "Vacant",
        room: "Living room",
        area: "180 m²",
        result: "sold in 42 days, 6% above asking",
      },
      {
        slug: "almaly-1k",
        title: "One-bedroom rental, Almaly district",
        type: "Occupied",
        room: "Main room",
        area: "41 m²",
        result: "let in 5 days, 20,000 ₸ above neighbouring units",
      },
    ],
  },

  about: {
    metaTitle: "About us",
    intro:
      "Tal & Tas was founded by a former estate agent. Here's how and why we started staging apartments, and the rules we work by.",
    title: "I spent eight years watching good apartments sit unsold",
    story: [
      "I worked as an estate agent in Almaty from 2013 to 2021. I'd walk into a good apartment — decent building, lively neighbourhood, fair price — and within thirty seconds I'd know it wasn't going to sell. Not because of the apartment. Because of what buyers couldn't see in it.",
      "At first I just asked owners to take out half their belongings and get the rugs off the walls. Then I started bringing my own lamps and throws. Places began moving faster, and other agents started asking what I was doing.",
      "In 2021 I stopped selling apartments and started preparing them for sale instead.",
      "Tal & Tas now runs a 200 m² warehouse and a crew of four. We've staged 180 apartments in Almaty. I still walk every one of them myself before quoting — because you cannot give an honest price from photos in a messenger app.",
    ],
    signature: "Ayana Doszhanova, founder",

    principlesTitle: "How we work",
    principles: [
      {
        name: "We quote once",
        body: "After the walkthrough the figure doesn't go up. If it turns out more furniture is needed, that's our mistake in the estimate, not an extra invoice for you.",
      },
      {
        name: "We say when staging isn't needed",
        body: "If your apartment will sell in a week regardless, we'll tell you. Taking money for unnecessary work is a short-term income and a long-term reputation problem.",
      },
      {
        name: "We don't pass off other people's work as ours",
        body: "The portfolio contains only what we did. Every pair is the same room from the same position, with no change of angle to flatter the result.",
      },
      {
        name: "One day on site",
        body: "We don't camp in your home for a week. We arrive in the morning; by evening it's ready to photograph.",
      },
    ],

    teamTitle: "Team",
    team: [
      { slug: "ayana", name: "Ayana Doszhanova", role: "Founder, visits and quoting" },
      { slug: "saltanat", name: "Saltanat Kim", role: "Furniture and styling" },
      { slug: "yerlan", name: "Yerlan Abishev", role: "Logistics and installation" },
      { slug: "dana", name: "Dana Ospanova", role: "Photography" },
    ],
  },

  contact: {
    title: "Contact",
    intro:
      "Call or message us on WhatsApp — we answer during working hours. If you want a price, the short request form is faster: we'll see the floor area and address straight away.",
    infoTitle: "How to reach us",
    hoursLabel: "Hours",
    hoursValue: "Mon–Sat, 9:00–19:00",
    areasLabel: "Districts we cover",
    phoneLabel: "Phone",
    emailLabel: "Email",
    quoteTitle: "Need a price?",
    quoteBody:
      "Send a request and we'll give you a range within one business day. Eight fields, about two minutes.",
    quoteButton: "Get a quote",
  },

  quote: {
    title: "Get a quote",
    intro:
      "Fill in the form or message us on WhatsApp — we'll reply within one business day with a price range. If you need an exact figure we'll arrange a visit. No chasing phone calls.",

    form: {
      legend: "Request a quote",
      name: "Your name",
      email: "Email",
      emailHint: "We'll send the quote by email if you prefer.",
      phone: "Phone",
      phoneHint: "We'll call or message you on WhatsApp — whichever suits you.",
      whatsappTitle: "Don't want to fill in a form?",
      whatsappBody:
        "Message us on WhatsApp — you can send photos of the apartment right there, which makes the quote more accurate.",
      whatsappButton: "Message on WhatsApp",
      or: "or",
      address: "Property address",
      area: "Floor area",
      areaHint: "Approximate, in square metres",
      state: "Is the apartment vacant or occupied?",
      stateVacant: "Vacant",
      stateOccupied: "Occupied",
      timing: "When do you plan to list it?",
      timingOptions: [
        "Already listed",
        "Within a month",
        "In 1–3 months",
        "Just looking into it",
      ],
      message: "Anything else",
      optional: "optional",
      submit: "Send request",
      note: "We reply within one business day. No sales calls unless you ask.",
      errorRequired: "Please fill this in",
      errorEmail: "Please check the email address",
      errorPhone: "Please check the phone number",
      successTitle: "Request sent",
      successBody: "Thank you. We'll reply within one business day, usually sooner.",
      demoNotice:
        "This is a demonstration site: the form validates your input but doesn't send anywhere. On a real site this is where email delivery gets connected.",
    },
  },

  cta: {
    services: {
      heading: "The exact price comes after we see the place",
      body: `Send a request — we'll visit, look around and give you a figure that doesn't change afterwards. Or call: ${site.phone}`,
      button: "Send a request",
    },

    work: {
      heading: "Want your apartment photographed like this?",
      body: "Send a couple of photos on WhatsApp and we'll tell you what can be done with it and what it would cost. Free, no obligation.",
      button: "Talk about your apartment",
    },

    about: {
      heading: "I'll come and look at it myself",
      body: "I walk every apartment personally before quoting. You cannot give an honest figure from photos in a messenger app.",
      button: "Arrange a visit",
    },
  },
};
