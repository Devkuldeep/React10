import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React10/',  // Replace <REPO_NAME> with the name of your GitHub repository
});

