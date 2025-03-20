import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfoliooo/", // Update the base path to match index.html
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Remove the invalid mimeTypes property
  }
});
