"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="w-[200px] h-[250px] relative mb-12" // Updated dimensions and margin
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile-placeholder.jpg"
              alt="Cristian-Robert Iosef"
              width={200}
              height={250}
              className="object-cover object-center w-full h-full"
              priority
            />
          </motion.div>

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Cristian-Robert Iosef
              </span>
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Senior Quality Assurance Automation Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              Passionate about creating robust automation frameworks and
              ensuring software quality with extensive experience in Java,
              Python, and JavaScript testing environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
