import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Update the base path to "/"
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Remove the invalid mimeTypes property
  }
});
