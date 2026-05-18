import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hnin-bd-wish/', 
  plugins: [react()],
})