import React, { useState, useEffect } from 'react';
import { Download, MessageCircle } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Passionné par le développement d'applications web performantes et innovantes";

  const profileImages = [
    "https://i.postimg.cc/9FcxbGsd/received-285656403747324.jpg",
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

  // Particle effect initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-white pt-20"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ['#60A5FA', '#FBBF24'] },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
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
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' },
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                DOTEU DIEKEP
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                FRANCK WILLIAMS
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-700 font-semibold tracking-wide">
              Ingénieur en Génie Logiciel – Développeur Full Stack
            </h2>

            <div className="text-lg text-gray-600 h-16 flex items-center font-mono">
              <span className="border-r-2 border-blue-600 animate-pulse pr-2">
                {displayText}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton
                href="https://drive.google.com/file/d/1cdTppmp3ebPaDvyd2JpjYmwgCCTLjiqM/view?usp=drive_link"
                icon={<Download size={20} />}
                text="Télécharger CV"
                variant="primary"
              />
              <CTAButton
                href="https://wa.me/237655497331"
                icon={<MessageCircle size={20} />}
                text="Me Contacter"
                variant="secondary"
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-gradient-to-r from-blue-500 to-yellow-400 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                <img
                  src={profileImages[0]}
                  alt="Portrait de Doteu Diekep Franck Williams"
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-95"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable CTA Button Component
const CTAButton = ({ href, icon, text, variant = 'primary' }) => {
  const baseClasses =
    'inline-flex items-center px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2';
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg focus:ring-blue-300'
    : 'border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white shadow-md focus:ring-blue-200';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      {React.cloneElement(icon, { className: 'mr-2' })}
      {text}
    </a>
  );
};

export default Hero;