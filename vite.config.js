import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/', // Base URL configuration
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // Add more aliases if needed
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "assets": path.resolve(__dirname, "src/assets"),
      "components": path.resolve(__dirname, "src/components"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 3000, // Default dev server port
    open: true, // Automatically open browser
  },
  build: {
    outDir: "dist", // Output directory
    assetsDir: "assets", // Assets directory
    emptyOutDir: true, // Clean output directory before build
  },
  define: {
    'process.env': {}, // For environment variables
  },
});