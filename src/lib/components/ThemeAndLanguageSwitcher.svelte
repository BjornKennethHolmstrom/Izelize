<!-- src/lib/components/ThemeAndLanguageSwitcher.svelte -->
<script lang="ts">
  import { Moon, Sun, Globe } from 'lucide-svelte';
  import { theme, language } from '$lib/stores';
  
  let isLanguageMenuOpen = false;
</script>

<div class="fixed top-4 right-4 flex gap-4 z-50">
  <!-- Language Switcher -->
  <div class="relative">
    <button 
      class="p-2 rounded-lg bg-background hover:bg-background/80 transition-colors"
      on:click={() => isLanguageMenuOpen = !isLanguageMenuOpen}
    >
      <Globe class="w-5 h-5 text-white" />
    </button>
    
    {#if isLanguageMenuOpen}
      <div 
        class="absolute right-0 mt-2 bg-background rounded-lg shadow-lg p-2 min-w-[100px]"
        on:mouseleave={() => isLanguageMenuOpen = false}
      >
        <button 
          class="w-full px-4 py-2 text-left text-white hover:bg-background/50 rounded transition-colors"
          class:font-bold={$language === 'en'}
          on:click={() => { $language = 'en'; isLanguageMenuOpen = false; }}
        >
          English
        </button>
        <button 
          class="w-full px-4 py-2 text-left text-white hover:bg-background/50 rounded transition-colors"
          class:font-bold={$language === 'sv'}
          on:click={() => { $language = 'sv'; isLanguageMenuOpen = false; }}
        >
          Svenska
        </button>
      </div>
    {/if}
  </div>
  
  <!-- Theme Switcher -->
  <button 
    class="p-2 rounded-lg bg-background hover:bg-background/80 transition-colors flex gap-2 items-center"
    on:click={() => $theme = $theme === 'brand' ? 'dracula' : 'brand'}
  >
    {#if $theme === 'brand'}
      <Sun class="w-5 h-5 text-white" />
    {:else}
      <Moon class="w-5 h-5 text-white" />
    {/if}
  </button>
</div>
