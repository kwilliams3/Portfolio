import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
      let count = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(count));
        }
      }, 30);
    };

    animateCount(4, setProjectCount);
  }, []);

  const projects = [
    {
      title: 'KMS Bulk',
      description: 'Plateforme de communication professionnelle pour l\'envoi en masse de SMS, WhatsApp et Emails avec gestion de crédits, statistiques en temps réel et planification.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'WebSocket'],
      status: 'Pas encore public',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Web App'
    },
    {
      title: 'Pagesse-Shoot',
      description: 'Site vitrine pour services photographiques (mariages, anniversaires, shooting) avec galerie dynamique et formulaire de contact.',
      technologies: ['TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/kwilliams3/Pagesse-Shoot',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Site Vitrine'
    },
    {
      title: 'Logiciel de gestion d\'impression',
      description: 'Application permettant aux clients d\'envoyer leurs documents à imprimer, avec gestion des files d\'attente et géolocalisation.',
      technologies: ['TypeScript'],
      github: 'https://github.com/kwilliams3/projet-gestinnaire-impression',
      image: 'https://images.pexels.com/photos/4050634/pexels-photo-4050634.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Desktop App'
    },
    {
      title: 'Dashboard client de gestion d\'impression',
      description: 'Interface utilisateur pour la gestion des impressions, permettant de suivre l\'état des documents envoyés et de gérer les paramètres d\'impression.',
      technologies: ['TypeScript'],
      github: 'https://github.com/kwilliams3/Dashboard-client-gestion-d-impression',
      image: 'https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Dashboard'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes <span className="text-blue-600">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez quelques-unes de mes créations récentes
          </p>

          {/* Animated Counter */}
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {projectCount}+
              </div>
              <div className="text-gray-600 font-medium">Projets Réalisés</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      <Github className="mr-1" size={16} />
                      Code source
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm font-medium">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;