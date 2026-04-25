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
    { title: "Fadlan Zunima - Senior Frontend Engineer & Freelance React Developer" },
    {
      name: "description",
      content:
        "Senior Frontend Engineer from Bandung, Indonesia. Expertise in React, Next.js, and GraphQL. Delivering high-quality web applications for startups and enterprises worldwide. Available for freelance and remote roles.",
    },
    {
      name: "keywords",
      content:
        "Senior Frontend Engineer, React Developer, Freelance Web Developer, Remote Developer, Next.js Expert, GraphQL, TypeScript, UI/UX, Portfolio, Fadlan Zunima, Bandung, Hire Web Developer Indonesia",
    },
    { name: "author", content: "Fadlan Zunima" },
    {
      property: "og:title",
      content: "Fadlan Zunima - Senior Frontend Engineer Portfolio",
    },
    {
      property: "og:description",
      content:
        "High-performance web applications built with React, Next.js, and GraphQL. Explore the portfolio of Fadlan Zunima, Senior Frontend Engineer.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://fadlanz-portfolio.vercel.app" },
    {
      property: "og:image",
      content: "https://fadlanz-portfolio.vercel.app/og-image.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Fadlan Zunima - Senior Frontend Developer Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Professional portfolio showcasing modern web applications and frontend engineering expertise.",
    },
    {
      name: "twitter:image",
      content: "https://fadlanz-portfolio.vercel.app/og-image.jpg",
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
