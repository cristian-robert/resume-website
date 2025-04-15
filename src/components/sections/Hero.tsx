"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionLayout from "@/components/layout/SectionLayout";

export default function Hero() {
  return (
    <SectionLayout className="min-h-screen pt-16 flex items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full"
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Cristian-Robert Iosef
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Senior Quality Assurance Automation Engineer
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Passionate about creating robust automation frameworks and ensuring
            software quality with extensive experience in Java, Python, and
            JavaScript testing environments.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:text-primary-foreground">
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>

        <motion.div
          className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 0.5,
            duration: 0.8, 
            ease: "easeOut" 
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
            <Image
              src="/profile-placeholder.jpg"
              alt="Cristian-Robert Iosef"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
}