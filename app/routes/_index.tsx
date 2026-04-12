import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Projects from "~/components/Projects";
import TechStack from "~/components/TechStack";
import Testimonials from "~/components/Testimonials";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Fadlan Zunima - Frontend Engineer Portfolio" },
    {
      name: "description",
      content:
        "Portfolio website of Fadlan Zunima, a skilled Frontend Engineer from Bandung, Indonesia specializing in React, GraphQL, and modern web technologies. Explore my projects and get in touch for collaborations.",
    },
    {
      name: "keywords",
      content:
        "Frontend Engineer, React, GraphQL, JavaScript, TypeScript, Web Development, UI/UX, Portfolio, Fadlan Zunima, Bandung",
    },
    { name: "author", content: "Fadlan Zunima" },
    {
      property: "og:title",
      content: "Fadlan Zunima - Frontend Engineer Portfolio",
    },
    {
      property: "og:description",
      content:
        "Portfolio showcasing modern web applications and frontend engineering expertise by Fadlan Zunima from Bandung, Indonesia.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://fadlanzunima.vercel.app" },
    {
      property: "og:image",
      content: "https://fadlanzunima.vercel.app/og-image.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Fadlan Zunima - Frontend Developer Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Portfolio showcasing modern web applications and frontend development expertise.",
    },
    {
      name: "twitter:image",
      content: "https://fadlanzunima.vercel.app/og-image.jpg",
    },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#3B82F6" },
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Tech Stack Section */}
      <section id="techstack">
        <TechStack />
      </section>

      {/* Testimonials Section */}
      {/*<section id="testimonials">
        <Testimonials />
      </section>*/}

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
