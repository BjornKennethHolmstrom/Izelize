<!-- src/lib/components/SEO.svelte -->
<script lang="ts">
  import { language } from '$lib/stores';

  export let title = '';
  export let description = '';
  export let path = '';

  const defaultContent = {
    title: {
      en: 'Izelize - Transform Ideas into Impact',
      sv: 'Izelize - Förvandla Idéer till Påverkan'
    },
    description: {
      en: 'A harmonious ecosystem of tools for knowledge integration, personal growth, and collaborative innovation.',
      sv: 'Ett harmoniskt ekosystem av verktyg för kunskapsintegration, personlig utveckling och samarbetsinnovation.'
    }
  };

  // Use provided values or fallback to defaults
  $: pageTitle = title || defaultContent.title[$language];
  $: pageDescription = description || defaultContent.description[$language];
  
  // Construct full URL
  $: fullUrl = `https://bjornkennethholmstrom.github.io/Izelize${path}`;
  
  // Image paths
  const ogImage = '/social-preview.png';
  const favicon = '/favicon.png';
  const fullImageUrl = `https://bjornkennethholmstrom.github.io/Izelize${ogImage}`;
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={fullUrl} />

  <!-- Favicon -->
  <link rel="icon" href={favicon} />
  <link rel="apple-touch-icon" href={favicon} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={fullUrl} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:image" content={fullImageUrl} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={fullUrl} />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={fullImageUrl} />

  <!-- Additional Meta Tags -->
  <meta name="theme-color" content="#2B2D42" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
