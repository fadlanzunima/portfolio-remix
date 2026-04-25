import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaVuejs,
  FaPhp,
  FaBootstrap,
  FaAngular,
  FaAtom,
} from "react-icons/fa/index.js";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRemix,
  SiFlutter,
  SiMysql,
  SiGraphql,
  SiLaravel,
  SiNuxtdotjs,
  SiRelay,
  SiPrisma,
  SiVuetify,
  SiPostgresql,
  SiMongodb,
  SiGitlab,
  SiReacthookform,
  SiJavascript,
} from "react-icons/si/index.js";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Array<{
    name: string;
    icon: React.ComponentType;
    color: string;
  }>;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Ticketing Event Platform - darisini.com",
      description:
        "Ongoing development since 2021 - Front-end web application for darisini.com ticketing platform. Ensuring seamless user experience with integrated data management and responsive design.",
      image:
        "https://rfmvxdtjeyjfqukgtdyc.supabase.co/storage/v1/object/public/learning-files/assets/clipboard-image-1777086596.webp",
      technologies: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-black dark:text-white",
        },
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://darisini.com",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website - Remix",
      description:
        "Personal portfolio website showcasing modern web development skills with Remix, Tailwind CSS, and Framer Motion animations. Features glassmorphism design and dark mode.",
      image:
        "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/fz.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZnoud2VicCIsImlhdCI6MTc3NzA4NzMxOCwiZXhwIjoxNzg1NjQwOTE4fQ.9JlP5YxHdD7XRYtTnEzwGh5wQRszGQTQkN-IiJwoOng",
      technologies: [
        { name: "Remix", icon: SiRemix, color: "text-blue-600" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
      ],
      githubUrl: "https://github.com/fadlanzunima/portfolio-remix",
      liveUrl: "https://fadlanz-portfolio.vercel.app/",
      featured: false,
    },
    {
      id: 3,
      title: "Landing Page Donation - donasi.darisini.com",
      description:
        "2023 - Built and deployed responsive front-end web application for donation platform. Designed fully responsive layout ensuring seamless user experience across all devices.",
      image:
        "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/landing.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvbGFuZGluZy53ZWJwIiwiaWF0IjoxNzc3MDg3MzAxLCJleHAiOjE3ODU2NDA5MDF9.O9cWhN14JLX11IpNo8obSIGYQnkxG9g4Z7teN8ion7I",
      technologies: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-black dark:text-white",
        },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://donasi.darisini.com",
      featured: false,
    },
    {
      id: 4,
      title: "Platform Web for Banned Product - konsumenbijak.com",
      description:
        "2023 - Integrated form and data management for front-end web application focused on consumer awareness. Features fully responsive layout with seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: [
        { name: "Vue.js", icon: FaVuejs, color: "text-green-500" },
        { name: "Nuxt.js", icon: SiNuxtdotjs, color: "text-green-600" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "http://konsumenbijak.com/",
      featured: false,
    },
    {
      id: 5,
      title: "Archive Document Web Application",
      description:
        "2024 - Full-stack application with MySQL database for document archiving. Designed and structured database entities using Eloquent ORM for efficiency and scalability.",
      image:
        "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/rsni.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvcnNuaS53ZWJwIiwiaWF0IjoxNzc3MDg3MjE4LCJleHAiOjQ4OTkxNTEyMTh9.3AvWsWd0r-vt_bw1KQsJ9B_bfh8gnkf0GvAPa88Qol4",
      technologies: [
        { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
        { name: "MySQL", icon: SiMysql, color: "text-orange-500" },
        { name: "PHP", icon: FaPhp, color: "text-purple-600" },
        {
          name: "Prisma",
          icon: SiPrisma,
          color: "text-gray-700 dark:text-gray-300",
        },
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://rsni.bbsdlp.com",
      featured: true,
    },
    {
      id: 6,
      title: "Landing Page Bengkel - bengkel98teknik.vercel.app",
      description:
        "2024 - Developed a responsive landing page for an automotive workshop service. Built using React.js with a focus on clean UI, fast performance, and mobile-first design to improve customer engagement and service visibility.",
      image:
        "https://pntefrhsiortxoounbsn.supabase.co/storage/v1/object/sign/assets/clipboard-image-1777086932.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNzhlYzZiMS00YTFhLTQ0MDAtOGMwNi03Y2ZlMGUwM2EzMDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvY2xpcGJvYXJkLWltYWdlLTE3NzcwODY5MzIud2VicCIsImlhdCI6MTc3NzA4NzYxMywiZXhwIjoxNzg1NjQxMjEzfQ.fukoYfBXsvsy2D6Xc7-JpsZ607Hh5XrrZ6efrVIXUV8",
      technologies: [
        {
          name: "React",
          icon: FaReact,
          color: "text-blue-500",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "text-yellow-500",
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss,
          color: "text-cyan-500",
        },
      ],
      githubUrl: "https://github.com/fadlanzunima",
      liveUrl: "https://bengkel98teknik.vercel.app/",
      featured: false,
    },
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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Real projects showcasing expertise in Vue.js, Nuxt.js, React.js,
            Next.js, Angular, Laravel, GraphQL, state management (Vuex, Relay,
            Jotai), and databases (MySQL, PostgreSQL, MongoDB) from 2021 to{" "}
            {new Date().getFullYear()}.
          </motion.p>
        </motion.div>

        <div className="masonry-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`masonry-item group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-6 ${
                project.featured
                  ? "featured ring-2 ring-blue-500/30 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-900"
                  : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    project.featured
                      ? "h-64"
                      : index % 4 === 0
                        ? "h-48"
                        : index % 4 === 1
                          ? "h-56"
                          : index % 4 === 2
                            ? "h-52"
                            : "h-60"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Featured Badge Overlay */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured Project
                    </span>
                  </div>
                )}

                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/95 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <FaGithub className="text-lg text-gray-800" />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <FaExternalLinkAlt className="text-lg text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  {/* Project Status */}
                  <div className="flex items-center gap-2 mb-3">
                    {project.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        ⭐ Featured
                      </span>
                    )}
                    {project.liveUrl !== "#" && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        🚀 Live
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <p
                  className={`text-gray-600 dark:text-gray-300 mb-5 leading-relaxed text-sm line-clamp-4 ${
                    project.featured ? "text-gray-700 dark:text-gray-200" : ""
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600 hover:shadow-sm transition-shadow duration-200"
                    >
                      <tech.icon className={`text-xs ${tech.color}`} />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <FaGithub className="text-sm" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm font-medium">Visit</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/fadlanzunima"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <FaGithub className="text-lg" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
