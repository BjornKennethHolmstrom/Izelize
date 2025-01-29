<!-- src/routes/support/+page.svelte -->
<script lang="ts">
  import { language } from '$lib/stores';
  import { Heart, Github, Share2 } from 'lucide-svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import SEO from '$lib/components/SEO.svelte';
  
  const content = {
    title: {
      en: 'Support Our Projects',
      sv: 'Stöd Våra Projekt'
    },
    subtitle: {
      en: 'Help us keep our projects running and growing',
      sv: 'Hjälp oss hålla våra projekt igång och växande'
    },
    donation: {
      title: {
        en: 'Make a Donation',
        sv: 'Gör en Donation'
      },
      description: {
        en: 'Your donations help cover hosting costs and domain fees. When donating, please include a message specifying which project you\'d like to support.',
        sv: 'Dina donationer hjälper till att täcka värdkostnader och domänavgifter. När du donerar, vänligen inkludera ett meddelande som anger vilket projekt du vill stödja.'
      },
      button: {
        en: 'Donate via PayPal',
        sv: 'Donera via PayPal'
      }
    },
    contribute: {
      title: {
        en: 'Other Ways to Contribute',
        sv: 'Andra Sätt att Bidra'
      },
      options: [
        {
          icon: Share2,
          title: { en: 'Spread the Word', sv: 'Sprid Ordet' },
          description: {
            en: 'Share our projects with others who might find them useful.',
            sv: 'Dela våra projekt med andra som kan ha nytta av dem.'
          }
        },
        {
          icon: Heart,
          title: { en: 'Give Feedback', sv: 'Ge Feedback' },
          description: {
            en: 'Your feedback helps us improve and evolve our projects.',
            sv: 'Din feedback hjälper oss att förbättra och utveckla våra projekt.'
          }
        },
        {
          icon: Github,
          title: { en: 'Contribute Code', sv: 'Bidra med Kod' },
          description: {
            en: 'Visit our GitHub repositories to contribute directly to development.',
            sv: 'Besök våra GitHub-repositories för att bidra direkt till utvecklingen.'
          }
        }
      ]
    }
  };
</script>

<SEO 
  title={$language === 'en' ? 'Support - Izelize' : 'Support - Izelize'}
  description={$language === 'en'
    ? 'Support our ecosystem of tools and help us continue providing valuable resources for personal and collective growth.'
    : 'Stöd vårt ekosystem av verktyg och hjälp oss fortsätta tillhandahålla värdefulla resurser för personlig och kollektiv utveckling.'}
  path="/support"
/>

<div class="max-w-4xl mx-auto px-4 py-16">
  <div class="text-center mb-16">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">
      {content.title[$language]}
    </h1>
    <p class="text-xl text-gray-300">
      {content.subtitle[$language]}
    </p>
  </div>

  <!-- Donation Section -->
  <section class="bg-background/30 rounded-lg p-8 backdrop-blur-sm mb-16">
    <h2 class="text-2xl font-bold mb-4 text-secondary">
      {content.donation.title[$language]}
    </h2>
    <p class="text-gray-300 mb-8">
      {content.donation.description[$language]}
    </p>
    <a
      href="https://www.paypal.com/donate/?hosted_button_id=FX7FQMDQBAR4N"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center space-x-2 bg-secondary text-background font-semibold px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
    >
      <Heart class="w-5 h-5" />
      <span>{content.donation.button[$language]}</span>
    </a>
  </section>

  <!-- Other Contributions Section -->
  <section>
    <h2 class="text-2xl font-bold mb-8 text-secondary">
      {content.contribute.title[$language]}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each content.contribute.options as option}
        <div class="bg-background/20 p-6 rounded-lg backdrop-blur-sm">
          <svelte:component this={option.icon} class="w-8 h-8 text-secondary mb-4" />
          <h3 class="text-xl font-semibold mb-2">
            {option.title[$language]}
          </h3>
          <p class="text-gray-300">
            {option.description[$language]}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Share section with a visual separator -->
  <div class="mt-20 pt-12 border-t border-gray-800">
    <ShareButtons 
      title={$language === 'en' ? 'Support Izelize' : 'Stöd Izelize'}
      description={$language === 'en' 
        ? 'Support our ecosystem of tools and help us continue providing valuable resources for personal and collective growth.'
        : 'Stöd vårt ekosystem av verktyg och hjälp oss fortsätta tillhandahålla värdefulla resurser för personlig och kollektiv utveckling.'
      }
    />
</div>
</div>
