// Hero.jsx
import React, { useState, useEffect } from 'react';
import { Download, MessageCircle, ExternalLink, ArrowDown, X } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCVPreview, setShowCVPreview] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fullText = "Développeur Full Stack passionné par la création d'applications web innovantes et performantes.";

  const profileImages = [
    "https://i.postimg.cc/90Q9K8tb/1756461510546.png",
    "https://i.postimg.cc/15TF7Kg0/1756461525539.png",
  ];

  const CV_URL = "https://drive.google.com/file/d/1y5K0yImD0DbBCYbItzgKXhrQVU8p4GNW/view?usp=sharing";
  const CV_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1y5K0yImD0DbBCYbItzgKXhrQVU8p4GNW";

  // Changement automatique d'image toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect pour le texte
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [fullText]);

  const particlesInit = async (main) => await loadFull(main);
  const openCV = () => window.open(CV_URL, "_blank");
  const downloadCV = () => window.open(CV_DOWNLOAD_URL, "_blank");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden pt-16 pb-12 md:pt-20">
      
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 900 } },
            color: { value: ['#6366F1', '#FBBF24', '#34D399'] },
            shape: { type: 'circle' },
            opacity: { value: 0.4, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, out_mode: 'out' },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* CV Overlay */}
      <AnimatePresence>
        {showCVPreview && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCVPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Mon CV - Doteu Diekep Franck Williams</h3>
                <button onClick={() => setShowCVPreview(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={28} />
                </button>
              </div>
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Download size={36} className="text-white" />
                </div>
                <p className="text-gray-600 text-lg mb-4">Visualisez ou téléchargez mon CV en un clic</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openCV} className="flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-300">
                  <ExternalLink size={20} className="mr-2" /> Visualiser
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={downloadCV} className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300">
                  <ArrowDown size={20} className="mr-2" /> Télécharger
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 animate-gradient-x">DOTEU DIEKEP</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mt-2 animate-gradient-x">FRANCK WILLIAMS</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold tracking-wide">
            Ingénieur Génie Logiciel – Développeur Full Stack
          </h2>

          {/* Texte animé */}
          <div className="text-base md:text-lg text-gray-600 h-16 flex items-center justify-center lg:justify-start font-mono">
            <span className="border-r-2 border-indigo-600 animate-pulse pr-2">{displayText}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
              onClick={() => setShowCVPreview(true)}
              className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-xl hover:from-indigo-700 hover:to-blue-700"
            >
              <Download size={20} className="mr-2" /> Voir / Télécharger Mon CV
            </motion.button>
            <CTAButton href="https://wa.me/237655497331" icon={<MessageCircle size={20} />} text="Me Contacter" variant="secondary" />
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative group">
            <motion.div key={currentImageIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
              <img src={profileImages[currentImageIndex]} alt="Portrait de Doteu Diekep Franck Williams" className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-95" loading="lazy" />
            </motion.div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300">👋</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTAButton = ({ href, icon, text, variant = 'primary' }) => {
  const baseClasses = 'inline-flex items-center px-6 py-2.5 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2';
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg hover:from-indigo-700 hover:to-blue-700 focus:ring-indigo-300'
    : 'border-2 border-indigo-600 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 hover:text-white shadow-md focus:ring-indigo-200';

  return (
    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses}`}>
      {React.cloneElement(icon, { className: 'mr-2' })}
      {text}
    </motion.a>
  );
};

export default Hero;
