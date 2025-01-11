"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAbout } from "@/hooks/useAbout";

export default function Hero() {
  const { data: about, isLoading } = useAbout();

  return (
    <section id="about" className="relative min-h-screen pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/20 dark:from-blue-900/20" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Column - Photo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-[280px] h-[380px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10">
              <Image
                src="/profile-placeholder.jpg"
                alt="Cristian-Robert Iosef"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 500px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Middle Column - About Me */}
          <motion.div
            className="md:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Hi, I&apos;m{" "}
                <span className="text-blue-600 dark:text-blue-400 block mt-2">
                  Cristian-Robert Iosef
                </span>
              </h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-300">
                Senior Quality Assurance Automation Engineer
              </h2>
            </div>

            <div className="backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10">
              <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                About Me
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {about?.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-medium 
                  shadow-lg shadow-blue-500/30 hover:shadow-blue-600/30 transition-all duration-300 text-center"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-lg font-medium
                  bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 ring-1 ring-gray-900/10 dark:ring-white/10
                  hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300"
              >
                <Image
                  src="/LinkedIn.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Location & Education */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 p-6 rounded-2xl shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10">
              <h3 className="font-semibold mb-4 dark:text-white flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {about?.location}
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 p-6 rounded-2xl shadow-xl ring-1 ring-gray-900/10 dark:ring-white/10">
              <h3 className="font-semibold mb-4 dark:text-white flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14v7"
                  />
                </svg>
                Education
              </h3>
              <ul className="space-y-3">
                {about?.education?.map((edu, index) => (
                  <li
                    key={index}
                    className="pl-4 border-l-2 border-blue-500 hover:border-blue-600 transition-colors
                      text-gray-700 dark:text-gray-300"
                  >
                    {edu}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
