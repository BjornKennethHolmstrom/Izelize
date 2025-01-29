<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import { theme } from '$lib/stores';
  import { themeConfig } from '$lib/stores';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ThemeAndLanguageSwitcher from '$lib/components/ThemeAndLanguageSwitcher.svelte';
  import FloatingShareButton from '$lib/components/FloatingShareButton.svelte';
  import SEO from '$lib/components/SEO.svelte';
  
  $: currentTheme = themeConfig[$theme];
  $: path = $page.url.pathname;

  // Convert hex to RGB for background opacity support
  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
      : null;
  }
</script>

<SEO {path} />

<div 
  class="theme-root"
  style="
    --primary: {currentTheme.primary}; 
    --secondary: {currentTheme.secondary}; 
    --accent: {currentTheme.accent}; 
    --background: {currentTheme.background}; 
    --background-rgb: {hexToRgb(currentTheme.background)}; 
    --text: {currentTheme.text};
  "
>
  <div class="min-h-screen flex flex-col">
    <Header />
    <ThemeAndLanguageSwitcher />
    <main class="flex-grow">
      <slot />
    </main>
    <FloatingShareButton />
    <Footer />
  </div>
</div>

<style>
  :global(:root) {
    --primary: #5A189A;
    --secondary: #8AC926;
    --accent: #FFD60A;
    --background: #2B2D42;
    --text: #EDEDED;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  :global(.theme-root) {
    background-color: var(--background);
    color: var(--text);
    min-height: 100vh;
    width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Apply theme transitions to all themed elements */
  :global(*) {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
</style>
