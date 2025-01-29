<!-- src/lib/components/Favicon.svelte -->
<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <!-- Standard favicons -->
  <link rel="icon" type="image/svg+xml" href="{base}/favicon.svg" />
  <link rel="alternate icon" type="image/x-icon" href="{base}/favicon.ico" />

  <!-- PNG favicons -->
  <link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon-16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon-32.png" />
  <link rel="icon" type="image/png" sizes="48x48" href="{base}/favicon-48.png" />
  <link rel="icon" type="image/png" sizes="64x64" href="{base}/favicon-64.png" />
  <link rel="icon" type="image/png" sizes="128x128" href="{base}/favicon-128.png" />

  <!-- Apple Touch Icons -->
  <link rel="apple-touch-icon" href="{base}/apple-touch-icon.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="{base}/apple-touch-icon-152.png" />
  <link rel="apple-touch-icon" sizes="167x167" href="{base}/apple-touch-icon-167.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="{base}/apple-touch-icon-180.png" />

  <!-- Microsoft Tile -->
  <meta name="msapplication-TileImage" content="{base}/ms-tile-144.png" />
  <meta name="msapplication-TileColor" content="#353B64" />

  <!-- PWA icons -->
  <link rel="icon" type="image/png" sizes="192x192" href="{base}/logo192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="{base}/logo512.png" />

  <!-- Web Manifest -->
  <link rel="manifest" href="{base}/manifest.json" />
  <meta name="theme-color" content="#353B64" />
</svelte:head>

