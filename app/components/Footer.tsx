import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaHeart,
  FaSun,
  FaMoon,
  FaArrowUp,
} from "react-icons/fa/index.js";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/fadlanzunima",
      icon: FaGithub,
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fadlanzunima",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      url: "mailto:fadlanzunima@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-600",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6281234567890",
      icon: FaWhatsapp,
      color: "hover:text-green-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/fdlnzunima",
      icon: FaInstagram,
      color: "hover:text-pink-600",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/fadlanzunima",
      icon: FaTwitter,
      color: "hover:text-blue-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fadlan Zunima
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Frontend Developer yang passionate dalam menciptakan pengalaman
                web yang modern, responsif, dan interaktif. Mari berkolaborasi
                untuk mewujudkan ide-ide inovatif Anda!
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 bg-gray-800 dark:bg-gray-900 rounded-full text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700 dark:hover:bg-gray-800`}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:fadlanzunima@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    fadlanzunima@gmail.com
                  </a>
                </div>
                {/*<div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-400 flex-shrink-0" />
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    +62 812-3456-7890
                  </a>
                </div>*/}
                <div className="flex items-center space-x-3">
                  <FaGithub className="text-purple-400 flex-shrink-0" />
                  <a
                    href="https://github.com/fadlanzunima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    @fadlanzunima
                  </a>
                </div>
              </div>

              {/* Theme Toggle */}
              <div className="mt-6">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 p-3 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300 group"
                >
                  {darkMode ? (
                    <>
                      <FaSun className="text-yellow-400 group-hover:rotate-180 transition-transform duration-300" />
                      <span className="text-sm text-gray-300">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="text-blue-400 group-hover:rotate-180 transition-transform duration-300" />
                      <span className="text-sm text-gray-300">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>© {currentYear} Fadlan Zunima. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                <span>using Remix & Tailwind CSS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <FaArrowUp className="text-lg" />
      </motion.button>
    </footer>
  );
}
