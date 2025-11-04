import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const projectRoot = path.resolve(fileURLToPath(new URL(".", import.meta.url)));

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["utils/**/*.test.ts"],
    reporters: "default"
  },
  resolve: {
    alias: {
      "@": projectRoot
    }
  }
});
