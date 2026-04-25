var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/.pnpm/@remix-run+dev@2.8.1_@remix_0231befe999451c2f48d098c7b86698c/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@2.8.1_@remix_0231befe999451c2f48d098c7b86698c/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 63,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/.pnpm/@remix-run+dev@2.8.1_@remix_0231befe999451c2f48d098c7b86698c/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 113,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";

// app/styles/globals.css
var globals_default = "/build/_assets/globals-LCGND6N2.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: globals_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  // Favicon links
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
], meta = () => [
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
  { name: "twitter:description", content: "Professional Frontend Development and UI/UX design. Delivering high-performance web solutions." }
];
function App() {
  let jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fadlan Zunima",
    alternateName: ["fadlanz", "alanzunima", "alanz", "fadlan"],
    jobTitle: "Senior Frontend Engineer",
    url: "https://fadlanz-portfolio.vercel.app",
    sameAs: [
      "https://github.com/fadlanzunima",
      "https://linkedin.com/in/fadlanzunima",
      "https://instagram.com/fdlnzunima",
      "https://www.facebook.com/fadlanzunima",
      "https://www.threads.net/@fdlnzunima",
      "https://x.com/alnzunima"
    ],
    knowsAbout: ["React", "Next.js", "Vue.js", "GraphQL", "TypeScript", "Tailwind CSS", "Frontend Development", "Web Design"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "Indonesia"
    }
  }, websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fadlan Zunima Portfolio",
    url: "https://fadlanz-portfolio.vercel.app",
    description: "Professional portfolio of Fadlan Zunima, Senior Frontend Engineer."
  };
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "scroll-smooth", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "canonical", href: "https://fadlanz-portfolio.vercel.app" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 87,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(websiteJsonLd) }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 91,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "font-inter antialiased", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Analytics, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta2
});

// app/components/Hero.tsx
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter
} from "react-icons/fa/index.js";
import { SiThreads } from "react-icons/si/index.js";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Hero() {
  let scrollToSection = (sectionId) => {
    let element = document.getElementById(sectionId);
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxDEV3("section", { className: "min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" }, void 0, !1, {
        fileName: "app/components/Hero.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "relative z-10 text-center px-6 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl",
          children: [
            /* @__PURE__ */ jsxDEV3(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { delay: 0.2, type: "spring", stiffness: 100 },
                className: "w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1",
                children: /* @__PURE__ */ jsxDEV3(
                  "img",
                  {
                    src: "https://avatars.githubusercontent.com/u/22295679?v=4",
                    alt: "Fadlan Zunima (fadlanz / alanzunima) - Senior Frontend Engineer Profile",
                    className: "w-full h-full rounded-full object-cover"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Hero.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/Hero.tsx",
                lineNumber: 40,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              motion.h1,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.4 },
                className: "text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent",
                children: [
                  "Fadlan Zunima ",
                  /* @__PURE__ */ jsxDEV3("span", { className: "sr-only", children: "(fadlanz, alanzunima)" }, void 0, !1, {
                    fileName: "app/components/Hero.tsx",
                    lineNumber: 60,
                    columnNumber: 27
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Hero.tsx",
                lineNumber: 54,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              motion.h2,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.6 },
                className: "text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 font-medium",
                children: "Senior Frontend Engineer"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Hero.tsx",
                lineNumber: 63,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8 },
                className: "text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed",
                children: "Experienced Frontend Developer based in Bandung, Indonesia with 5+ years of experience building scalable and high performance web applications. Skilled in Vue.js, React.js, and Next.js, with a focus on UI/UX design, state management, and API integration. Passionate about creating responsive and efficient web solutions."
              },
              void 0,
              !1,
              {
                fileName: "app/components/Hero.tsx",
                lineNumber: 72,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1 },
                className: "flex flex-col sm:flex-row gap-4 justify-center mb-8",
                children: [
                  /* @__PURE__ */ jsxDEV3(
                    "button",
                    {
                      onClick: () => scrollToSection("projects"),
                      className: "px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
                      children: "View Work"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 92,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    "button",
                    {
                      onClick: () => scrollToSection("contact"),
                      className: "px-8 py-3 bg-white/20 backdrop-blur-sm text-gray-800 dark:text-white border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105",
                      children: "Contact Me"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 98,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Hero.tsx",
                lineNumber: 86,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV3(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.2 },
                className: "flex justify-center flex-wrap gap-6",
                children: [
                  /* @__PURE__ */ jsxDEV3(
                    "a",
                    {
                      href: "https://github.com/fadlanzunima",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300",
                      children: /* @__PURE__ */ jsxDEV3(FaGithub, { title: "GitHub" }, void 0, !1, {
                        fileName: "app/components/Hero.tsx",
                        lineNumber: 119,
                        columnNumber: 15
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 113,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    "a",
                    {
                      href: "https://linkedin.com/in/fadlanzunima",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300",
                      children: /* @__PURE__ */ jsxDEV3(FaLinkedin, { title: "LinkedIn" }, void 0, !1, {
                        fileName: "app/components/Hero.tsx",
                        lineNumber: 127,
                        columnNumber: 15
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 121,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    "a",
                    {
                      href: "https://x.com/alnzunima",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300",
                      children: /* @__PURE__ */ jsxDEV3(FaTwitter, { title: "X (Twitter)" }, void 0, !1, {
                        fileName: "app/components/Hero.tsx",
                        lineNumber: 135,
                        columnNumber: 15
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 129,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    "a",
                    {
                      href: "https://instagram.com/fdlnzunima",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-2xl text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300",
                      children: /* @__PURE__ */ jsxDEV3(FaInstagram, { title: "Instagram" }, void 0, !1, {
                        fileName: "app/components/Hero.tsx",
                        lineNumber: 143,
                        columnNumber: 15
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 137,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    "a",
                    {
                      href: "https://www.threads.net/@fdlnzunima",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-2xl text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300",
                      children: /* @__PURE__ */ jsxDEV3(SiThreads, { title: "Threads" }, void 0, !1, {
                        fileName: "app/components/Hero.tsx",
                        lineNumber: 151,
                        columnNumber: 15
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 145,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    "a",
                    {
                      href: "https://www.facebook.com/fadlanzunima",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors duration-300",
                      children: /* @__PURE__ */ jsxDEV3(FaFacebook, { title: "Facebook" }, void 0, !1, {
                        fileName: "app/components/Hero.tsx",
                        lineNumber: 159,
                        columnNumber: 15
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 153,
                      columnNumber: 13
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    "a",
                    {
                      href: "mailto:fadlanzunima@gmail.com",
                      className: "text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300",
                      children: /* @__PURE__ */ jsxDEV3(FaEnvelope, { title: "Email" }, void 0, !1, {
                        fileName: "app/components/Hero.tsx",
                        lineNumber: 165,
                        columnNumber: 15
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Hero.tsx",
                      lineNumber: 161,
                      columnNumber: 13
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Hero.tsx",
                lineNumber: 107,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Hero.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.5 },
          className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
          children: /* @__PURE__ */ jsxDEV3(
            "button",
            {
              onClick: () => scrollToSection("about"),
              className: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce",
              children: /* @__PURE__ */ jsxDEV3(FaArrowDown, { className: "text-2xl" }, void 0, !1, {
                fileName: "app/components/Hero.tsx",
                lineNumber: 181,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Hero.tsx",
              lineNumber: 177,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Hero.tsx",
          lineNumber: 171,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("style", { children: `
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      ` }, void 0, !1, {
      fileName: "app/components/Hero.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Hero.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/About.tsx
import { motion as motion2 } from "framer-motion";
import { FaReact, FaVuejs, FaPhp } from "react-icons/fa/index.js";
import {
  SiTailwindcss,
  SiGraphql,
  SiVercel,
  SiMysql,
  SiTypescript,
  SiNextdotjs
} from "react-icons/si/index.js";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function About() {
  let techIcons = [
    { Icon: FaReact, name: "React", color: "text-blue-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { Icon: FaVuejs, name: "Vue.js", color: "text-green-500" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
    { Icon: SiGraphql, name: "GraphQL", color: "text-pink-500" },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-900 dark:text-white"
    },
    // { Icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
    { Icon: SiVercel, name: "Vercel", color: "text-black dark:text-white" },
    { Icon: FaPhp, name: "PHP", color: "text-purple-600" },
    { Icon: SiMysql, name: "MySQL", color: "text-orange-500" }
  ], containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }, itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return /* @__PURE__ */ jsxDEV4("section", { id: "about", className: "py-20 bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxDEV4(
      motion2.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0.3 },
        variants: containerVariants,
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxDEV4(
            motion2.h2,
            {
              variants: itemVariants,
              className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
              children: "About Me"
            },
            void 0,
            !1,
            {
              fileName: "app/components/About.tsx",
              lineNumber: 63,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            motion2.div,
            {
              variants: itemVariants,
              className: "w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            },
            void 0,
            !1,
            {
              fileName: "app/components/About.tsx",
              lineNumber: 69,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/About.tsx",
        lineNumber: 56,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV4("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV4(
        motion2.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.8 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg", children: [
              /* @__PURE__ */ jsxDEV4("h3", { className: "text-2xl font-bold mb-4 text-gray-800 dark:text-white", children: "Senior Frontend Engineer & GraphQL Enthusiast" }, void 0, !1, {
                fileName: "app/components/About.tsx",
                lineNumber: 85,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed mb-4", children: "I am a Senior Frontend Engineer based in Bandung, Indonesia, with a proven track record of building modern, responsive web applications using React, GraphQL, and the latest frontend technologies. I focus on developing interfaces that are not only visually stunning but also provide exceptional user experiences." }, void 0, !1, {
                fileName: "app/components/About.tsx",
                lineNumber: 88,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed mb-4", children: "Currently, I am deepening my expertise in GraphQL and advanced React patterns, with a strong passion for design details, application performance, and implementing best practices in web development. I am always enthusiastic about learning new technologies and staying ahead of the latest trends in the frontend ecosystem." }, void 0, !1, {
                fileName: "app/components/About.tsx",
                lineNumber: 95,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed", children: "As a seasoned remote worker, I enjoy the flexibility of working independently while maintaining effective collaboration with global teams. When I'm not coding, I explore design patterns, contribute to open-source projects, and share knowledge with the developer community." }, void 0, !1, {
                fileName: "app/components/About.tsx",
                lineNumber: 103,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/About.tsx",
              lineNumber: 84,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxDEV4(
                motion2.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md",
                  children: [
                    /* @__PURE__ */ jsxDEV4("div", { className: "text-2xl font-bold text-blue-600 dark:text-blue-400", children: "5+" }, void 0, !1, {
                      fileName: "app/components/About.tsx",
                      lineNumber: 118,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV4("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Years Experience" }, void 0, !1, {
                      fileName: "app/components/About.tsx",
                      lineNumber: 121,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/About.tsx",
                  lineNumber: 114,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV4(
                motion2.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md",
                  children: [
                    /* @__PURE__ */ jsxDEV4("div", { className: "text-2xl font-bold text-purple-600 dark:text-purple-400", children: "10+" }, void 0, !1, {
                      fileName: "app/components/About.tsx",
                      lineNumber: 129,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV4("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Projects Completed" }, void 0, !1, {
                      fileName: "app/components/About.tsx",
                      lineNumber: 132,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/About.tsx",
                  lineNumber: 125,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ jsxDEV4(
                motion2.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md",
                  children: [
                    /* @__PURE__ */ jsxDEV4("div", { className: "text-2xl font-bold text-green-600 dark:text-green-400", children: "5+" }, void 0, !1, {
                      fileName: "app/components/About.tsx",
                      lineNumber: 140,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV4("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Happy Clients" }, void 0, !1, {
                      fileName: "app/components/About.tsx",
                      lineNumber: 143,
                      columnNumber: 17
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/About.tsx",
                  lineNumber: 136,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/About.tsx",
              lineNumber: 113,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/About.tsx",
          lineNumber: 77,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(
        motion2.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.8 },
          className: "relative",
          children: /* @__PURE__ */ jsxDEV4("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg", children: [
            /* @__PURE__ */ jsxDEV4("h3", { className: "text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white", children: "Technologies I Work With" }, void 0, !1, {
              fileName: "app/components/About.tsx",
              lineNumber: 159,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-3 gap-6", children: techIcons.map(({ Icon, name, color }, index) => /* @__PURE__ */ jsxDEV4(
              motion2.div,
              {
                initial: { opacity: 0, scale: 0 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0 },
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                },
                whileHover: { scale: 1.1, y: -5 },
                className: "flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group",
                children: [
                  /* @__PURE__ */ jsxDEV4(
                    Icon,
                    {
                      className: `text-4xl ${color} mb-2 group-hover:scale-110 transition-transform duration-300`
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/About.tsx",
                      lineNumber: 179,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV4("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300 text-center", children: name }, void 0, !1, {
                    fileName: "app/components/About.tsx",
                    lineNumber: 182,
                    columnNumber: 21
                  }, this)
                ]
              },
              name,
              !0,
              {
                fileName: "app/components/About.tsx",
                lineNumber: 165,
                columnNumber: 19
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/About.tsx",
              lineNumber: 163,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl" }, void 0, !1, {
              fileName: "app/components/About.tsx",
              lineNumber: 190,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-20 blur-xl" }, void 0, !1, {
              fileName: "app/components/About.tsx",
              lineNumber: 191,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/About.tsx",
            lineNumber: 158,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/About.tsx",
          lineNumber: 151,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/About.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/About.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/About.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/components/Projects.tsx
import { motion as motion3 } from "framer-motion";
import {
  FaGithub as FaGithub2,
  FaExternalLinkAlt,
  FaReact as FaReact2,
  FaVuejs as FaVuejs2,
  FaPhp as FaPhp2
} from "react-icons/fa/index.js";
import {
  SiTailwindcss as SiTailwindcss2,
  SiTypescript as SiTypescript2,
  SiNextdotjs as SiNextdotjs2,
  SiRemix,
  SiMysql as SiMysql2,
  SiLaravel,
  SiNuxtdotjs,
  SiPrisma,
  SiJavascript
} from "react-icons/si/index.js";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Projects() {
  let projects = [
    {
      id: 1,
      title: "Ticketing Event Platform - darisini.com",
      description: "Ongoing development since 2021 - Front-end web application for darisini.com ticketing platform. Ensuring seamless user experience with integrated data management and responsive design.",
      image: "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/clipboard-image-1777086596.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvY2xpcGJvYXJkLWltYWdlLTE3NzcwODY1OTYud2VicCIsImlhdCI6MTc3NzA4NzkzNCwiZXhwIjo0ODk5MTUxOTM0fQ.q_jR8bacJYPoSUYtqLQGQllK9JXWh1K7w-lP9Oh3K_M",
      technologies: [
        {
          name: "Next.js",
          icon: SiNextdotjs2,
          color: "text-black dark:text-white"
        },
        { name: "React", icon: FaReact2, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss2, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript2, color: "text-blue-600" }
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://darisini.com",
      featured: !0
    },
    {
      id: 2,
      title: "Portfolio Website - Remix",
      description: "Personal portfolio website showcasing modern web development skills with Remix, Tailwind CSS, and Framer Motion animations. Features glassmorphism design and dark mode.",
      image: "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/fz.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZnoud2VicCIsImlhdCI6MTc3NzA4NzMxOCwiZXhwIjoxNzg1NjQwOTE4fQ.9JlP5YxHdD7XRYtTnEzwGh5wQRszGQTQkN-IiJwoOng",
      technologies: [
        { name: "Remix", icon: SiRemix, color: "text-blue-600" },
        { name: "TypeScript", icon: SiTypescript2, color: "text-blue-600" },
        { name: "Tailwind", icon: SiTailwindcss2, color: "text-cyan-500" }
      ],
      githubUrl: "https://github.com/fadlanzunima/portfolio-remix",
      liveUrl: "https://fadlanz-portfolio.vercel.app/",
      featured: !1
    },
    {
      id: 3,
      title: "Landing Page Donation - donasi.darisini.com",
      description: "2023 - Built and deployed responsive front-end web application for donation platform. Designed fully responsive layout ensuring seamless user experience across all devices.",
      image: "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/landing.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvbGFuZGluZy53ZWJwIiwiaWF0IjoxNzc3MDg3MzAxLCJleHAiOjE3ODU2NDA5MDF9.O9cWhN14JLX11IpNo8obSIGYQnkxG9g4Z7teN8ion7I",
      technologies: [
        {
          name: "Next.js",
          icon: SiNextdotjs2,
          color: "text-black dark:text-white"
        },
        { name: "Tailwind", icon: SiTailwindcss2, color: "text-cyan-500" },
        { name: "React", icon: FaReact2, color: "text-blue-500" },
        { name: "TypeScript", icon: SiTypescript2, color: "text-blue-600" }
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://donasi.darisini.com",
      featured: !1
    },
    {
      id: 4,
      title: "Platform Web for Banned Product - konsumenbijak.com",
      description: "2023 - Integrated form and data management for front-end web application focused on consumer awareness. Features fully responsive layout with seamless user experience.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: [
        { name: "Vue.js", icon: FaVuejs2, color: "text-green-500" },
        { name: "Nuxt.js", icon: SiNuxtdotjs, color: "text-green-600" },
        { name: "Tailwind", icon: SiTailwindcss2, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript2, color: "text-blue-600" }
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "http://konsumenbijak.com/",
      featured: !1
    },
    {
      id: 5,
      title: "Archive Document Web Application",
      description: "2024 - Full-stack application with MySQL database for document archiving. Designed and structured database entities using Eloquent ORM for efficiency and scalability.",
      image: "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/rsni.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcnNuaS53ZWJwIiwiaWF0IjoxNzc3MDg3MjE4LCJleHAiOjQ4OTkxNTEyMTh9.3AvWsWd0r-vt_bw1KQsJ9B_bfh8gnkf0GvAPa88Qol4",
      technologies: [
        { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
        { name: "MySQL", icon: SiMysql2, color: "text-orange-500" },
        { name: "PHP", icon: FaPhp2, color: "text-purple-600" },
        {
          name: "Prisma",
          icon: SiPrisma,
          color: "text-gray-700 dark:text-gray-300"
        }
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://rsni.bbsdlp.com",
      featured: !0
    },
    {
      id: 6,
      title: "Landing Page Bengkel 98 Teknik",
      description: "2024 - Developed a responsive landing page for an automotive workshop service. Built using React.js with a focus on clean UI, fast performance, and mobile-first design to improve customer engagement and service visibility.",
      image: "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/clipboard-image-1777086932.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvY2xpcGJvYXJkLWltYWdlLTE3NzcwODY5MzIud2VicCIsImlhdCI6MTc3NzA4NzYxMywiZXhwIjoxNzg1NjQxMjEzfQ.fukoYfBXsvsy2D6Xc7-JpsZ607Hh5XrrZ6efrVIXUV8",
      technologies: [
        {
          name: "React",
          icon: FaReact2,
          color: "text-blue-500"
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "text-yellow-500"
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss2,
          color: "text-cyan-500"
        }
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://bengkel98teknik.vercel.app/",
      featured: !1
    }
    // {
    //   id: 6,
    //   title: "Learning Projects & Experiments",
    //   description:
    //     "Collection of learning projects exploring Vue.js, Angular, React Native, state management with Jotai and Relay, and backend technologies including GraphQL and Prisma.",
    //   image:
    //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    //   technologies: [
    //     { name: "Vue.js", icon: FaVuejs, color: "text-green-500" },
    //     { name: "Angular", icon: FaAngular, color: "text-red-600" },
    //     { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    //     { name: "Jotai", icon: FaAtom, color: "text-purple-500" },
    //     {
    //       name: "Prisma",
    //       icon: SiPrisma,
    //       color: "text-gray-700 dark:text-gray-300",
    //     },
    //   ],
    //   githubUrl: "https://github.com/fadlanzunima",
    //   liveUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 7,
    //   title: "Mobile App Development - React Native",
    //   description:
    //     "Cross-platform mobile application built with React Native and TypeScript. Features real-time data synchronization, push notifications, and offline functionality with MongoDB integration.",
    //   image:
    //     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    //   technologies: [
    //     { name: "React Native", icon: FaReact, color: "text-blue-500" },
    //     { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    //     { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    //     { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    //   ],
    //   githubUrl: "https://github.com/fadlanzunima",
    //   liveUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 7,
    //   title: "Archive Document Management System",
    //   description:
    //     "Designed and implemented a full-stack document archival solution with Laravel and MySQL, utilizing Eloquent ORM for scalable data architecture and role-based access.",
    //   image:
    //     "https://rfmvxdtjeyjfqukgtdyc.supabase.co/storage/v1/object/public/learning-files/assets/rsni.webp",
    //   technologies: [
    //     { name: "PHP", icon: FaPhp, color: "text-blue-500" },
    //     { name: "Laravel", icon: SiLaravel, color: "text-blue-600" },
    //     { name: "mySQL", icon: SiMysql, color: "text-green-600" },
    //   ],
    //   githubUrl: "https://github.com/fadlanzunima",
    //   liveUrl: "https://rsni.bbsdlp.com",
    //   featured: false,
    // },
  ], containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }, itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return /* @__PURE__ */ jsxDEV5("section", { id: "projects", className: "py-20 bg-gray-50 dark:bg-gray-800", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxDEV5(
        motion3.div,
        {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0, amount: 0.3 },
          variants: containerVariants,
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxDEV5(
              motion3.h2,
              {
                variants: itemVariants,
                className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                children: "Featured Projects"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Projects.tsx",
                lineNumber: 263,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV5(
              motion3.div,
              {
                variants: itemVariants,
                className: "w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Projects.tsx",
                lineNumber: 269,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV5(
              motion3.p,
              {
                variants: itemVariants,
                className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                children: [
                  "Real projects showcasing expertise in Vue.js, Nuxt.js, React.js, Next.js, Angular, Laravel, GraphQL, state management (Vuex, Relay, Jotai), and databases (MySQL, PostgreSQL, MongoDB) from 2021 to",
                  " ",
                  (/* @__PURE__ */ new Date()).getFullYear(),
                  "."
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Projects.tsx",
                lineNumber: 273,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Projects.tsx",
          lineNumber: 256,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5("div", { className: "masonry-container", children: projects.map((project, index) => /* @__PURE__ */ jsxDEV5(
        motion3.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          whileHover: { y: -8, scale: 1.02 },
          className: `masonry-item group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-6 ${project.featured ? "featured ring-2 ring-blue-500/30 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-900" : ""}`,
          children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "relative overflow-hidden", children: [
              /* @__PURE__ */ jsxDEV5(
                "img",
                {
                  src: project.image,
                  alt: project.title,
                  className: `w-full object-cover group-hover:scale-110 transition-transform duration-500 ${project.featured ? "h-64" : index % 4 === 0 ? "h-48" : index % 4 === 1 ? "h-56" : index % 4 === 2 ? "h-52" : "h-60"}`
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 301,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }, void 0, !1, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 316,
                columnNumber: 17
              }, this),
              project.featured && /* @__PURE__ */ jsxDEV5("div", { className: "absolute top-4 left-4 z-10", children: /* @__PURE__ */ jsxDEV5("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg", children: "Featured Project" }, void 0, !1, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 321,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 320,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300", children: /* @__PURE__ */ jsxDEV5("div", { className: "flex space-x-3", children: [
                /* @__PURE__ */ jsxDEV5(
                  "a",
                  {
                    href: project.githubUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "p-3 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg",
                    children: /* @__PURE__ */ jsxDEV5(FaGithub2, { className: "text-lg text-gray-800" }, void 0, !1, {
                      fileName: "app/components/Projects.tsx",
                      lineNumber: 336,
                      columnNumber: 23
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Projects.tsx",
                    lineNumber: 330,
                    columnNumber: 21
                  },
                  this
                ),
                project.liveUrl !== "#" && /* @__PURE__ */ jsxDEV5(
                  "a",
                  {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "p-3 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg",
                    children: /* @__PURE__ */ jsxDEV5(FaExternalLinkAlt, { className: "text-lg text-white" }, void 0, !1, {
                      fileName: "app/components/Projects.tsx",
                      lineNumber: 345,
                      columnNumber: 25
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Projects.tsx",
                    lineNumber: 339,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 329,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 328,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Projects.tsx",
              lineNumber: 300,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxDEV5("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsxDEV5("h3", { className: "text-lg font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight", children: project.title }, void 0, !1, {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 356,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center gap-2 mb-3", children: [
                  project.featured && /* @__PURE__ */ jsxDEV5("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", children: "\u2B50 Featured" }, void 0, !1, {
                    fileName: "app/components/Projects.tsx",
                    lineNumber: 363,
                    columnNumber: 23
                  }, this),
                  project.liveUrl !== "#" && /* @__PURE__ */ jsxDEV5("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", children: "\u{1F680} Live" }, void 0, !1, {
                    fileName: "app/components/Projects.tsx",
                    lineNumber: 368,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 361,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 355,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5(
                "p",
                {
                  className: `text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-sm line-clamp-4 ${project.featured ? "text-gray-700 dark:text-gray-200" : ""}`,
                  children: project.description
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 376,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-wrap gap-2 mb-5", children: project.technologies.map((tech) => /* @__PURE__ */ jsxDEV5(
                "div",
                {
                  className: "flex items-center space-x-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600 hover:shadow-sm transition-shadow duration-200",
                  children: [
                    /* @__PURE__ */ jsxDEV5(tech.icon, { className: `text-xs ${tech.color}` }, void 0, !1, {
                      fileName: "app/components/Projects.tsx",
                      lineNumber: 391,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV5("span", { className: "text-xs font-medium text-gray-700 dark:text-gray-300", children: tech.name }, void 0, !1, {
                      fileName: "app/components/Projects.tsx",
                      lineNumber: 392,
                      columnNumber: 23
                    }, this)
                  ]
                },
                tech.name,
                !0,
                {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 387,
                  columnNumber: 21
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 385,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV5("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxDEV5(
                  "a",
                  {
                    href: project.githubUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg",
                    children: [
                      /* @__PURE__ */ jsxDEV5(FaGithub2, { className: "text-sm" }, void 0, !1, {
                        fileName: "app/components/Projects.tsx",
                        lineNumber: 407,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV5("span", { className: "text-sm font-medium", children: "Code" }, void 0, !1, {
                        fileName: "app/components/Projects.tsx",
                        lineNumber: 408,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/Projects.tsx",
                    lineNumber: 401,
                    columnNumber: 19
                  },
                  this
                ),
                project.liveUrl !== "#" && /* @__PURE__ */ jsxDEV5(
                  "a",
                  {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg",
                    children: [
                      /* @__PURE__ */ jsxDEV5(FaExternalLinkAlt, { className: "text-sm" }, void 0, !1, {
                        fileName: "app/components/Projects.tsx",
                        lineNumber: 417,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV5("span", { className: "text-sm font-medium", children: "Visit" }, void 0, !1, {
                        fileName: "app/components/Projects.tsx",
                        lineNumber: 418,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/Projects.tsx",
                    lineNumber: 411,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 400,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Projects.tsx",
              lineNumber: 353,
              columnNumber: 15
            }, this)
          ]
        },
        project.id,
        !0,
        {
          fileName: "app/components/Projects.tsx",
          lineNumber: 286,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/Projects.tsx",
        lineNumber: 284,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(
        motion3.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: 0.5 },
          className: "text-center mt-12",
          children: /* @__PURE__ */ jsxDEV5(
            "a",
            {
              href: "https://github.com/fadlanzunima",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
              children: [
                /* @__PURE__ */ jsxDEV5(FaGithub2, { className: "text-lg" }, void 0, !1, {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 441,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV5("span", { children: "View More on GitHub" }, void 0, !1, {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 442,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Projects.tsx",
              lineNumber: 435,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Projects.tsx",
          lineNumber: 428,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 255,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("style", { children: `
        .masonry-container {
          column-count: 1;
          column-gap: 1.5rem;
          column-fill: auto;
          orphans: 1;
          widows: 1;
        }

        @media (min-width: 640px) {
          .masonry-container {
            column-count: 2;
            column-gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .masonry-container {
            column-count: 3;
            column-gap: 1.75rem;
          }
        }

        @media (min-width: 1280px) {
          .masonry-container {
            column-count: 3;
            column-gap: 2rem;
          }
        }

        /* Better distribution for multiple projects */
        @media (min-width: 1024px) {
          .masonry-container {
            column-fill: balance;
          }
        }

        .masonry-item {
          break-inside: avoid;
          page-break-inside: avoid;
          display: inline-block;
          width: 100%;
          margin-bottom: 1.5rem;
          vertical-align: top;
        }

        /* Balance columns better for odd numbers */
        .masonry-item:nth-child(odd) {
          margin-bottom: 1.5rem;
        }

        .masonry-item:nth-child(even) {
          margin-bottom: 1.5rem;
        }

        /* Smooth hover effects */
        .masonry-item:hover {
          transform: translateY(-8px);
        }

        /* Enhanced shadow on hover */
        .masonry-item:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        /* Featured project glow effect */
        .masonry-item.featured {
          position: relative;
        }

        .masonry-item.featured::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4);
          z-index: -1;
          opacity: 0.3;
          transition: opacity 0.3s ease;
        }

        .masonry-item.featured:hover::before {
          opacity: 0.5;
        }

        /* Better spacing for mobile */
        @media (max-width: 639px) {
          .masonry-container {
            column-gap: 1rem;
          }

          .masonry-item {
            margin-bottom: 1.25rem;
          }
        }

        /* Tablet specific adjustments */
        @media (min-width: 640px) and (max-width: 1023px) {
          .masonry-container {
            column-count: 2;
            column-fill: balance;
          }
        }

        /* Ensure smooth column distribution */
        .masonry-container::after {
          content: '';
          display: block;
          break-inside: avoid;
          page-break-inside: avoid;
          height: 0;
        }
      ` }, void 0, !1, {
      fileName: "app/components/Projects.tsx",
      lineNumber: 447,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects.tsx",
    lineNumber: 254,
    columnNumber: 5
  }, this);
}

// app/components/TechStack.tsx
import { motion as motion4 } from "framer-motion";
import { FaReact as FaReact3, FaVuejs as FaVuejs3, FaPhp as FaPhp3, FaGitAlt } from "react-icons/fa/index.js";
import {
  SiTailwindcss as SiTailwindcss3,
  SiGraphql as SiGraphql3,
  SiVercel as SiVercel2,
  SiMysql as SiMysql3,
  SiTypescript as SiTypescript3,
  SiNextdotjs as SiNextdotjs3,
  SiRemix as SiRemix2,
  SiNodedotjs,
  SiFigma,
  SiPostman,
  SiVisualstudiocode
} from "react-icons/si/index.js";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function TechStack() {
  let technologies = [
    {
      name: "React",
      icon: FaReact3,
      color: "text-blue-500",
      category: "Frontend",
      experience: "3+ years",
      description: "Building interactive user interfaces and SPAs"
    },
    {
      name: "TypeScript",
      icon: SiTypescript3,
      color: "text-blue-600",
      category: "Language",
      experience: "2+ years",
      description: "Type-safe JavaScript development"
    },
    {
      name: "Next.js",
      icon: SiNextdotjs3,
      color: "text-black dark:text-white",
      category: "Framework",
      experience: "2+ years",
      description: "Full-stack React framework for production"
    },
    {
      name: "Remix",
      icon: SiRemix2,
      color: "text-blue-600",
      category: "Framework",
      experience: "1+ year",
      description: "Modern full-stack web framework"
    },
    {
      name: "Vue.js",
      icon: FaVuejs3,
      color: "text-green-500",
      category: "Frontend",
      experience: "5+ years",
      description: "Progressive framework for building UIs"
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss3,
      color: "text-cyan-500",
      category: "Styling",
      experience: "4+ years",
      description: "Utility-first CSS framework"
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-600",
      category: "Backend",
      experience: "2+ years",
      description: "JavaScript runtime for server-side development"
    },
    {
      name: "GraphQL",
      icon: SiGraphql3,
      color: "text-pink-500",
      category: "API",
      experience: "1+ year",
      description: "Query language for APIs"
    },
    // {
    //   name: "Flutter",
    //   icon: SiFlutter,
    //   color: "text-blue-400",
    //   category: "Mobile",
    //   experience: "2+ years",
    //   description: "Cross-platform mobile app development"
    // },
    {
      name: "PHP",
      icon: FaPhp3,
      color: "text-purple-600",
      category: "Backend",
      experience: "5+ years",
      description: "Server-side scripting language"
    },
    {
      name: "MySQL",
      icon: SiMysql3,
      color: "text-orange-500",
      category: "Database",
      experience: "3+ years",
      description: "Relational database management"
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-600",
      category: "Tools",
      experience: "3+ years",
      description: "Version control system"
    },
    {
      name: "Vercel",
      icon: SiVercel2,
      color: "text-black dark:text-white",
      category: "Deployment",
      experience: "2+ years",
      description: "Frontend cloud platform"
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "text-purple-500",
      category: "Design",
      experience: "2+ years",
      description: "UI/UX design and prototyping"
    },
    {
      name: "VS Code",
      icon: SiVisualstudiocode,
      color: "text-blue-500",
      category: "Tools",
      experience: "3+ years",
      description: "Code editor and development environment"
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-orange-500",
      category: "Tools",
      experience: "2+ years",
      description: "API development and testing"
    }
  ], categories = [
    { name: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Backend", color: "from-green-500 to-emerald-500" },
    { name: "Mobile", color: "from-purple-500 to-pink-500" },
    { name: "Tools", color: "from-orange-500 to-red-500" },
    { name: "Design", color: "from-indigo-500 to-purple-500" },
    { name: "Database", color: "from-yellow-500 to-orange-500" }
  ], containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }, itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return /* @__PURE__ */ jsxDEV6("section", { id: "techstack", className: "py-20 bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxDEV6(
      motion4.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0.3 },
        variants: containerVariants,
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxDEV6(
            motion4.h2,
            {
              variants: itemVariants,
              className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
              children: "Tech Stack & Skills"
            },
            void 0,
            !1,
            {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 201,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            motion4.div,
            {
              variants: itemVariants,
              className: "w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            },
            void 0,
            !1,
            {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 207,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6(
            motion4.p,
            {
              variants: itemVariants,
              className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
              children: "Technologies and tools I use to bring ideas to life. Hover over each item to learn more about my experience."
            },
            void 0,
            !1,
            {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 211,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/TechStack.tsx",
        lineNumber: 194,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      motion4.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0 },
        variants: containerVariants,
        className: "flex flex-wrap justify-center gap-4 mb-12",
        children: categories.map((category) => /* @__PURE__ */ jsxDEV6(
          motion4.div,
          {
            variants: itemVariants,
            className: `px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium shadow-lg`,
            children: category.name
          },
          category.name,
          !1,
          {
            fileName: "app/components/TechStack.tsx",
            lineNumber: 229,
            columnNumber: 13
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/TechStack.tsx",
        lineNumber: 221,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      motion4.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0.1 },
        variants: containerVariants,
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6",
        children: technologies.map((tech, index) => /* @__PURE__ */ jsxDEV6(
          motion4.div,
          {
            variants: itemVariants,
            whileHover: {
              scale: 1.1,
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            },
            className: "group relative",
            children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600", children: [
                /* @__PURE__ */ jsxDEV6(
                  tech.icon,
                  {
                    className: `text-4xl ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/TechStack.tsx",
                    lineNumber: 261,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("h3", { className: "text-sm font-semibold text-gray-800 dark:text-white text-center mb-1", children: tech.name }, void 0, !1, {
                  fileName: "app/components/TechStack.tsx",
                  lineNumber: 266,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV6("span", { className: "text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full", children: tech.category }, void 0, !1, {
                  fileName: "app/components/TechStack.tsx",
                  lineNumber: 271,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV6("div", { className: "absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center", children: [
                  /* @__PURE__ */ jsxDEV6(tech.icon, { className: `text-3xl ${tech.color} mb-2` }, void 0, !1, {
                    fileName: "app/components/TechStack.tsx",
                    lineNumber: 277,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV6("h4", { className: "text-white font-semibold text-sm mb-1", children: tech.name }, void 0, !1, {
                    fileName: "app/components/TechStack.tsx",
                    lineNumber: 278,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-300 text-xs mb-2", children: tech.experience }, void 0, !1, {
                    fileName: "app/components/TechStack.tsx",
                    lineNumber: 281,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-400 text-xs leading-tight", children: tech.description }, void 0, !1, {
                    fileName: "app/components/TechStack.tsx",
                    lineNumber: 284,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/TechStack.tsx",
                  lineNumber: 276,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/TechStack.tsx",
                lineNumber: 259,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: tech.experience }, void 0, !1, {
                fileName: "app/components/TechStack.tsx",
                lineNumber: 291,
                columnNumber: 15
              }, this)
            ]
          },
          tech.name,
          !0,
          {
            fileName: "app/components/TechStack.tsx",
            lineNumber: 248,
            columnNumber: 13
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/TechStack.tsx",
        lineNumber: 240,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(
      motion4.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.8, delay: 0.5 },
        className: "mt-16 grid md:grid-cols-3 gap-8",
        children: [
          /* @__PURE__ */ jsxDEV6("div", { className: "text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2", children: "12+" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 307,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "text-gray-700 dark:text-gray-300 font-medium", children: "Technologies" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 310,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Frontend & Backend" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 313,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/TechStack.tsx",
            lineNumber: 306,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2", children: "5+" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 319,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "text-gray-700 dark:text-gray-300 font-medium", children: "Years Experience" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 322,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Web Development" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 325,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/TechStack.tsx",
            lineNumber: 318,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "text-3xl font-bold text-green-600 dark:text-green-400 mb-2", children: "10+" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 331,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "text-gray-700 dark:text-gray-300 font-medium", children: "Projects Built" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 334,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "text-sm text-gray-500 dark:text-gray-400 mt-1", children: "Web & Mobile Apps" }, void 0, !1, {
              fileName: "app/components/TechStack.tsx",
              lineNumber: 337,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/TechStack.tsx",
            lineNumber: 330,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/TechStack.tsx",
        lineNumber: 299,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/TechStack.tsx",
    lineNumber: 193,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/TechStack.tsx",
    lineNumber: 192,
    columnNumber: 5
  }, this);
}

// app/components/Contact.tsx
import { motion as motion5 } from "framer-motion";
import { useState } from "react";
import {
  FaGithub as FaGithub3,
  FaLinkedin as FaLinkedin2,
  FaEnvelope as FaEnvelope2,
  FaInstagram as FaInstagram2,
  FaTwitter as FaTwitter2,
  FaFacebookF
} from "react-icons/fa/index.js";
import { SiThreads as SiThreads2 } from "react-icons/si/index.js";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Contact() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  }), [status, setStatus] = useState({
    type: "idle",
    message: ""
  }), handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }, handleSubmit = async (e) => {
    e.preventDefault(), setStatus({ type: "loading", message: "Sending message..." });
    try {
      await new Promise((resolve) => setTimeout(resolve, 2e3)), setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon."
      }), setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly."
      });
    }
    setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5e3);
  }, socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/fadlanzunima",
      icon: FaGithub3,
      color: "hover:text-gray-800 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fadlanzunima",
      icon: FaLinkedin2,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    },
    {
      name: "X",
      url: "https://x.com/alnzunima",
      icon: FaTwitter2,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/fdlnzunima",
      icon: FaInstagram2,
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/30"
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@fdlnzunima",
      icon: SiThreads2,
      color: "hover:text-black dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/fadlanzunima",
      icon: FaFacebookF,
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
    },
    {
      name: "Email",
      url: "mailto:fadlanzunima@gmail.com",
      icon: FaEnvelope2,
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/30"
    }
  ], containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }, itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return /* @__PURE__ */ jsxDEV7("section", { id: "contact", className: "py-20 bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxDEV7(
      motion5.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0.3 },
        variants: containerVariants,
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxDEV7(
            motion5.h2,
            {
              variants: itemVariants,
              className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
              children: "Let's Work Together"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Contact.tsx",
              lineNumber: 183,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            motion5.div,
            {
              variants: itemVariants,
              className: "w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Contact.tsx",
              lineNumber: 189,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7(
            motion5.p,
            {
              variants: itemVariants,
              className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
              children: "Have a project in mind? Let's discuss how we can bring your ideas to life. I'm always excited to work on new challenges!"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Contact.tsx",
              lineNumber: 193,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Contact.tsx",
        lineNumber: 176,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7("div", { className: "grid lg:grid-cols-1 gap-12", children: /* @__PURE__ */ jsxDEV7(
      motion5.div,
      {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.8 },
        className: "space-y-8",
        children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8", children: [
            /* @__PURE__ */ jsxDEV7("h3", { className: "text-2xl font-bold mb-6 text-gray-800 dark:text-white", children: "Get In Touch" }, void 0, !1, {
              fileName: "app/components/Contact.tsx",
              lineNumber: 212,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV7("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxDEV7("div", { className: "flex items-start space-x-4", children: [
                /* @__PURE__ */ jsxDEV7("div", { className: "bg-blue-600 text-white p-3 rounded-full", children: /* @__PURE__ */ jsxDEV7(FaEnvelope2, { className: "text-lg" }, void 0, !1, {
                  fileName: "app/components/Contact.tsx",
                  lineNumber: 219,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/Contact.tsx",
                  lineNumber: 218,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7("h4", { className: "font-semibold text-gray-800 dark:text-white", children: "Email" }, void 0, !1, {
                    fileName: "app/components/Contact.tsx",
                    lineNumber: 222,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300", children: "fadlanzunima@gmail.com" }, void 0, !1, {
                    fileName: "app/components/Contact.tsx",
                    lineNumber: 225,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "I'll respond within 24 hours" }, void 0, !1, {
                    fileName: "app/components/Contact.tsx",
                    lineNumber: 228,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Contact.tsx",
                  lineNumber: 221,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Contact.tsx",
                lineNumber: 217,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV7("div", { className: "flex items-start space-x-4", children: [
                /* @__PURE__ */ jsxDEV7("div", { className: "bg-purple-600 text-white p-3 rounded-full", children: /* @__PURE__ */ jsxDEV7(FaGithub3, { className: "text-lg" }, void 0, !1, {
                  fileName: "app/components/Contact.tsx",
                  lineNumber: 247,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/Contact.tsx",
                  lineNumber: 246,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { children: [
                  /* @__PURE__ */ jsxDEV7("h4", { className: "font-semibold text-gray-800 dark:text-white", children: "GitHub" }, void 0, !1, {
                    fileName: "app/components/Contact.tsx",
                    lineNumber: 250,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300", children: "@fadlanzunima" }, void 0, !1, {
                    fileName: "app/components/Contact.tsx",
                    lineNumber: 253,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Check out my open source work" }, void 0, !1, {
                    fileName: "app/components/Contact.tsx",
                    lineNumber: 256,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Contact.tsx",
                  lineNumber: 249,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Contact.tsx",
                lineNumber: 245,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Contact.tsx",
              lineNumber: 216,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Contact.tsx",
            lineNumber: 211,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8", children: [
            /* @__PURE__ */ jsxDEV7("h3", { className: "text-xl font-bold mb-6 text-gray-800 dark:text-white", children: "Connect With Me" }, void 0, !1, {
              fileName: "app/components/Contact.tsx",
              lineNumber: 266,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV7("div", { className: "grid grid-cols-3 gap-8", children: socialLinks.map((social) => /* @__PURE__ */ jsxDEV7(
              motion5.a,
              {
                href: social.url,
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: { scale: 1.05, y: -2 },
                className: `flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-700 shadow-md transition-all duration-300 ${social.bgColor} group`,
                children: [
                  /* @__PURE__ */ jsxDEV7(
                    social.icon,
                    {
                      className: `text-2xl text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color} mb-2`
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Contact.tsx",
                      lineNumber: 280,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV7("span", { className: "text-xs font-medium text-gray-700 dark:text-gray-300", children: social.name }, void 0, !1, {
                    fileName: "app/components/Contact.tsx",
                    lineNumber: 283,
                    columnNumber: 21
                  }, this)
                ]
              },
              social.name,
              !0,
              {
                fileName: "app/components/Contact.tsx",
                lineNumber: 272,
                columnNumber: 19
              },
              this
            )) }, void 0, !1, {
              fileName: "app/components/Contact.tsx",
              lineNumber: 270,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Contact.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Contact.tsx",
        lineNumber: 204,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Contact.tsx",
      lineNumber: 202,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Contact.tsx",
    lineNumber: 175,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Contact.tsx",
    lineNumber: 174,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { motion as motion6 } from "framer-motion";
import { useState as useState2, useEffect } from "react";
import {
  FaGithub as FaGithub4,
  FaLinkedin as FaLinkedin3,
  FaEnvelope as FaEnvelope3,
  FaInstagram as FaInstagram3,
  FaTwitter as FaTwitter3,
  FaFacebook as FaFacebook2,
  FaHeart,
  FaSun,
  FaMoon,
  FaArrowUp
} from "react-icons/fa/index.js";
import { SiThreads as SiThreads3 } from "react-icons/si/index.js";
import { Fragment, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Footer() {
  let [darkMode, setDarkMode] = useState2(!1), [showScrollTop, setShowScrollTop] = useState2(!1);
  useEffect(() => {
    let savedTheme = localStorage.getItem("theme"), prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    savedTheme === "dark" || !savedTheme && prefersDark ? (setDarkMode(!0), document.documentElement.classList.add("dark")) : (setDarkMode(!1), document.documentElement.classList.remove("dark"));
  }, []), useEffect(() => {
    let handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
  }, []);
  let toggleDarkMode = () => {
    let newDarkMode = !darkMode;
    setDarkMode(newDarkMode), newDarkMode ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
  }, scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, currentYear = (/* @__PURE__ */ new Date()).getFullYear(), socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/fadlanzunima",
      icon: FaGithub4,
      color: "hover:text-gray-800 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fadlanzunima",
      icon: FaLinkedin3,
      color: "hover:text-blue-600"
    },
    {
      name: "X",
      url: "https://x.com/alnzunima",
      icon: FaTwitter3,
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/fdlnzunima",
      icon: FaInstagram3,
      color: "hover:text-pink-600"
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@fdlnzunima",
      icon: SiThreads3,
      color: "hover:text-black dark:hover:text-white"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/fadlanzunima",
      icon: FaFacebook2,
      color: "hover:text-blue-700"
    },
    {
      name: "Email",
      url: "mailto:fadlanzunima@gmail.com",
      icon: FaEnvelope3,
      color: "hover:text-red-600"
    }
  ], quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ], scrollToSection = (sectionId) => {
    let element = document.getElementById(sectionId.replace("#", ""));
    element && element.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxDEV8("footer", { className: "bg-gray-900 dark:bg-black text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "max-w-6xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsxDEV8("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxDEV8(
          motion6.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.6 },
            className: "lg:col-span-2",
            children: [
              /* @__PURE__ */ jsxDEV8("h3", { className: "text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Fadlan Zunima" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 150,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("p", { className: "text-gray-300 mb-6 leading-relaxed max-w-md", children: "Frontend Developer yang passionate dalam menciptakan pengalaman web yang modern, responsif, dan interaktif. Mari berkolaborasi untuk mewujudkan ide-ide inovatif Anda!" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 153,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("div", { className: "flex space-x-4", children: socialLinks.map((social) => /* @__PURE__ */ jsxDEV8(
                motion6.a,
                {
                  href: social.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  whileHover: { scale: 1.1, y: -2 },
                  className: `p-3 bg-gray-800 dark:bg-gray-900 rounded-full text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700 dark:hover:bg-gray-800`,
                  children: /* @__PURE__ */ jsxDEV8(social.icon, { className: "text-lg" }, void 0, !1, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 170,
                    columnNumber: 21
                  }, this)
                },
                social.name,
                !1,
                {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 162,
                  columnNumber: 19
                },
                this
              )) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 160,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer.tsx",
            lineNumber: 143,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          motion6.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.2 },
            children: [
              /* @__PURE__ */ jsxDEV8("h4", { className: "text-lg font-semibold mb-6", children: "Quick Links" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 183,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("ul", { className: "space-y-3", children: quickLinks.map((link) => /* @__PURE__ */ jsxDEV8("li", { children: /* @__PURE__ */ jsxDEV8(
                "button",
                {
                  onClick: () => scrollToSection(link.href),
                  className: "text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform",
                  children: link.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 187,
                  columnNumber: 21
                },
                this
              ) }, link.name, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this)) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 184,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer.tsx",
            lineNumber: 177,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          motion6.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.6, delay: 0.4 },
            children: [
              /* @__PURE__ */ jsxDEV8("h4", { className: "text-lg font-semibold mb-6", children: "Get In Touch" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 205,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ jsxDEV8(FaEnvelope3, { className: "text-blue-400 flex-shrink-0" }, void 0, !1, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 208,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV8(
                    "a",
                    {
                      href: "mailto:fadlanzunima@gmail.com",
                      className: "text-gray-400 hover:text-white transition-colors duration-300 text-sm",
                      children: "fadlanzunima@gmail.com"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 209,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 207,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ jsxDEV8(FaGithub4, { className: "text-purple-400 flex-shrink-0" }, void 0, !1, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 228,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV8(
                    "a",
                    {
                      href: "https://github.com/fadlanzunima",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400 hover:text-white transition-colors duration-300 text-sm",
                      children: "@fadlanzunima"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 229,
                      columnNumber: 19
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 227,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 206,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV8(
                "button",
                {
                  onClick: toggleDarkMode,
                  className: "flex items-center space-x-2 p-3 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300 group",
                  children: darkMode ? /* @__PURE__ */ jsxDEV8(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV8(FaSun, { className: "text-yellow-400 group-hover:rotate-180 transition-transform duration-300" }, void 0, !1, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 248,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV8("span", { className: "text-sm text-gray-300", children: "Light Mode" }, void 0, !1, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 249,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 247,
                    columnNumber: 21
                  }, this) : /* @__PURE__ */ jsxDEV8(Fragment, { children: [
                    /* @__PURE__ */ jsxDEV8(FaMoon, { className: "text-blue-400 group-hover:rotate-180 transition-transform duration-300" }, void 0, !1, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 253,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV8("span", { className: "text-sm text-gray-300", children: "Dark Mode" }, void 0, !1, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 254,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 252,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 242,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 241,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer.tsx",
            lineNumber: 199,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "border-t border-gray-800 dark:border-gray-700", children: /* @__PURE__ */ jsxDEV8("div", { className: "max-w-6xl mx-auto px-6 py-6", children: /* @__PURE__ */ jsxDEV8(
        motion6.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
          children: /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center space-x-1 text-gray-400 text-sm", children: [
            /* @__PURE__ */ jsxDEV8("span", { children: [
              "\xA9 ",
              currentYear,
              " Fadlan Zunima. Made with"
            ] }, void 0, !0, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 274,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV8(
              motion6.div,
              {
                animate: { scale: [1, 1.2, 1] },
                transition: { duration: 1, repeat: 1 / 0, repeatDelay: 2 },
                children: /* @__PURE__ */ jsxDEV8(FaHeart, { className: "text-red-500" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 279,
                  columnNumber: 19
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/Footer.tsx",
                lineNumber: 275,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV8("span", { children: "using Remix & Tailwind CSS" }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 281,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 273,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 266,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 264,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(
      motion6.button,
      {
        onClick: scrollToTop,
        initial: { opacity: 0, scale: 0 },
        animate: {
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        },
        transition: { duration: 0.3 },
        className: "fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50",
        children: /* @__PURE__ */ jsxDEV8(FaArrowUp, { className: "text-lg" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 299,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Footer.tsx",
        lineNumber: 289,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Fadlan Zunima - Senior Frontend Engineer & Freelance React Developer" },
  {
    name: "description",
    content: "Senior Frontend Engineer from Bandung, Indonesia. Expertise in React, Next.js, and GraphQL. Known as fadlanz or alanzunima online. Delivering high-quality web applications for startups and enterprises worldwide."
  },
  {
    name: "keywords",
    content: "Fadlan Zunima, fadlanz, alanzunima, alanz, fadlan, Senior Frontend Engineer, React Developer, Freelance Web Developer, Remote Developer, Next.js Expert, GraphQL, TypeScript, UI/UX, Portfolio, Bandung, Hire Web Developer Indonesia"
  },
  { name: "author", content: "Fadlan Zunima" },
  {
    property: "og:title",
    content: "Fadlan Zunima (fadlanz) - Senior Frontend Engineer Portfolio"
  },
  {
    property: "og:description",
    content: "High-performance web applications built with React, Next.js, and GraphQL. Explore the portfolio of Fadlan Zunima, Senior Frontend Engineer."
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://fadlanz-portfolio.vercel.app" },
  {
    property: "og:image",
    content: "https://fadlanz-portfolio.vercel.app/og-image.jpg"
  },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Fadlan Zunima - Senior Frontend Developer Portfolio"
  },
  {
    name: "twitter:description",
    content: "Professional portfolio showcasing modern web applications and frontend engineering expertise."
  },
  {
    name: "twitter:image",
    content: "https://fadlanz-portfolio.vercel.app/og-image.jpg"
  },
  { name: "robots", content: "index, follow" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "theme-color", content: "#3B82F6" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV9("main", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxDEV9("section", { id: "hero", children: /* @__PURE__ */ jsxDEV9(Hero, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("section", { id: "about", children: /* @__PURE__ */ jsxDEV9(About, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("section", { id: "projects", children: /* @__PURE__ */ jsxDEV9(Projects, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("section", { id: "techstack", children: /* @__PURE__ */ jsxDEV9(TechStack, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("section", { id: "contact", children: /* @__PURE__ */ jsxDEV9(Contact, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9(Footer, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => WellKnown,
  loader: () => loader
});
var loader = async () => new Response(null, { status: 204 });
function WellKnown() {
  return null;
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7MUXUNS2.js", imports: ["/build/_shared/chunk-XC6BC2BP.js", "/build/_shared/chunk-RJ75G2FH.js", "/build/_shared/chunk-PMI65YMG.js", "/build/_shared/chunk-MW4MOASO.js", "/build/_shared/chunk-56LDNGDG.js", "/build/_shared/chunk-2Q7FBYOG.js", "/build/_shared/chunk-4JLKO6E3.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7LL42KKX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-YGVMGVTL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-34BINUSF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "e7fdcf48", hmr: { runtime: "/build/_shared\\chunk-MW4MOASO.js", timestamp: 1777096667416 }, url: "/build/manifest-E7FDCF48.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=[[path]].js.map
