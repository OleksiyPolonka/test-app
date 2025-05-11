/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "dist", ".next"],
  },
});
