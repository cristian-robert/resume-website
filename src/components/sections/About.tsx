"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A dedicated frontend developer with 3 years of experience building
              modern web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently focused on expanding my knowledge in cloud technologies.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your City, Country
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">
                your.email@example.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor's in Computer Science
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
