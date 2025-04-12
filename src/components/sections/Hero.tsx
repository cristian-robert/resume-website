"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionLayout from "@/components/layout/SectionLayout";

export default function Hero() {
  return (
    <SectionLayout className="min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Geometric patterns removed to use aurora background */}

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Cristian-Robert Iosef
              </span>
            </h1>
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Senior Quality Assurance Automation Engineer
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Passionate about creating robust automation frameworks and ensuring
            software quality with extensive experience in Java, Python, and
            JavaScript testing environments.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                Contact Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary dark:text-primary hover:text-primary-foreground">
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Background gradient removed to use aurora background */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/10 dark:border-black/10 shadow-2xl">
            <Image
              src="/profile-placeholder.jpg"
              alt="Cristian-Robert Iosef"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
