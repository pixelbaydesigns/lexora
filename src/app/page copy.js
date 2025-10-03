'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, UserCircle, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Head from 'next/head'; // Import Head from next/head


const slides = [
  {
    image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag: 'Featured App',
    title: 'The Rise of Remote Work: Benefits & Trends',
    description: 'The aroma of freshly brewed coffee filled the air as...'
  },
  {
    image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag: 'Productivity Boost',
    title: 'Morning Habits That Changed My Life',
    description: 'How simple routines led to massive results in daily life...'
  },
  {
    image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tag: 'New Feature',
    title: 'Explore Our Latest UI Components',
    description: 'Build faster and better interfaces with modern designs...'
  }
];
const services = [
  {
    title: 'Business Setup in Qatar',
    description: 'Start your business in Qatar with expert help for licenses, legal papers, and local support.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Attestation Services',
    description: 'Get your documents attested quickly and correctly for education, work, or travel.',
    image: 'https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Translation Services',
    description: 'Certified translation for official, legal, or academic documents with full accuracy.',
    image: 'https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];


export default function Dashboard() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [showMenu, setShowMenu] = useState(false);
  const [currentS, setCurrentS] = useState(0);

  const prevSlide = () => {
    setCurrentS((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentS((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };



  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // Manual controls
  const goToPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  const handleChoose = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I am ${name} from ${location}. I am interested in your ${selectedService} service.`;
    const whatsappURL = `https://wa.me/9645917277?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setShowModal(false);
    setName('');
    setLocation('');
  };


  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set to true after initial animation
    const timeout = setTimeout(() => setHasAnimated(true), 800); // match transition duration
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <Head>
        <meta name="description" content="Lexora helps you set up and grow your business in Qatar. Get expert legal, translation, and setup services in one place." />
        <meta name="keywords" content="business setup, legal services, certified translation, Qatar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.lexoraservices.com" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lexora - Grow Your Business in Qatar" />
        <meta property="og:description" content="Expert setup, legal support, attestation, and certified translation — all in one place." />
        <meta property="og:url" content="https://www.lexoraservices.com" />
        <meta property="og:image" content="https://www.lexoraservices.com/images/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lexora - Grow Your Business in Qatar" />
        <meta name="twitter:description" content="Expert setup, legal support, attestation, and certified translation — all in one place." />
        <meta name="twitter:image" content="https://www.lexoraservices.com/images/preview.jpg" />
      </Head>

      {/* Top Banner */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="font-semibold text-lg">Lexora</span>
          <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">Web</span>
        </div>
        {/* <div className="flex items-center space-x-4">
          <UserCircle className="w-6 h-6 rounded-full" />
        </div> */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setShowMenu(true)} className="cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>


      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setShowMenu(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-white via-white to-green-100 rounded-2xl p-8 w-full max-w-sm mx-4 shadow-2xl space-y-6 text-center"
            >
              <h2 className="text-2xl font-semibold text-gray-800">Menu</h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                {[
                  { href: "/", icon: "🏠", label: "Home" },
                  { href: "#about", icon: "ℹ️", label: "About" },
                  { href: "#services", icon: "💼", label: "Services" },
                  { href: "#connect", icon: "⚙️", label: "Connect" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setShowMenu(false)} // <-- Close modal on click
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow hover:scale-[1.02]"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>


              <button
                onClick={() => setShowMenu(false)}
                className="w-full py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium shadow transition-all duration-300"
              >
                Close Menu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Banner Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-6 font-poppins">
        {/* First Banner */}
        <div className="relative rounded-xl overflow-hidden w-full lg:col-span-8 sm:h-[50vh] h-[90vh] flex flex-col sm:flex-row justify-between items-center px-8 py-6 bg-gradient-to-br from-black via-green-900 to-green-600 text-white shadow-lg">

          {/* Text Section with animation */}
          <motion.div
            className="flex-1 flex flex-col justify-center text-center sm:text-left items-center sm:items-start ml-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="text-2xl md:text-3xl font-semibold mb-2" variants={itemVariants}>
              Grow Your Business in Qatar 🚀
            </motion.h2>
            <motion.p className="text-lg md:text-xl font-light mb-4" variants={itemVariants}>
              Expert setup, legal support, attestation & certified translation — all in one place.
            </motion.p>
            <motion.p className="text-sm md:text-base text-gray-300 mb-6 max-w-md" variants={itemVariants}>
              We simplify your business journey with reliable, fast, and professional services.
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-lg w-fit"
              onClick={() => {
                const section = document.getElementById("services");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Services
            </motion.button>
          </motion.div>

          {/* Image with animation */}
          <motion.div
            className="flex-1 flex justify-center items-end mt-6 sm:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Image
              src="/images/banner.png"
              alt="3D Character"
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Second Banner - Slideshow */}
        {/* Second Banner - Slideshow */}
        <div className="relative w-full lg:col-span-4 rounded-xl overflow-hidden sm:h-[50vh] h-[50vh] group">
          {/* Animated Background Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].image} // re-animates on slide change
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[current].image}
                alt="Slide"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

          {/* Navigation Arrows - Top Right */}
          <div className="absolute top-3 right-3 z-20 flex gap-2">
            <button
              onClick={goToPrev}
              className="bg-white/10 hover:bg-white/20 text-white p-1 rounded-full backdrop-blur-sm transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-white/10 hover:bg-white/20 text-white p-1 rounded-full backdrop-blur-sm transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Indicators - Top Left */}
          <div className="absolute top-3 left-3 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ring-1 ring-white/50 transition-all duration-300 ${current === index
                  ? "bg-gradient-to-r from-green-400 to-green-600 scale-110"
                  : "bg-white/30"
                  }`}
              ></div>
            ))}
          </div>

          {/* Optional slide content can be animated too */}
          {/* 
  <motion.div
    className="absolute bottom-6 left-6 z-20 text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    <span className="text-xs uppercase font-semibold text-green-400">
      {slides[current].tag}
    </span>
    <h3 className="text-lg font-bold mt-1 truncate max-w-xs">
      {slides[current].title}
    </h3>
    <p className="text-sm text-white/80 mt-1 truncate max-w-xs">
      {slides[current].description}
    </p>
  </motion.div>
  */}
        </div>

      </div>


      <motion.h2 id="services"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl mt-14 text-center font-extrabold text-gray-800 mb-6 tracking-tight"
      >
        Our Services
      </motion.h2>


      <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-4 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
            initial={{ opacity: 0, y: 30 }} // Use a smaller initial translate for a smoother landing
            animate={{ opacity: 1, y: 0 }} // Final position and opacity
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }} // Smooth ease-out transition
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

            <button
              onClick={() => handleChoose(service.title)}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-lg border border-gray-300 shadow-md hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 backdrop-blur-lg hover:bg-opacity-80 hover:scale-105"
            >
              Choose
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-green-50 via-white to-white/90 shadow-xl backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-white/40 mx-4 sm:mx-0"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Provide Your Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                  placeholder="Your location"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}




      {/* About Section */}
      <motion.section
        id="connect"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl bg-white p-10 shadow-xl shadow-gray-100/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-white opacity-70 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 tracking-tight"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            At <span className="font-semibold text-green-600">Lexora Business</span>, we help individuals and organizations thrive in Qatar. From <strong>company setup</strong> to <strong>attestation</strong> and <strong>certified translation</strong>, our dedicated team ensures a smooth, efficient, and legally sound experience every step of the way.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <MapPin className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600">Doha, Qatar<br />Mathar Qadeem</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <Phone className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+974 3110 7654</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <Mail className="text-green-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">lexoraservices@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>




      <section className="bg-white py-20 font-poppins overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6 ml-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-blue-500 font-semibold uppercase mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Digital Partner
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach to business is uniquely built around what we know works...
              and what we know doesn’t work.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, we have worked with many brands and new startups. We help ambitious
              businesses like yours generate more profits by building awareness, driving web traffic,
              connecting with customers, and growing overall sales.
            </p>

            {/* Google Rating Box */}
            <div className="mt-6 inline-flex items-center bg-white shadow-md px-4 py-2 rounded-lg border border-gray-200">
              <div className="text-sm font-medium text-gray-800">
                Google Rating <span className="text-yellow-500 ml-1">4.9 ★★★★★</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/images/boost.png"
              alt="Digital Partner Illustration"
              className="w-full max-w-lg mx-auto drop-shadow-xl rounded-2xl"
            />
          </motion.div>
        </div>
      </section>






      {/* Footer */}
      <footer className="mt-20 bg-white border-t border-gray-200 py-8 text-gray-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Lexora. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="relative group">
              <span className="transition-colors group-hover:text-green-600">Privacy Policy</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="transition-colors group-hover:text-green-600">Terms</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="transition-colors group-hover:text-green-600">Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </footer>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Lexora",
            "url": "https://www.lexoraservices.com",
            "description": "Expert business setup, legal support, translation services in Qatar."
          })
        }}
      />


    </div>
  );
}
