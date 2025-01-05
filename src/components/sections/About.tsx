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
              Senior QA Automation Engineer with extensive experience in
              creating and maintaining test automation frameworks. Specialized
              in Java, Python, and JavaScript ecosystems with a focus on both
              frontend and backend testing.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently working at Deutsche Bank, focusing on continuous
              improvement of automation strategies and frameworks while ensuring
              high-quality software delivery.
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
                Bucharest, Romania
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">
                roby248@live.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Master's degree in Leadership and Human Resources Management
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor's in Management - Universitatea Hyperion
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
