import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaPhp, FaGitAlt } from "react-icons/fa/index.js";
import {
  SiTailwindcss,
  SiGraphql,
  SiFlutter,
  SiVercel,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiRemix,
  SiNodedotjs,
  SiFigma,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si/index.js";

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
  experience: string;
  description: string;
}

export default function TechStack() {
  const technologies: Technology[] = [
    {
      name: "React",
      icon: FaReact,
      color: "text-blue-500",
      category: "Frontend",
      experience: "3+ years",
      description: "Building interactive user interfaces and SPAs",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-600",
      category: "Language",
      experience: "2+ years",
      description: "Type-safe JavaScript development",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-black dark:text-white",
      category: "Framework",
      experience: "2+ years",
      description: "Full-stack React framework for production",
    },
    {
      name: "Remix",
      icon: SiRemix,
      color: "text-blue-600",
      category: "Framework",
      experience: "1+ year",
      description: "Modern full-stack web framework",
    },
    {
      name: "Vue.js",
      icon: FaVuejs,
      color: "text-green-500",
      category: "Frontend",
      experience: "5+ years",
      description: "Progressive framework for building UIs",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-500",
      category: "Styling",
      experience: "4+ years",
      description: "Utility-first CSS framework",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-600",
      category: "Backend",
      experience: "2+ years",
      description: "JavaScript runtime for server-side development",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      color: "text-pink-500",
      category: "API",
      experience: "1+ year",
      description: "Query language for APIs",
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
      icon: FaPhp,
      color: "text-purple-600",
      category: "Backend",
      experience: "5+ years",
      description: "Server-side scripting language",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-orange-500",
      category: "Database",
      experience: "3+ years",
      description: "Relational database management",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-600",
      category: "Tools",
      experience: "3+ years",
      description: "Version control system",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "text-black dark:text-white",
      category: "Deployment",
      experience: "2+ years",
      description: "Frontend cloud platform",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "text-purple-500",
      category: "Design",
      experience: "2+ years",
      description: "UI/UX design and prototyping",
    },
    {
      name: "VS Code",
      icon: SiVisualstudiocode,
      color: "text-blue-500",
      category: "Tools",
      experience: "3+ years",
      description: "Code editor and development environment",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-orange-500",
      category: "Tools",
      experience: "2+ years",
      description: "API development and testing",
    },
  ];

  const categories = [
    { name: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Backend", color: "from-green-500 to-emerald-500" },
    { name: "Mobile", color: "from-purple-500 to-pink-500" },
    { name: "Tools", color: "from-orange-500 to-red-500" },
    { name: "Design", color: "from-indigo-500 to-purple-500" },
    { name: "Database", color: "from-yellow-500 to-orange-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="techstack" className="py-20 bg-white dark:bg-gray-900">
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
            Tech Stack & Skills
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life. Hover over each
            item to learn more about my experience.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium shadow-lg`}
            >
              {category.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative"
            >
              {/* Tech Card */}
              <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                {/* Icon */}
                <tech.icon
                  className={`text-4xl ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                />

                {/* Name */}
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white text-center mb-1">
                  {tech.name}
                </h3>

                {/* Category Badge */}
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  {tech.category}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                  <tech.icon className={`text-3xl ${tech.color} mb-2`} />
                  <h4 className="text-white font-semibold text-sm mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-gray-300 text-xs mb-2">
                    {tech.experience}
                  </p>
                  <p className="text-gray-400 text-xs leading-tight">
                    {tech.description}
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.experience}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              12+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Technologies
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Frontend & Backend
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              5+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Years Experience
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Web Development
            </div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              10+
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Projects Built
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Web & Mobile Apps
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
