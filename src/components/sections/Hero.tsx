"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAbout } from "@/hooks/useAbout";

export default function Hero() {
  const { data: about, isLoading } = useAbout();

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

          <motion.div
            className="w-full max-w-2xl px-4"
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

            {/* About Section */}
            <motion.div
              className="mb-8 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative p-6 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-700/80 dark:to-gray-800/80 rounded-lg shadow-inner mb-8 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700">
                <p className="text-base md:text-lg leading-relaxed tracking-wide">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg md:text-xl mb-2 block">
                    About Me
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 first-letter:text-2xl first-letter:font-bold first-letter:text-blue-600 dark:first-letter:text-blue-400">
                    {about?.description}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                  <h3 className="font-semibold mb-3 dark:text-white flex items-center gap-2">
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

                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-all">
                  <h3 className="font-semibold mb-3 dark:text-white flex items-center gap-2">
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
                  <ul className="space-y-2">
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

            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                className="w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
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
