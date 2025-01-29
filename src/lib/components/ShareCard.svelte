<!-- src/lib/components/ShareCard.svelte -->
<script lang="ts">
  import { language } from '$lib/stores';
  import ShareButtons from './ShareButtons.svelte';
  
  export let title: string;
  export let description: string;
  export let image = '/social-preview.png';
  
  const content = {
    shareProject: {
      en: 'Share this project',
      sv: 'Dela detta projekt'
    }
  };
</script>

<div class="bg-background/30 rounded-lg p-6 backdrop-blur-sm">
  <div class="flex items-start space-x-4">
    {#if image}
      <img 
        src={image} 
        alt={title}
        class="w-16 h-16 rounded-lg object-cover flex-shrink-0"
      />
    {/if}
    
    <div class="flex-grow">
      <h3 class="text-lg font-semibold mb-2">
        {content.shareProject[$language]}
      </h3>
      <ShareButtons {title} {description} />
    </div>
  </div>
</div>
