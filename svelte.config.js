import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // Remove `index.html` fallback
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/Izelize' : '' // ✅ Base path should only be set in production
    },
    appDir: 'app',
    prerender: {
      entries: ['*'], // Ensure everything is prerendered
      handleHttpError: ({ path, referrer, message }) => {
        console.warn(`Skipping prerendering error: ${message} at ${path}`);
      }
    }
  }
};

export default config;

