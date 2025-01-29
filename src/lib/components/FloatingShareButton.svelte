<!-- src/lib/components/FloatingShareButton.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { Share2 } from 'lucide-svelte';
  import { language } from '$lib/stores';
  
  let visible = false;
  
  onMount(() => {
    const handleScroll = () => {
      visible = window.scrollY > 300;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const labels = {
    share: {
      en: 'Share',
      sv: 'Dela'
    }
  };
</script>

<div
  class="fixed bottom-4 right-4 transform transition-transform duration-300"
  class:translate-y-20={!visible}
  class:translate-y-0={visible}
>
  <button
    class="bg-secondary text-background p-3 rounded-full shadow-lg hover:bg-secondary/90 transition-colors flex items-center space-x-2"
  >
    <Share2 class="w-5 h-5" />
    <span class="font-medium">{labels.share[$language]}</span>
  </button>
</div>

<style>
  /* Add a subtle shadow without blur */
  button {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
</style>
