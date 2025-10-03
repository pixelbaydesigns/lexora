"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Menu, X, CheckCircle, Zap, Shield } from "lucide-react";

// --- Data Definitions ---
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Values", href: "#values" },
  { name: "Contact", href: "#contact" },
];

const serviceDetails = [
  { 
    title: "Custom Furniture Manufacturing", 
    description: "Bespoke furniture that blends timeless design with lasting durability and quality wood.", 
    icon: CheckCircle 
  },
  { 
    title: "Built-in Cupboards & Wardrobes", 
    description: "Stylish, space-saving storage solutions tailored perfectly to your interiors and needs.", 
    icon: Zap 
  },
  { 
    title: "Shelving & Display Fixtures", 
    description: "Functional and attractive display solutions for homes, offices, and showrooms.", 
    icon: Shield 
  },
  { 
    title: "Wooden Wall Paneling", 
    description: "Elegant woodwork that adds warmth and sophisticated character to any space.", 
    icon: CheckCircle 
  },
  { 
    title: "Full Interior Carpentry Solutions", 
    description: "Complete carpentry services from initial concept design to flawless final installation.", 
    icon: Zap 
  },
  { 
    title: "Essential MEP Solutions", 
    description: "Integrated Mechanical, Electrical, and Plumbing services including repairs and installations.", 
    icon: Shield 
  },
];

const valueDetails = [
  { title: "Craftsmanship Excellence", icon: "🛠️" },
  { title: "Customer Satisfaction", icon: "🤝" },
  { title: "Integrity", icon: "✨" },
  { title: "Professionalism", icon: "👔" },
  { title: "Innovation", icon: "💡" },
];


// --- Reusable Components ---

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="py-20 px-4 sm:px-8 lg:px-16 container mx-auto text-gray-100 scroll-mt-20"
  >
    <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12 relative pb-4">
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
    </h2>
    {children}
  </section>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative px-3 py-2 text-sm font-semibold text-gray-200 hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </a>
);

const ServiceCard = ({ title, description, Icon }) => (
  <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800 transition-transform duration-300 hover:scale-[1.02] hover:border-yellow-400 hover:shadow-yellow-900/50 flex flex-col items-start space-y-3">
    <Icon size={32} className="text-yellow-400 mb-2" />
    <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const ValueCard = ({ title, icon }) => (
  <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02] hover:border-yellow-400 hover:shadow-yellow-900/50">
    <span className="text-4xl mb-3">{icon}</span>
    <h3 className="text-lg font-bold text-gray-100">{title}</h3>
  </div>
);


// --- Main Component ---
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans">
      
      {/* Tailwind CSS keyframes for smooth menu transition */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 py-4 px-6 sm:px-12">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-yellow-400">Lexora</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-200 p-2 rounded-full hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-extrabold text-gray-200 hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            className="absolute top-6 right-6 text-gray-200 p-2" 
            onClick={toggleMenu}
          >
             <X size={36} />
          </button>
        </div>
      )}

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-black via-gray-950 to-black pt-32 pb-32 px-6 min-h-[80vh] flex items-center justify-center text-center border-b border-gray-900">
          <div className="max-w-5xl space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
              <span className="text-yellow-400">CRAFTING</span> QUALITY SPACES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Lexora is a trusted name in custom carpentry, interior woodwork, and essential **MEP services** in Qatar. We build trust through precision and reliability.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-10 py-4 bg-yellow-400 text-black font-extrabold text-lg rounded-full shadow-2xl shadow-yellow-500/30 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-[1.05]"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* About */}
        <Section id="about" title="About Our Company">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-yellow-400 pl-4">
                Lexora is a trusted name in custom carpentry, interior woodwork, and essential **MEP services** in Qatar. We turn ideas into exceptional spaces through quality craftsmanship and trusted service.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With over **10 years of experience**, we provide tailor-made solutions to hotels, restaurants, showrooms, and homes across Doha. We are known for our **craftsmanship, attention to detail, and professionalism**. Every project reflects our passion for customer satisfaction.
              </p>
              <blockquote className="text-xl font-semibold italic text-yellow-400 border-l-4 border-gray-500 pl-4 mt-6">
                 "We don't just build woodwork—we build trust." - Ameer Kareyeri (CEO)
              </blockquote>
            </div>
            {/* Placeholder Image for visual interest */}
            <div className="flex justify-center md:justify-end">
              <img
                src="cr.jpg"
                alt="A sleek, modern carpentry interior design"
                className="rounded-2xl shadow-2xl border border-gray-700 object-cover w-full h-auto max-w-md lg:max-w-full"
              />
            </div>
          </div>
        </Section>

        {/* Services */}
        <Section id="services" title="Our Specialized Services">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            ))}
          </div>
        </Section>

        {/* Values */}
        <Section id="values" title="Our Core Values">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
             {valueDetails.map((value) => (
              <ValueCard key={value.title} title={value.title} icon={value.icon} />
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get in Touch">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-gray-300">
                Contact us today for a **free consultation** on your next project. We are ready to help you craft the perfect, enduring space in Doha, Qatar.
              </p>

              <div className="space-y-4">
                <ContactInfo Icon={Phone} content={"+974 3072 5335 | +974 3110 7654"} />
                <ContactInfo Icon={Mail} content={"lexoraservices@gmail.com"} />
                <ContactInfo Icon={MapPin} content={"Mathar Qadeem, Doha Qatar"} />
                <a 
                    href="https://www.lexoraservices.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                    <MapPin size={24} className="opacity-0" />
                    <span>www.lexoraservices.com</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 bg-black rounded-xl shadow-inner border border-gray-700">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-400 text-black font-extrabold rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300 transform hover:scale-[1.01]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 text-center py-8 px-4">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} **Lexora Trading Contracting & Services**. All Rights Reserved.
          </p>
          <p className="text-xs mt-1 text-gray-500">
            Powered by Quality Craftsmanship | Mathar Qadeem, Doha Qatar
          </p>
        </div>
      </footer>
    </div>
  );
}

// Helper component for Contact Section
const ContactInfo = ({ Icon, content }) => (
    <div className="flex items-center space-x-4 text-gray-200">
        <Icon size={24} className="text-yellow-400 flex-shrink-0" />
        <span className="text-lg">{content}</span>
    </div>
);
