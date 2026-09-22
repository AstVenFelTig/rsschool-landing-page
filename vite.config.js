import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ command, mode }) => {
  return {
    base: command === "build" ? "rsschool-landing-page" : "/",
    root: ".",
    build: {
      outDir: "docs",
      sourcemap: true,
      rollupOptions: {
        input: {
          main: resolve(import.meta.dirname, "index.html"),
          catalog: resolve(import.meta.dirname, "catalog.html"),
        },
      },
    },
    css: {
      devSourcemap: true,
    },
    plugins: [
      ViteImageOptimizer({ disable: process.env.NODE_ENV !== "production" }),
    ],
  };
});
