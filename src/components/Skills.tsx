import React from 'react';
import { Code, Database, Smartphone, GitBranch, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define skill categories with consistent structure
const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-8 h-8 text-white" />,
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Backend',
    icon: <Database className="w-8 h-8 text-white" />,
    skills: ['Node.js', 'Express.js', 'Prisma', 'REST API', 'WebSocket'],
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Base de données',
    icon: <Database className="w-8 h-8 text-white" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Outils',
    icon: <GitBranch className="w-8 h-8 text-white" />,
    skills: ['Git', 'Docker', 'Postman', 'VS Code', 'Figma'],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'Mobile',
    icon: <Smartphone className="w-8 h-8 text-white" />,
    skills: ['Kotlin', 'Android Studio', 'React Native'],
    color: 'from-indigo-600 to-blue-600',
  },
];

// Animation variants for container and items
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
};

const skillTagVariants = {
  hover: {
    scale: 1.05,
    y: -3,
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.2 },
  },
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // Set to true to prevent re-triggering
  });

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Compétences</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies et outils maîtrisés pour concevoir des solutions modernes, performantes et évolutives.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          animate={inView ? 'visible' : {}}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 ${category.color} transition-opacity duration-300`} />
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4 z-10`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 z-10 relative">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 z-10 relative">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillTagVariants}
                    whileHover="hover"
                    className="inline-block bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-20" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Certifications
            </h3>
            <div className="text-center">
            <motion.img
  whileHover={{ scale: 1.1 }}
  src="https://i.postimg.cc/MHrH40Zs/image.png"
  alt="Certification Travail d'équipe"
  className="mx-auto max-w-lg h-auto rounded-lg shadow-xl border border-gray-200"
  loading="lazy"
/>

              <p className="text-lg text-gray-700 mt-6">
                Certification en{' '}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Travail d'équipe
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;