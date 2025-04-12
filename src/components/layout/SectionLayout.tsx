"use client";
import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionLayout({ children, id, className = "" }: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={`relative py-20 ${className}`}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 via-indigo-50/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-900/80 dark:to-gray-900/80 animate-gradient-x -z-10" />

      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
