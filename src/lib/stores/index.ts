// src/lib/stores/index.ts
import { writable } from 'svelte/store';
import type { Theme, Language } from '../types';

// Theme store
export const theme = writable<Theme>('brand');

// Language store
export const language = writable<Language>('en');

// Theme configurations
export const themeConfig = {
  brand: {
    primary: '#5A189A',
    secondary: '#8AC926',
    accent: '#FFD60A',
    background: '#353B64',
    text: '#EDEDED'
  },
  dracula: {
    primary: '#BD93F9',
    secondary: '#50FA7B',
    accent: '#FFB86C',
    background: '#282A36',
    text: '#F8F8F2'
  }
} as const;
