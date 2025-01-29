<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  import { language } from '$lib/stores';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import SEO from '$lib/components/SEO.svelte';
  
  const content = {
    title: {
      en: 'About Izelize',
      sv: 'Om Izelize'
    },
    mission: {
      title: {
        en: 'Our Mission',
        sv: 'Vårt Uppdrag'
      },
      content: {
        en: 'Izelize is dedicated to creating a harmonious ecosystem of tools that empower individuals and organizations to bring diverse ideas together, transforming them into impactful solutions through structured, interconnected approaches.',
        sv: 'Izelize är dedikerat till att skapa ett harmoniskt ekosystem av verktyg som ger individer och organisationer möjlighet att föra samman olika idéer och omvandla dem till verkningsfulla lösningar genom strukturerade, sammankopplade metoder.'
      }
    },
    vision: {
      title: {
        en: 'Our Vision',
        sv: 'Vår Vision'
      },
      content: {
        en: 'We envision a world where knowledge is integrated rather than fragmented, where collaboration transcends boundaries, and where innovation thrives through the synthesis of diverse ideas.',
        sv: 'Vi ser en värld där kunskap är integrerad snarare än fragmenterad, där samarbete överskrider gränser och där innovation frodas genom syntesen av olika idéer.'
      }
    },
    ecosystem: {
      title: {
        en: 'The Ecosystem',
        sv: 'Ekosystemet'
      },
      content: {
        en: 'Each "-ize" project in our ecosystem represents a unique approach to personal growth, knowledge integration, or collaborative innovation. Together, they form a comprehensive toolkit for transformation and impact.',
        sv: 'Varje "-ize"-projekt i vårt ekosystem representerar ett unikt sätt att närma sig personlig utveckling, kunskapsintegration eller samarbetsinnovation. Tillsammans bildar de en omfattande verktygslåda för förändring och påverkan.'
      }
    }
  };
</script>

<SEO 
  title={$language === 'en' ? 'About - Izelize' : 'Om - Izelize'}
  description={$language === 'en'
    ? 'Learn about our mission to create a harmonious ecosystem of tools for transformative impact.'
    : 'Läs om vårt uppdrag att skapa ett harmoniskt ekosystem av verktyg för transformativ påverkan.'}
  path="/about"
/>

<div class="max-w-4xl mx-auto px-4 py-16 theme-bg">
  <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center">
    {content.title[$language]}
  </h1>

  <div class="space-y-16">
    <!-- Mission Section -->
    <section>
      <h2 class="text-2xl font-bold mb-4 text-secondary">
        {content.mission.title[$language]}
      </h2>
      <p class="text-lg text-gray-300">
        {content.mission.content[$language]}
      </p>
    </section>

    <!-- Vision Section -->
    <section>
      <h2 class="text-2xl font-bold mb-4 text-secondary">
        {content.vision.title[$language]}
      </h2>
      <p class="text-lg text-gray-300">
        {content.vision.content[$language]}
      </p>
    </section>

    <!-- Ecosystem Section -->
    <section>
      <h2 class="text-2xl font-bold mb-4 text-secondary">
        {content.ecosystem.title[$language]}
      </h2>
      <p class="text-lg text-gray-300">
        {content.ecosystem.content[$language]}
      </p>
    </section>
  </div>

  <!-- Share section with a visual separator -->
  <div class="mt-20 pt-12 border-t border-gray-800">
    <ShareButtons 
      title={$language === 'en' ? 'About Izelize' : 'Om Izelize'}
      description={$language === 'en'
        ? 'Learn about our mission to create a harmonious ecosystem of tools for transformative impact.'
        : 'Läs om vårt uppdrag att skapa ett harmoniskt ekosystem av verktyg för transformativ påverkan.'
      }
    />
  </div>

</div>

<style>
  :global(.theme-bg) {
    background-color: var(--background);
  }
</style>
