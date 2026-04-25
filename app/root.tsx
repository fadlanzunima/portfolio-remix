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
  { title: "Fadlan Zunima - Senior Frontend Engineer & Freelance React Developer" },
  { viewport: "width=device-width,initial-scale=1" },
  {
    name: "description",
    content: "Portfolio of Fadlan Zunima (fadlanz), a Senior Frontend Engineer from Bandung, Indonesia. Specializing in React, Next.js, and GraphQL. Available for freelance projects and remote collaboration."
  },
  { name: "keywords", content: "Fadlan Zunima, fadlanz, alanzunima, alanz, fadlan, Frontend Engineer, React Developer, Freelance Web Developer, Remote Developer, Next.js, GraphQL, TypeScript, UI/UX, Bandung, Indonesia, Hire Frontend Developer" },
  { name: "author", content: "Fadlan Zunima" },
  { property: "og:title", content: "Fadlan Zunima - Senior Frontend Engineer Portfolio" },
  { property: "og:description", content: "Expert Frontend Engineering services specializing in modern web technologies. Explore my projects and hire me for your next big idea." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://fadlanz-portfolio.vercel.app" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Fadlan Zunima - Senior Frontend Engineer" },
  { name: "twitter:description", content: "Professional Frontend Development and UI/UX design. Delivering high-performance web solutions." },
];

export default function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fadlan Zunima",
    "alternateName": ["fadlanz", "alanzunima", "alanz", "fadlan"],
    "jobTitle": "Senior Frontend Engineer",
    "url": "https://fadlanz-portfolio.vercel.app",
    "sameAs": [
      "https://github.com/fadlanzunima",
      "https://linkedin.com/in/fadlanzunima",
      "https://instagram.com/fdlnzunima",
      "https://www.facebook.com/fadlanzunima",
      "https://www.threads.net/@fdlnzunima",
      "https://x.com/alnzunima"
    ],
    "knowsAbout": ["React", "Next.js", "Vue.js", "GraphQL", "TypeScript", "Tailwind CSS", "Frontend Development", "Web Design"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bandung",
      "addressCountry": "Indonesia"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fadlan Zunima Portfolio",
    "url": "https://fadlanz-portfolio.vercel.app",
    "description": "Professional portfolio of Fadlan Zunima, Senior Frontend Engineer."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
        <link rel="canonical" href="https://fadlanz-portfolio.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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