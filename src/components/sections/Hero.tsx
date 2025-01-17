"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAbout } from "@/hooks/useAbout";
import HeroLoading from "../animation/loading-states";

export default function Hero() {
  const { data: about, isLoading } = useAbout();
  if (isLoading) return <HeroLoading />;

  const sectionId = "aboutMe";

  const createMarkup = (content: string) => {
    return { __html: content };
  };

  return (
    <section id={sectionId} className="min-h-screen pt-20 bg-[#0B1221]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-[280px] md:max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="relative aspect-[4/5] md:aspect-[4/5]">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Cristian-Robert Iosef"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 280px, 100vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Hi, I&apos;m
                <div className="text-blue-400">Cristian-Robert Iosef</div>
              </h1>
              <h2 className="text-xl text-gray-300">
                Senior Quality Assurance Automation Engineer
              </h2>
            </div>

            <div className="bg-[#151E2E] rounded-lg p-6">
              <h3 className="text-blue-400 font-medium text-lg mb-4">
                About Me
              </h3>

              <div
                className="text-gray-300"
                dangerouslySetInnerHTML={createMarkup(about?.description || "")}
              />
            </div>

            <div className="bg-[#151E2E] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-blue-400"
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
                </svg>
                <h3 className="text-white font-medium">Location</h3>
              </div>
              <p className="text-gray-300">{about?.location}</p>
            </div>

            <div className="bg-[#151E2E] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-blue-400"
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
                </svg>
                <h3 className="text-white font-medium">Education</h3>
              </div>
              <div className="space-y-3">
                {about?.education?.map((edu, index) => (
                  <div
                    key={index}
                    className="pl-4 border-l-2 border-blue-400 text-gray-300"
                  >
                    {edu}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#151E2E] text-blue-400 hover:bg-[#1A2537] px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
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
