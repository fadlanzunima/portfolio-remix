import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaPhp, FaDatabase } from "react-icons/fa/index.js";
import {
  SiTailwindcss,
  SiGraphql,
  SiFlutter,
  SiVercel,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si/index.js";

export default function About() {
  const techIcons = [
    { Icon: FaReact, name: "React", color: "text-blue-500" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { Icon: FaVuejs, name: "Vue.js", color: "text-green-500" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
    { Icon: SiGraphql, name: "GraphQL", color: "text-pink-500" },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-900 dark:text-white",
    },
    // { Icon: SiFlutter, name: "Flutter", color: "text-blue-400" },
    { Icon: SiVercel, name: "Vercel", color: "text-black dark:text-white" },
    { Icon: FaPhp, name: "PHP", color: "text-purple-600" },
    { Icon: SiMysql, name: "MySQL", color: "text-orange-500" },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
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
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Senior Frontend Engineer & GraphQL Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I am a Senior Frontend Engineer based in Bandung, Indonesia,
                with a proven track record of building modern, responsive web
                applications using React, GraphQL, and the latest frontend
                technologies. I focus on developing interfaces that are not only
                visually stunning but also provide exceptional user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Currently, I am deepening my expertise in GraphQL and advanced
                React patterns, with a strong passion for design details,
                application performance, and implementing best practices in web
                development. I am always enthusiastic about learning new
                technologies and staying ahead of the latest trends in the
                frontend ecosystem.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As a seasoned remote worker, I enjoy the flexibility of working
                independently while maintaining effective collaboration with
                global teams. When I'm not coding, I explore design patterns,
                contribute to open-source projects, and share knowledge with the
                developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  10+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Completed
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Technologies I Work With
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {techIcons.map(({ Icon, name, color }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <Icon
                      className={`text-4xl ${color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
