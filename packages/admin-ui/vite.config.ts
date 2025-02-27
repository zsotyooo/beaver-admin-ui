import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'; // This is for generating .d.ts files

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // Automatically inserts a `types` field in your package.json
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts', // Entry file for your components
      name: '@digital-beaver/admin-ui',
      fileName: (format) => `index.${format}.js`, // The name for the build output
      formats: ['es', 'cjs'], // Formats for module types (ES Module & CommonJS)
    },
    rollupOptions: {
      // External dependencies that should not be bundled
      external: ['vue', '@vueuse/core', 'tailwindcss'],
      output: {
        globals: {
          vue: 'Vue',
          '@vueuse/core': 'VueUse',
          tailwindcss: 'TailwindCSS',
        },
      },
    },
  },
});
