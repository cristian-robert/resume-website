"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAbout } from "@/hooks/useAbout";

export default function Hero() {
  const { data: about, isLoading } = useAbout();

  return (
    <section className="min-h-screen pt-16 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Photo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[280px] h-[380px] relative">
              <Image
                src="/profile-placeholder.jpg"
                alt="Cristian-Robert Iosef"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 280px, 500px"
                priority
              />
            </div>
          </motion.div>

          {/* Middle Column - About Me */}
          <motion.div
            className="md:col-span-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400 block mt-2">
                Cristian-Robert Iosef
              </span>
            </h1>
            <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
              Senior Quality Assurance Automation Engineer
            </h2>

            <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg md:text-xl mb-2 block">
                  About Me
                </span>
                {about?.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
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

          {/* Right Column - Location & Education */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <h3 className="font-semibold mb-4 dark:text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Location
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {about?.location}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <h3 className="font-semibold mb-4 dark:text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v7"
                    />
                  </svg>
                  Education
                </h3>
                <ul className="space-y-3">
                  {about?.education?.map((edu, index) => (
                    <li
                      key={index}
                      className="text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-blue-500 hover:border-blue-600 transition-colors"
                    >
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
