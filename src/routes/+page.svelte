<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { language } from '$lib/stores';
  import Logo from '$lib/components/Logo.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { base } from '$app/paths';
  
  const content = {
    hero: {
      title: {
        en: 'Transform Ideas into Impact',
        sv: 'Förvandla Idéer till Påverkan'
      },
      subtitle: {
        en: 'A harmonious ecosystem of tools for knowledge integration, personal growth, and collaborative innovation',
        sv: 'Ett harmoniskt ekosystem av verktyg för kunskapsintegration, personlig utveckling och samarbetsinnovation'
      },
      cta: {
        en: 'Explore Projects',
        sv: 'Utforska Projekt'
      }
    },
    features: [
      {
        title: { en: 'Knowledge Integration', sv: 'Kunskapsintegration' },
        description: {
          en: 'Connect insights across disciplines to create holistic solutions',
          sv: 'Koppla samman insikter över discipliner för att skapa holistiska lösningar'
        }
      },
      {
        title: { en: 'Personal Growth', sv: 'Personlig Utveckling' },
        description: {
          en: 'Tools and frameworks for conscious evolution and self-actualization',
          sv: 'Verktyg och ramverk för medveten utveckling och självförverkligande'
        }
      },
      {
        title: { en: 'Collaborative Innovation', sv: 'Samarbetsinnovation' },
        description: {
          en: 'Create impact together through shared vision and collective wisdom',
          sv: 'Skapa påverkan tillsammans genom delad vision och kollektiv visdom'
        }
      }
    ]
  };
</script>

<div class="relative">
  <!-- Hero Section with reduced height -->
  <section class="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 theme-bg"></div>
    
    <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <div class="mb-6 flex justify-center">
        <Logo className="w-48 h-48" />
      </div>
      
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {content.hero.title[$language]}
      </h1>
      
      <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        {content.hero.subtitle[$language]}
      </p>
      
      <a 
        href="{base}/projects"
        class="inline-block bg-secondary hover:bg-secondary/90 text-background font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {content.hero.cta[$language]}
      </a>
    </div>
  </section>

  <!-- Features Section with reduced padding -->
  <section class="py-12 theme-bg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each content.features as feature}
          <div class="p-6 rounded-lg bg-background/30">
            <h3 class="text-xl font-semibold mb-3">
              {feature.title[$language]}
            </h3>
            <p class="text-gray-300">
              {feature.description[$language]}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="py-16 theme-bg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col items-center">
        <ShareButtons 
          title={$language === 'en' 
            ? 'Izelize - Transform Ideas into Impact' 
            : 'Izelize - Förvandla Idéer till Påverkan'
          }
          description={$language === 'en'
            ? 'A harmonious ecosystem of tools for knowledge integration, personal growth, and collaborative innovation.'
            : 'Ett harmoniskt ekosystem av verktyg för kunskapsintegration, personlig utveckling och samarbetsinnovation.'
          }
        />
      </div>
    </div>
  </section>
</div>

<style>
  :global(.theme-bg) {
    background-color: var(--background);
  }
</style>
