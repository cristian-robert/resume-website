"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="font-bold mb-4">Cristian-Robert Iosef</h4>
            <p className="text-gray-400 dark:text-gray-400">Senior QA Automation Engineer</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 dark:text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:roby248@live.com"
                className="block text-gray-400 dark:text-gray-400 hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 dark:text-gray-400 hover:text-white">
                About
              </a>
              <a
                href="#experience"
                className="block text-gray-400 dark:text-gray-400 hover:text-white"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="block text-gray-400 dark:text-gray-400 hover:text-white"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block text-gray-400 dark:text-gray-400 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {currentYear} Cristian-Robert Iosef. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
