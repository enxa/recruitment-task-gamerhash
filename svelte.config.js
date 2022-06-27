import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    replace: [
      ['import.meta.env.VERCEL_ANALYTICS_ID', JSON.stringify(process.env.VERCEL_ANALYTICS_ID)]
    ]
  }),
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },

    vite: {
      resolve: {
        alias: {
          $animations: path.resolve("./src/animations"),
          $components: path.resolve("./src/components"),
          $lib: path.resolve("./src/lib")
        }
      }
    }
  }
};

export default config;
