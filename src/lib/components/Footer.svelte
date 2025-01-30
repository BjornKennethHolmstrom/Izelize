<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { language } from '$lib/stores';
  import { Github } from 'lucide-svelte';
  import { base } from '$app/paths';

  const year = new Date().getFullYear();
  
  const footerSections = {
    about: {
      title: { en: 'About', sv: 'Om' },
      links: [
        { href: '{base}/about', en: 'Our Vision', sv: 'Vår Vision' },
        { href: '{base}/about#ecosystem', en: 'The Ecosystem', sv: 'Ekosystemet' }
      ]
    },
    contact: {
      title: { en: 'Contact', sv: 'Kontakt' },
      links: [
        { href: '{base}/contact', en: 'Get in Touch', sv: 'Kontakta Oss' },
        { href: 'https://github.com/BjornKennethHolmstrom', external: true, en: 'GitHub', sv: 'GitHub' }
      ]
    },
    support: {
      title: { en: 'Support', sv: 'Support' },
      links: [
        { href: '{base}/support', en: 'Documentation', sv: 'Dokumentation' },
        { href: '{base}/support#contribute', en: 'Contribute', sv: 'Bidra' }
      ]
    }
  };
</script>

<footer class="footer-bg backdrop-blur-sm mt-16">
  <div class="max-w-6xl mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {#each Object.entries(footerSections) as [key, section]}
        <div>
          <h3 class="text-lg font-semibold mb-4">{section.title[$language]}</h3>
          <ul class="space-y-2">
            {#each section.links as link}
              <li>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  class="text-sm text-gray-400 hover:text-secondary transition-colors"
                >
                  {link[$language]}
                  {#if link.external}
                    <Github class="inline-block w-4 h-4 ml-1" />
                  {/if}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    
    <div class="border-t border-gray-800 pt-8">
      <p class="text-center text-sm text-gray-400">
        © {year} Izelize. {$language === 'en' ? 'All rights reserved.' : 'Alla rättigheter förbehållna.'}
      </p>
    </div>
  </div>
</footer>

<style>
  :global(.footer-bg) {
    background-color: rgba(var(--background-rgb), 0.5);
  }
</style>
