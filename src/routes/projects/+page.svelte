<!-- src/routes/projects/+page.svelte -->
<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import ShareCard from '$lib/components/ShareCard.svelte';
  import { projects } from '$lib/data/projects';
  import { language } from '$lib/stores';
  import ShareButtons from '$lib/components/ShareButtons.svelte';
  import SEO from '$lib/components/SEO.svelte';
  
  const content = {
    title: {
      en: 'Our Projects',
      sv: 'Våra Projekt'
    },
    subtitle: {
      en: 'Explore our ecosystem of tools and platforms',
      sv: 'Utforska vårt ekosystem av verktyg och plattformar'
    },
    sections: {
      launched: {
        en: 'Launched Projects',
        sv: 'Lanserade Projekt'
      },
      inProgress: {
        en: 'In Development',
        sv: 'Under Utveckling'
      },
      upcoming: {
        en: 'Coming Soon',
        sv: 'Kommer Snart'
      }
    }
  };
  
  $: launchedProjects = projects.filter(p => p.status === 'launched');
  $: inProgressProjects = projects.filter(p => p.status === 'in-progress');
  $: upcomingProjects = projects.filter(p => p.status === 'upcoming');
</script>

<SEO 
  title={$language === 'en' ? 'Projects - Izelize' : 'Projekt - Izelize'}
  description={$language === 'en'
    ? 'Explore our ecosystem of tools and platforms for knowledge integration and personal growth.'
    : 'Utforska vårt ekosystem av verktyg och plattformar för kunskapsintegration och personlig utveckling.'}
  path="/projects"
/>

<div class="theme-bg min-h-screen">
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {content.title[$language]}
      </h1>
      <p class="text-xl text-gray-300">
        {content.subtitle[$language]}
      </p>
    </div>
    
    <!-- Launched Projects -->
    {#if launchedProjects.length > 0}
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-8">
          {content.sections.launched[$language]}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each launchedProjects as project (project.name)}
            <ProjectCard {project} />
              <ShareCard 
                title={project.name}
                description={project.description[$language]}
                image={project.logo}
              />
          {/each}
        </div>
      </section>
    {/if}
    
    <!-- In Progress Projects -->
    {#if inProgressProjects.length > 0}
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-8">
          {content.sections.inProgress[$language]}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each inProgressProjects as project (project.name)}
            <ProjectCard {project} />
              <ShareCard 
                title={project.name}
                description={project.description[$language]}
                image={project.logo}
              />
          {/each}
        </div>
      </section>
    {/if}
    
    <!-- Upcoming Projects -->
    {#if upcomingProjects.length > 0}
      <section>
        <h2 class="text-2xl font-bold mb-8">
          {content.sections.upcoming[$language]}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each upcomingProjects as project (project.name)}
            <ProjectCard {project} />
          {/each}
        </div>
      </section>
    {/if}
  </div>

  <div class="mt-20 pt-12 border-t border-gray-800">
    <div class="text-center">
      <ShareButtons 
        title={$language === 'en' 
          ? 'Izelize Projects - Our Ecosystem of Tools' 
          : 'Izelize Projekt - Vårt Ekosystem av Verktyg'
        }
        description={$language === 'en'
          ? 'Explore our ecosystem of tools and platforms for knowledge integration and personal growth.'
          : 'Utforska vårt ekosystem av verktyg och plattformar för kunskapsintegration och personlig utveckling.'
        }
      />
    </div>
  </div>
</div>

<style>
  :global(.theme-bg) {
    background-color: var(--background);
  }
</style>
