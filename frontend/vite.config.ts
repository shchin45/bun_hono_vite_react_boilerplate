import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/

export default defineConfig({
  base: "./",
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@server": path.resolve(__dirname, "../server"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["fs", "path", "crypto"],
    },
  },
  // Skip server module resolution during build
  optimizeDeps: {
    exclude: ["@server/app"],
  },
});
