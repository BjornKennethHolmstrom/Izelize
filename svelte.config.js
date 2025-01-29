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
      base: process.env.NODE_ENV === 'production' ? '/Izelize' : ''
    },
    appDir: 'app',
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        const ignoredPaths = [
          '/favicon.png',
          '/favicon-16.png',
          '/favicon-32.png',
          '/favicon-48.png',
          '/apple-touch-icon.png',
          '/apple-touch-icon-152.png',
          '/apple-touch-icon-167.png',
          '/apple-touch-icon-180.png',
          '/safari-pinned-tab.svg',
          '/manifest.json'
        ];
        if (ignoredPaths.includes(path)) {
          console.warn(`Warning: Skipping missing asset: ${path}`);
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;

