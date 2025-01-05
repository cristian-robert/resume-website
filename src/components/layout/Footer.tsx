"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Your Name</h4>
            <p className="text-gray-400">Frontend Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Social Links</h4>
            <div className="space-y-2">
              <a
                href="https://github.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          © {currentYear} Your Name. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
