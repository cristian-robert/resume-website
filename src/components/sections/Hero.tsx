"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 dark:text-white">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Cristian-Robert Iosef
            </span>
          </h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Senior Quality Assurance Automation Engineer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Passionate about creating robust automation frameworks and ensuring
            software quality with extensive experience in Java, Python, and
            JavaScript testing environments.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://linkedin.com/in/cristian-robert-iosef"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-[500px] h-[600px] relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/profile-placeholder.jpg"
            alt="Cristian-Robert Iosef"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
