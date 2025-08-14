// components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { href: "https://github.com/kwilliams3", icon: Github, color: "hover:text-purple-400" },
    { href: "https://www.linkedin.com/in/franck-doteu-5206b334b", icon: Linkedin, color: "hover:text-blue-400" },
    { href: "mailto:franckdoteu3@gmail.com", icon: Mail, color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-4 border-t border-gray-700">
      <motion.div
        className="max-w-md mx-auto flex flex-col items-center gap-3 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-serif font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 hover:from-purple-300 hover:to-blue-300 transition-all duration-500">
          Doteu Diekep Franck Williams
        </h2>

        <ul className="flex gap-4">
          {links.map(({ href, icon: Icon, color }, i) => (
            <motion.li key={i} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 hover:text-white ${color} transition-all duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700`}
              >
                <Icon size={18} />
              </a>
            </motion.li>
          ))}
        </ul>

        <p className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
          © {year} Tous droits réservés.
        </p>
      </motion.div>
    </footer>
  );
}
