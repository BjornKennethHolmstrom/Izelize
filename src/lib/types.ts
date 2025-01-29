// src/lib/types.ts
export type Theme = 'brand' | 'dracula';
export type ProjectStatus = 'launched' | 'in-progress' | 'upcoming';
export type Language = 'en' | 'sv';

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

// src/lib/stores.ts
import { writable } from 'svelte/store';
import type { Theme, Language } from './types';

export const theme = writable<Theme>('brand');
export const language = writable<Language>('en');

// Theme configurations
export const themeConfig = {
  brand: {
    primary: '#5A189A',
    secondary: '#8AC926',
    accent: '#FFD60A',
    background: '#2B2D42',
    text: '#EDEDED'
  },
  dracula: {
    primary: '#BD93F9',
    secondary: '#50FA7B',
    accent: '#FFB86C',
    background: '#282A36',
    text: '#F8F8F2'
  }
};
