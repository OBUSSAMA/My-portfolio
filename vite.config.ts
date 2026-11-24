import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// polling makes hot-reload work inside Docker on Windows/macOS
export default defineConfig({ plugins: [react()], server: { host: true, port: 5173, watch: { usePolling: true } } });
