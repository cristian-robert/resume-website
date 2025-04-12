"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Determine active section based on scroll position
      const sections = [
        { id: "hero", element: document.querySelector("section:first-of-type") },
        { id: "about", element: document.getElementById("about") },
        { id: "experience", element: document.getElementById("experience") },
        { id: "skills", element: document.getElementById("skills") },
        { id: "contact", element: document.getElementById("contact") },
      ];

      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveItem(currentSection.id === "hero" ? "/" : `#${currentSection.id}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto max-w-fit z-[5000] flex justify-center",
          className
        )}
      >
        <motion.div
          className={cn(
            "px-4 py-2 rounded-full flex items-center gap-2 bg-background/80 dark:bg-gray-900/90 backdrop-blur-md border border-border dark:border-gray-800 transition-all duration-300",
            isScrolled ? "shadow-lg" : "shadow-sm"
          )}
          animate={{
            scale: isScrolled ? 1 : 1.03,
            boxShadow: isScrolled
              ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
            backgroundColor: isScrolled
              ? "var(--background)"
              : "var(--background)"
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((navItem, idx) => {
            const isActive = navItem.link === activeItem;
            return (
              <motion.div key={`${navItem.name}-${idx}`} variants={itemVariants}>
                <Link
                  href={navItem.link}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium relative rounded-full transition-all duration-300 flex items-center gap-1",
                    isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {navItem.icon && (
                      <motion.span
                        animate={{
                          scale: isActive ? 1.2 : 1,
                          color: isActive ? "var(--primary)" : "currentColor"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        {navItem.icon}
                      </motion.span>
                    )}
                    <span>{navItem.name}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
