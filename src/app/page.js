'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, Phone, Mail, MapPin, Clock, FileText, Stamp, MonitorSmartphone, Users2, BadgeCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { BriefcaseBusiness, Settings2 } from 'lucide-react';
import { useInView, useAnimation } from 'framer-motion';
import ThreeImageRow from './ThreeImageRow';

// New ServiceCard component to handle hooks
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-gradient-to-br from-[#2B2F31] to-[#1E3A8A] border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white/10 p-2 rounded-lg">{service.icon}</div>
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{service.desc}</p>
      <ul className="list-disc list-inside text-gray-300 space-y-1 pl-1">
        {service.list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
*Free Consultation Request*
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
    `;

    const encodedText = encodeURIComponent(text.trim());
    const whatsappURL = `https://wa.me/97431107654?text=${encodedText}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1F2526] text-white">
      <Head>
        <meta
          name="description"
          content="Lexora Business Solutions helps you set up and grow your business in Qatar with expert company formation, legal, and digital services."
        />
        <meta
          name="keywords"
          content="business setup, company formation, Qatar, legal translation, PRO services, digital solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.lexoraservices.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lexora Business Solutions - Your Trusted Partner in Qatar" />
        <meta
          property="og:description"
          content="Expert company formation, legal support, PRO services, and digital solutions — all in one place."
        />
        <meta property="og:url" content="https://www.lexoraservices.com" />
        <meta property="og:image" content="https://www.lexoraservices.com/images/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lexora Business Solutions - Your Trusted Partner in Qatar" />
        <meta
          name="twitter:description"
          content="Expert company formation, legal support, PRO services, and digital solutions — all in one place."
        />
        <meta name="twitter:image" content="https://www.lexoraservices.com/images/preview.jpg" />
      </Head>

      <nav
        className={`sticky top-0 z-50 flex items-center justify-between p-4 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-[#1E3A8A]/70 supports-[backdrop-filter]:bg-[#1E3A8A]/50 shadow-md' : 'bg-transparent'
          }`}
      >
        <div className="flex items-center space-x-2 -ml-4">
          <Image src="/images/logowhote1.png" alt="Lexora Logo" width={160} height={80} className="object-contain" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link href="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link href="/#services" className="hover:text-blue-300 transition">
            Services
          </Link>
          <Link href="/#about" className="hover:text-blue-300 transition">
            About Us
          </Link>
          <Link href="/#mission" className="hover:text-blue-300 transition">
            Mission
          </Link>
          <Link href="/#contact" className="hover:text-blue-300 transition">
            Contact
          </Link>
          <button
            className="flex items-center space-x-2 bg-[#1E3A8A] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => (window.location.href = 'tel:+97431107654')}
          >
            <Phone className="w-4 h-4" />
            <span>Connect Us</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={() => setShowMenu(true)} className="md:hidden cursor-pointer">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </nav>

      {/* Menu Modal (Mobile Only) */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center md:hidden"
            onClick={() => setShowMenu(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#2B2F31] to-[#1E3A8A] rounded-2xl p-8 w-full max-w-sm mx-4 shadow-2xl space-y-6 text-center"
            >
              <h2 className="text-2xl font-semibold text-white">Menu</h2>
              <ul className="space-y-3 text-gray-300 text-lg">
                {[
                  { href: '#home', icon: '🏠', label: 'Home' },
                  { href: '#about', icon: 'ℹ️', label: 'About Us' },
                  { href: '#services', icon: '💼', label: 'Services' },
                  { href: '#contact', icon: '📞', label: 'Contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setShowMenu(false)}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white/10 hover:shadow hover:scale-[1.02] text-white"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowMenu(false)}
                className="w-full py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium shadow transition-all duration-300"
              >
                Close Menu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#1E3A8A] to-[#2B2F31] text-white p-8 pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="absolute inset-0 opacity-60">
          <Image
            src="/images/qatar-background.jpeg"
            alt="Burj Khalifa Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 via-transparent to-[#2B2F31]/50"></div>
        </motion.div>

        <motion.div className="relative z-10 text-center max-w-4xl" variants={containerVariants}>
          <motion.div
  className="inline-flex items-center bg-[#2B2F31] border border-white/10 bg-opacity-80 text-white text-sm sm:text-base px-5 py-2 rounded-full mb-6 shadow-lg tracking-wide relative overflow-hidden"
  variants={itemVariants}
  style={{
    background: 'linear-gradient(to right, #2B2F31, #1E3A8A)',
  }}
>
  {/* Pseudo-element for the glistening effect */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="gleam"></div>
  </div>

  <span className="mr-3 text-xl z-10">🏢</span>
  <span
    className="z-10"
    style={{
      background: 'linear-gradient(to right, #ffffff, #D1D5DB)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    A Trusted Name in Business Solutions
  </span>

  {/* CSS for the glistening animation with increased speed */}
  <style jsx>{`
    .gleam {
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 100%
      );
      transform: skewX(-25deg);
      animation: gleam 2s infinite; /* Reduced duration from 3s to 2s */
    }

    @keyframes gleam {
      0% {
        left: -100%;
      }
      50% {
        left: 100%;
      }
      100% {
        left: 100%;
      }
    }
  `}</style>
</motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
            variants={itemVariants}
            style={{
              background: 'linear-gradient(to right, #ffffff, #D1D5DB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome to <span className="bg-gradient-to-r from-[#ffffff] to-[#D1D5DB] text-transparent bg-clip-text ">Lexora Business Solutions</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-xl max-w-[90%] sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-gray-300 bg-[#2B2F31]/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-md leading-relaxed"
            variants={itemVariants}
          >
            For years, we have been a reliable partner for entrepreneurs, companies, and investors navigating the Qatari market. Today, we introduce a new brand powered by the same experienced team, trusted processes, and client-focused mindset as your trusted partner in navigating the business landscape with ease and confidence.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <button
              className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
              onClick={() => (window.location.href = '#contact')}
            >
              Request a Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      <section id="about" className="py-24 sm:px-1 md:px-6 bg-gradient-to-br from-[#1E3A8A] to-[#2B2F31]">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-8  md:p-12 shadow-lg w-full mb-12 xl:py-20 overflow-hidden"
              style={{
                backgroundImage: `url('/images/make.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Semi-transparent overlay for better text readability */}
              <div className="absolute inset-0 bg-[#1E3A8A]/60 "></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg max-w-4xl mx-auto text-center">
                  Your Gateway to Business Success in Qatar
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-center">
                  At <span className="font-semibold underline decoration-blue-300 decoration-2">Lexora Business Solutions</span>, we specialize in providing end-to-end business solutions for entrepreneurs, investors, and companies looking to operate in Qatar. With a focus on professionalism, compliance, and personalized service, we streamline every process involved in launching and managing a business.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <motion.div
                className="bg-gradient-to-br from-[#2B2F31] to-[#1E3A8A] border border-white/20 rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer max-w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 text-center md:text-left">
                  <div className="bg-white/10 text-white p-3 rounded-xl shadow-lg flex items-center justify-center w-12 h-12 mx-auto md:mx-0">
                    <BriefcaseBusiness size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                    A New Brand Backed by Years of Experience
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                  Lexora Business Solutions is the evolution of a well-established business consultancy in Qatar, with a solid track record of serving local and international clients across various industries.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-3 text-sm md:text-base">
                  <li>Helped hundreds of companies establish their legal presence in Qatar</li>
                  <li>Managed critical government and legal processes with efficiency</li>
                  <li>Built a reputation for reliability, transparency, and expert service</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[#2B2F31] to-[#1E3A8A] border border-white/20 rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer max-w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-4 mb-4 text-center md:text-left">
                  <div className="bg-white/10 text-white p-3 rounded-xl shadow-lg flex items-center justify-center w-12 h-12 mx-auto md:mx-0">
                    <Settings2 size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                    What Sets Us Apart
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-3 text-sm md:text-base">
                  <li>Years of hands-on experience in Qatar’s business environment</li>
                  <li>Long-standing relationships with government and legal authorities</li>
                  <li>Proven expertise in business setup, legal translation, and PRO services</li>
                  <li>A future-focused approach with enhanced digital offerings</li>
                  <li>A new brand, same trusted service</li>
                </ul>
              </motion.div>
            </div>
          </div>

          <section
            className="py-20 bg-gradient-to-br from-[#2B2F31] to-[#1E3A8A] rounded-3xl shadow-md mx-4 md:mx-8 relative overflow-hidden"
            style={{
              backgroundImage: `url('/images/mission-vision-bg.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-[#1E3A8A]/70 "></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="md:pr-8"
              >
                <p className="text-sm text-blue-300 font-semibold uppercase mb-2">Our Focus</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission & Vision</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <strong>Mission:</strong> To empower businesses by delivering reliable, efficient, and compliant corporate support services tailored to the needs of the Qatari market.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Vision:</strong> To be the most trusted and innovative business service provider in Qatar and the GCC, known for excellence and integrity.
                </p>
                <div className="mt-6 inline-flex items-center bg-[#1E3A8A] shadow-sm px-5 py-3 rounded-lg border border-white/20">
                  <div className="text-sm font-medium text-white">✅ Trusted by 100+ Companies</div>
                </div>
              </motion.div>

              {/* Empty div to maintain grid layout on larger screens */}
              <div className="hidden md:block"></div>
            </div>
          </section>

        </div>
      <ThreeImageRow />

      </section>

      <section id="services" className="py-24 px-6 bg-gradient-to-br from-[#1F2526] to-[#1E3A8A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Company Formation & Business Setup',
                icon: <BriefcaseBusiness className="w-6 h-6 text-white" />,
                desc: 'We make it easy to start your business in Qatar by managing all the required steps, including company name reservation, Commercial Registration, trade license application, and more.',
                list: [
                  'Company name reservation',
                  'Commercial Registration (CR)',
                  'Trade license application',
                  'Municipality & Ministry approvals',
                ],
              },
              {
                title: 'Legal Translation Services',
                icon: <FileText className="w-6 h-6 text-white" />,
                desc: 'We offer certified Arabic-English translations accepted by all ministries and embassies in Qatar, covering contracts, government applications, and more.',
                list: ['Contracts & MoUs', 'Government applications', 'Immigration and labor documents', 'Certificates (birth, marriage, academic)'],
              },
              {
                title: 'Document Attestation',
                icon: <Stamp className="w-6 h-6 text-white" />,
                desc: 'We facilitate attestation from ministries, embassies, and notaries, handling academic certificates, personal IDs, business contracts, and more.',
                list: ['MOFA, MOJ, Ministry of Education', 'Embassies & consulates', 'Notaries and legal entities'],
              },
              {
                title: 'Digital Business Solutions',
                icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
                desc: 'Grow your presence with our modern digital services, including website design, company branding, and e-Signature integration.',
                list: ['Website design & development', 'Company branding & identity', 'Business email & domain setup', 'e-Signature integration'],
              },
              {
                title: 'Government Relations & PRO Services',
                icon: <Users2 className="w-6 h-6 text-white" />,
                desc: 'Our experienced PROs manage all interactions with government entities, including work visa processing, Qatar ID applications, and more.',
                list: [
                  'Work visa processing & renewals',
                  'Immigration & labor documentation',
                  'Qatar ID & health card applications',
                  'Ministry of Commerce processes',
                ],
              },
              {
                title: 'Commercial Registration & Licensing',
                icon: <BadgeCheck className="w-6 h-6 text-white" />,
                desc: 'Keep your company documents up to date with our CR and licensing support, including new CR issuance, renewals, and amendments.',
                list: ['New CR issuance', 'Trade name modification', 'Activity addition/removal', 'CR renewal & amendments'],
              },
            ].map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-8 relative"
        style={{
          backgroundImage: `url('/images/qatar.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-[#1F2526]/70"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
            Let us Build Something Great Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full max-w-xl mx-auto p-4 sm:p-6 bg-[#2B2F31]/80 rounded-xl shadow-lg overflow-visible">
              <div
                className="absolute inset-0 rounded-xl pointer-events-none animate-rotate-gradient"
                style={{
                  padding: '1px',
                  background: 'linear-gradient(270deg, #3B82F6, #1E3A8A, #3B82F6)',
                  backgroundSize: '600% 600%',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                  zIndex: 0,
                }}
              ></div>

              <div className="relative z-10 bg-transparent rounded-xl p-4 sm:p-6 border border-transparent">
                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed drop-shadow-sm">
                  We are here to answer your questions, offer expert advice, and help you navigate the Qatari business environment with confidence. Whether you are starting fresh or expanding your operations, our team is ready to assist.
                </p>

                <div className="space-y-5 text-gray-300 text-sm sm:text-base">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span>
                      <strong>Office Address:</strong> Airport Street, Doha, Qatar
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:lexoraservices@gmail.com" className="hover:text-blue-300 transition-colors duration-300">
                        lexoraservices@gmail.com
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span>
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+97431107654" className="hover:text-blue-300 transition-colors duration-300">
                        +974 31107654
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                    <span>
                      <strong>Business Hours:</strong> Sunday to Thursday | 8:00 AM – 5:00 PM
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-xl sm:text-2xl mr-1">🌐</span>
                    <span>
                      <strong>Website:</strong>{' '}
                      <a
                        href="https://www.lexoraservices.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition-colors duration-300"
                      >
                        www.lexoraservices.com
                      </a>
                    </span>
                  </p>
                </div>

                <button
                  className="mt-6 sm:mt-8 w-full bg-[#1E3A8A] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
                  onClick={() => {
                    const text = encodeURIComponent('Hello, I would like to get in touch with Lexora Services.');
                    window.open(`https://wa.me/97431107654?text=${text}`, '_blank');
                  }}
                  aria-label="Send us a message"
                >
                  Send Us a Message
                </button>
              </div>
            </div>

            <style jsx>{`
        @keyframes rotate-gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 360% 50%;
          }
        }

        .animate-rotate-gradient {
          animation: rotate-gradient 8s linear infinite;
        }
      `}</style>

            <form
              onSubmit={handleSubmit}
              className="bg-[#2B2F31]/80 p-6 rounded-lg shadow-md max-w-md mx-auto border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-md">Book a Free Consultation</h3>
              <p className="text-gray-300 mb-4 drop-shadow-sm">
                Fill out the form below, and we will get back to you to schedule a consultation at your convenience.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#1F2526] text-white placeholder-gray-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#1F2526] text-white placeholder-gray-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#1F2526] text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#1F2526] text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1E3A8A] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="mt-20 bg-[#1E3A8A] border-t border-white/20 py-8 text-gray-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Lexora. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="relative group">
              <span className="transition-colors group-hover:text-blue-300">Privacy Policy</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group">
              <span className="transition-colors group-hover:text-blue-300">Terms</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group">
              <span className="transition-colors group-hover:text-blue-300">Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Lexora Business Solutions',
            url: 'https://www.lexoraservices.com',
            description: 'Expert company formation, legal, PRO, and digital business services in Qatar.',
          }),
        }}
      />
    </div>
  );
}