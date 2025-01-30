import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.GITHUB_ACTIONS ? '/Izelize' : '' // ✅ Correctly sets base path only in GitHub Actions
    },
    appDir: 'app',
    prerender: {
      entries: ['*'], // Ensure full prerendering
      handleHttpError: ({ path, referrer, message }) => {
        console.warn(`Skipping prerendering error: ${message} at ${path}`);
      }
    }
  }
};

export default config;

