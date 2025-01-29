<!-- src/lib/components/ProjectCard.svelte -->
<script lang="ts">
  import type { Project } from '$lib/types';
  import StatusBadge from './StatusBadge.svelte';
  import { language } from '$lib/stores';
  
  export let project: Project;
</script>

{#if project.link}
  <a 
    href={project.link}
    class="block group"
  >
    <div class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform group-hover:scale-105">
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            {#if project.logo}
              <img src={project.logo} alt={`${project.name} logo`} class="w-8 h-8" />
            {/if}
            <h3 class="text-xl font-semibold text-gray-900">
              {project.name}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>
        
        <p class="text-gray-600">
          {project.description[$language]}
        </p>
        
        <div class="mt-4 flex items-center text-indigo-600">
          <span class="text-sm font-medium">
            {$language === 'en' ? 'Learn more' : 'Läs mer'}
          </span>
          <svg class="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </a>
{:else}
  <div class="block">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            {#if project.logo}
              <img src={project.logo} alt={`${project.name} logo`} class="w-8 h-8" />
            {/if}
            <h3 class="text-xl font-semibold text-gray-900">
              {project.name}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>
        
        <p class="text-gray-600">
          {project.description[$language]}
        </p>
      </div>
    </div>
  </div>
{/if}
