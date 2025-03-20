import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfoliooo/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'ts', 'tsx'],
      'text/javascript': ['js', 'ts', 'tsx'], // Add this line
      'text/css': ['css'],
    },
  },
});
