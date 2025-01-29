// src/lib/data/projects.ts
import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: "Spiralize",
    description: {
      en: "Explore and understand the Spiral Dynamics model through interactive tools and personal insights.",
      sv: "Utforska och förstå Spiral Dynamics-modellen genom interaktiva verktyg och personliga insikter."
    },
    status: "launched",
    link: "https://www.spiralize.org",
    logo: "/logos/spiralize.svg"
  },
  {
    name: "Systemize",
    description: {
      en: "Develop systems thinking and explore interconnected perspectives through structured learning paths.",
      sv: "Utveckla systemtänkande och utforska sammankopplade perspektiv genom strukturerade lärovägar."
    },
    status: "in-progress",
    link: "https://bjornkennethholmstrom.github.io/Systemize/",
    logo: "/logos/systemize.svg"
  },
  {
    name: "Incentivize",
    description: {
      en: "Discover your purpose, find motivation, and take actionable steps toward meaningful goals.",
      sv: "Upptäck ditt syfte, hitta motivation och ta konkreta steg mot meningsfulla mål."
    },
    status: "in-progress",
    link: "https://bjornkennethholmstrom.github.io/Incentivize/",
    logo: "/logos/incentivize.svg"
  },
  {
    name: "Sacralize",
    description: {
      en: "Create and explore sacred geometry patterns with modern tools and educational resources.",
      sv: "Skapa och utforska heliga geometriska mönster med moderna verktyg och utbildningsresurser."
    },
    status: "in-progress",
    link: "https://bjornkennethholmstrom.github.io/Sacralize/",
    logo: "/logos/sacralize.svg"
  },
  {
    name: "Synthesize",
    description: {
      en: "A central hub for integrating knowledge and creating holistic solutions.",
      sv: "En central plattform för att integrera kunskap och skapa holistiska lösningar."
    },
    status: "upcoming"
  }
];
