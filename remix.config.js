/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // Use the built-in PostCSS and Tailwind support
  tailwind: true,
  postcss: true,
  // Cloudflare Pages configuration
  serverBuildPath: "functions/[[path]].js",
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
};