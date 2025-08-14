import React from 'react';
import { Code, Database, Smartphone, GitBranch, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Backend',
    icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    skills: ['Node.js', 'Express.js', 'Prisma', 'REST API', 'WebSocket'],
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Base de données',
    icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Outils',
    icon: <GitBranch className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    skills: ['Git', 'Docker', 'Postman', 'VS Code', 'Figma'],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'Mobile',
    icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    skills: ['Kotlin', 'Android Studio', 'React Native'],
    color: 'from-indigo-600 to-blue-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const skillTagVariants = {
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.15 },
  },
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Compétences</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies et outils maîtrisés pour concevoir des solutions modernes, performantes et évolutives.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 ${category.color} transition-opacity duration-300`} />
              <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${category.color} mb-3 md:mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillTagVariants}
                    whileHover="hover"
                    className="inline-block bg-gray-50 text-gray-700 px-2.5 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg text-xs md:text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors duration-150 cursor-default"
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
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 md:mt-16 bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-20" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 text-center">
              Certifications
            </h3>
            <div className="text-center">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src="https://i.postimg.cc/MHrH40Zs/image.png"
                alt="Certification Travail d'équipe"
                className="mx-auto w-full max-w-md h-auto rounded-lg shadow-sm border border-gray-200"
                loading="lazy"
              />
              <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6">
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