<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import { theme, language } from '$lib/stores';
  import Logo from './Logo.svelte';
  import { base } from '$app/paths';
  
  const navItems = [
    { id: 'projects', href: '{base}/projects', en: 'Projects', sv: 'Projekt' },
    { id: 'about', href: '{base}/about', en: 'About', sv: 'Om' },
    { id: 'contact', href: '{base}/contact', en: 'Contact', sv: 'Kontakt' }
  ];
</script>

<header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style="background-color: rgba(var(--background-rgb), 0.8)">
  <div class="max-w-6xl mx-auto px-4 py-4">
    <nav class="flex items-center justify-between">
      <a href="/" class="flex items-center space-x-3 group">
        <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
        <span class="text-2xl font-bold">Izelize</span>
      </a>

      <div class="flex items-center space-x-8">
        {#each navItems as item}
          <a 
            href={item.href}
            class="text-sm font-medium hover:text-secondary transition-colors"
          >
            {item[$language]}
          </a>
        {/each}
      </div>
    </nav>
  </div>
</header>

<!-- Spacer to prevent content from hiding under fixed header -->
<div class="h-16"></div>

<style>
  /* Ensure styles adapt to theme changes */
  header {
    transition: background-color 0.3s ease;
  }
</style>
