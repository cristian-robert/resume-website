"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="w-[280px] h-[380px] relative mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile-placeholder.jpg"
              alt="Cristian-Robert Iosef"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 500px"
              priority
            />
          </motion.div>

          <motion.div className="w-full max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400 block mt-2">
                Cristian-Robert Iosef
              </span>
            </h1>
            <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
              Senior Quality Assurance Automation Engineer
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8">
              {/* ... */}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2"
              >
                <Image
                  src="/LinkedIn.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
