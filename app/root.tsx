import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Analytics } from "@vercel/analytics/remix";

import globalStyles from "./styles/globals.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
  },
  // Favicon links
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
];

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: "Fadlan Zunima - Frontend Engineer Portfolio" },
  { viewport: "width=device-width,initial-scale=1" },
  {
    name: "description",
    content: "Portfolio website of Fadlan Zunima, a skilled Frontend Engineer from Bandung, Indonesia specializing in React, GraphQL, and modern web technologies."
  },
  { name: "keywords", content: "Frontend Engineer, React, GraphQL, JavaScript, TypeScript, Web Development, UI/UX, Bandung" },
  { name: "author", content: "Fadlan Zunima" },
  { property: "og:title", content: "Fadlan Zunima - Frontend Engineer Portfolio" },
  { property: "og:description", content: "Portfolio showcasing modern web applications and frontend engineering expertise from Bandung, Indonesia." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Fadlan Zunima - Frontend Engineer Portfolio" },
  { name: "twitter:description", content: "Portfolio showcasing modern web applications and frontend engineering expertise from Bandung, Indonesia." },
];

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-inter antialiased">
        <Outlet />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}