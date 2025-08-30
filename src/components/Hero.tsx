import React, { useState, useEffect } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Passionné par le développement d'applications web performantes et innovantes";

  const profileImages = [
    "https://i.postimg.cc/90Q9K8tb/1756461510546.png",
    "https://i.postimg.cc/15TF7Kg0/1756461525539.png",
  ];

  useEffect(() => {
    let index = 0;
    const typingInterval = 50;

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingInterval);

    return () => clearInterval(timer);
  }, [fullText]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-white pt-16 pb-12 md:pt-20"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { 
              value: 40, 
              density: { 
                enable: true, 
                value_area: 800 
              } 
            },
            color: { value: ['#60A5FA', '#FBBF24'] },
            shape: { type: 'circle' },
            opacity: { 
              value: 0.5, 
              random: true 
            },
            size: { 
              value: 3, 
              random: true 
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: { 
                enable: true, 
                mode: 'repulse' 
              },
              onclick: { 
                enable: true, 
                mode: 'push' 
              },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left space-y-6 md:space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                DOTEU DIEKEP
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 mt-2">
                FRANCK WILLIAMS
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold tracking-wide">
              Ingénieur en Génie Logiciel – Développeur Full Stack
            </h2>

            <div className="text-base md:text-lg text-gray-600 h-12 md:h-16 flex items-center justify-center lg:justify-start font-mono">
              <span className="border-r-2 border-blue-600 animate-pulse pr-2">
                {displayText}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <CTAButton
                href="https://drive.google.com/file/d/1cdTppmp3ebPaDvyd2JpjYmwgCCTLjiqM/view?usp=drive_link"
                icon={<Download size={18} className="md:size-5" />}
                text="Télécharger CV"
                variant="primary"
              />
              <CTAButton
                href="https://wa.me/237655497331"
                icon={<MessageCircle size={18} className="md:size-5" />}
                text="Me Contacter"
                variant="secondary"
              />
            </div>
          </motion.div>

          {/* Profile Image - Modifié pour mieux centrer */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center order-first lg:order-last"
          >
            <div className="relative group mx-auto">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                <img
                  src={profileImages[0]}
                  alt="Portrait de Doteu Diekep Franck Williams"
                  className="w-full h-full object-cover object-center transition-opacity duration-300 hover:opacity-95"
                  style={{ transform: 'translateX(0)' }} // Assure que l'image est bien centrée
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform duration-300">👋</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTAButton = ({ href, icon, text, variant = 'primary' }) => {
  const baseClasses =
    'inline-flex items-center px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2';
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg focus:ring-blue-300'
    : 'border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white shadow-md focus:ring-blue-200';

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      {React.cloneElement(icon, { className: 'mr-2' })}
      {text}
    </motion.a>
  );
};

export default Hero;