import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaSpinner,
  FaFacebookF,
} from "react-icons/fa/index.js";
import { SiThreads } from "react-icons/si/index.js";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      // Simulate form submission (replace with actual EmailJS implementation)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // EmailJS implementation would go here:
      // const result = await emailjs.send(
      //   'your_service_id',
      //   'your_template_id',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   'your_public_key'
      // );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact me directly.",
      });
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/fadlanzunima",
      icon: FaGithub,
      color: "hover:text-gray-800 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fadlanzunima",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    },
    {
      name: "X",
      url: "https://x.com/alnzunima",
      icon: FaTwitter,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/fdlnzunima",
      icon: FaInstagram,
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/30",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@fdlnzunima",
      icon: SiThreads,
      color: "hover:text-black dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/fadlanzunima",
      icon: FaFacebookF,
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    },
    {
      name: "Email",
      url: "mailto:fadlanzunima@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/30",
    },
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
    hidden: { y: 30, opacity: 0 },
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
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
            Let's Work Together
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can bring your ideas to
            life. I'm always excited to work on new challenges!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Email
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      fadlanzunima@gmail.com
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/*<div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-full">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-300">+62 812-3456-7890</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">For urgent inquiries</p>
                  </div>
                </div>*/}

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white p-3 rounded-full">
                    <FaGithub className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      GitHub
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      @fadlanzunima
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Check out my open source work
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                Connect With Me
              </h3>

              <div className="grid grid-cols-3 gap-8">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-700 shadow-md transition-all duration-300 ${social.bgColor} group`}
                  >
                    <social.icon
                      className={`text-2xl text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color} mb-2`}
                    />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            {/*<div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl">
                <div className="text-2xl font-bold mb-1">24h</div>
                <div className="text-sm opacity-90">Response Time</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
            </div>*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
