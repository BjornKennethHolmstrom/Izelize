// src/lib/types/index.ts
export type Theme = 'brand' | 'dracula';
export type Language = 'en' | 'sv';
export type ProjectStatus = 'launched' | 'in-progress' | 'upcoming';

export interface Project {
  name: string;
  description: {
    en: string;
    sv: string;
  };
  status: ProjectStatus;
  link?: string;
  logo?: string;
}

// Theme configuration types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface ThemeConfig {
  brand: ThemeColors;
  dracula: ThemeColors;
}
