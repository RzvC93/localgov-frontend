import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'LocalGovApp',
        short_name: 'GovApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2D9CDB',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@layout': path.resolve(__dirname, './src/layout'),
    },
  },
});
