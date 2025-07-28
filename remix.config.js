import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
      serverBuildFile: "functions/[[path]].js",
    }),
  ],
  build: {
    target: "esnext",
  },
  ssr: {
    target: "webworker",
    noExternal: true,
  },
});
