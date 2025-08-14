import React from 'react';
import { GraduationCap, Briefcase, Code2, Smartphone, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Développeur stagiaire',
      company: 'KMS Entreprises',
      period: '2025 - 5 mois',
      description: [
        'Développement d\'applications web avec React et Node.js',
        'Participation à la création d\'une plateforme de communication en masse',
        'Collaboration avec une équipe agile'
      ],
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'work',
      title: 'Stagiaire en développement',
      company: 'TIC AFRIK',
      period: '2023 - 2 mois',
      description: [
        'Initiation au développement web et mobile',
        'Découverte des technologies modernes (React, Flutter)',
        'Participation à des projets réels'
      ],
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: 'from-green-500 to-green-600'
    }
  ];

  const projects = [
    {
      title: 'Mini système d\'exploitation',
      technology: 'Langage C',
      description: [
        'Développement d\'un noyau minimaliste',
        'Gestion des processus et de la mémoire',
        'Interface en ligne de commande'
      ],
      icon: <Code2 className="w-5 h-5 text-white" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Application de recherche de vols',
      technology: 'Kotlin (Android)',
      description: [
        'Application mobile de comparaison de vols',
        'Intégration avec une API REST',
        'Interface utilisateur intuitive'
      ],
      icon: <Smartphone className="w-5 h-5 text-white" />,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const education = {
    degree: 'Ingénieur en Génie Logiciel',
    institution: 'ENSPD (École Nationale Supérieure Polytechnique de Douala)',
    period: '2020 - 2025',
    description: [
      'Spécialisation en développement logiciel et architecture systèmes',
      'Projets avancés en algorithmique et structures de données',
      'Gestion de projet agile et méthodes DevOps'
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Parcours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formation académique, expériences professionnelles et projets marquants
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formation */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Formation</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-bold text-gray-900">{education.degree}</h4>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-semibold mb-1">{education.institution}</p>
                <p className="text-gray-500 text-sm mb-3 font-medium">{education.period}</p>
                
                <ul className="space-y-3">
                  {education.description.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600 text-sm">
                      <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                        <ChevronRight className="w-3 h-3 text-blue-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Expériences Professionnelles */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl mr-4 shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Expériences</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <div className="flex items-center mb-3">
                    <div className={`bg-gradient-to-br ${exp.color} p-2 rounded-lg mr-3 shadow-sm`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 font-semibold text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs font-medium mb-3 bg-gray-100 inline-block px-2 py-1 rounded-full">{exp.period}</p>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-green-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projets Académiques */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl mr-4 shadow-md">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Projets Académiques</h3>
            </div>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-4">
                  <div className="flex items-center mb-3">
                    <div className={`bg-gradient-to-br ${project.color} p-2 rounded-lg mr-3 shadow-sm`}>
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 font-semibold text-sm">{project.technology}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm">
                        <div className="bg-purple-100 p-1 rounded-full mr-3 mt-0.5">
                          <ChevronRight className="w-3 h-3 text-purple-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;