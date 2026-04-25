import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaUser, FaBuilding, FaBriefcase } from "react-icons/fa/index.js";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  color: string;
  bgGradient: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content: "Fadlan is very responsive and always provides the best solutions. His designs are clean, code is well-structured, and he's a great person to discuss product development with.",
      rating: 5,
      color: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Luar biasa! Fadlan tidak hanya memahami requirements teknis, tapi juga memberikan input valuable untuk UX. Project selesai tepat waktu dengan kualitas premium.",
      rating: 5,
      color: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20"
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "UI/UX Designer",
      company: "DesignStudio",
      content: "Collaborasi dengan Fadlan sangat menyenangkan. Dia mampu mengimplementasikan design complex dengan pixel-perfect dan performa optimal. Highly recommended!",
      rating: 5,
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "CTO",
      company: "E-commerce Plus",
      content: "Fadlan membawa platform e-commerce kami ke level selanjutnya. Frontend yang responsif, loading cepat, dan conversion rate meningkat signifikan. Excellent work!",
      rating: 5,
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "Marketing Director",
      company: "GrowthAgency",
      content: "Website yang dibuat Fadlan tidak hanya beautiful tapi juga SEO-friendly. Organic traffic naik 200% dalam 3 bulan pertama. Amazing results!",
      rating: 5,
      color: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Lead Developer",
      company: "DevTeam Pro",
      content: "Fadlan's code quality is top-notch. Clean architecture, well-documented, and easy to maintain. It's been a pleasure collaborating with a developer of his caliber.",
      rating: 5,
      color: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${
          i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
        } text-sm`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimonials from clients who trusted me to bring their ideas to life
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`bg-gradient-to-br ${testimonials[currentIndex].bgGradient} backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 relative overflow-hidden`}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full blur-3xl`}></div>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-tr ${testimonials[currentIndex].color} rounded-full blur-2xl`}></div>
                </div>

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full shadow-lg`}>
                      <FaQuoteLeft className="text-white text-xl" />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="text-center">
                    <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    {/* Client Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <div className={`p-2 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full`}>
                          <FaUser className="text-white text-sm" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {testimonials[currentIndex].name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center space-x-1">
                          <FaBriefcase className="text-sm" />
                          <span className="font-medium">{testimonials[currentIndex].role}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaBuilding className="text-sm" />
                          <span>{testimonials[currentIndex].company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Testimonials Preview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-2xl transition-all duration-300 text-center ${
                index === currentIndex
                  ? `bg-gradient-to-r ${testimonial.color} shadow-lg text-white`
                  : 'bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                index === currentIndex
                  ? 'bg-white/20'
                  : `bg-gradient-to-r ${testimonial.color}`
              }`}>
                <FaUser className={`text-lg ${
                  index === currentIndex ? 'text-white' : 'text-white'
                }`} />
              </div>
              <p className="text-xs font-medium truncate">
                {testimonial.name}
              </p>
              <p className="text-xs opacity-75 truncate">
                {testimonial.role}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5.0</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Average Rating</div>
          </div>
          
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">25+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
          </div>
          
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Project Success</div>
          </div>
          
          <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">48h</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Avg Response</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}