// localgov-frontend/vite.config.ts
import { defineConfig } from 'vitest/config'; // ← IMPORTANT: din 'vitest/config'
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@layout': fileURLToPath(new URL('./src/components/layout', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
