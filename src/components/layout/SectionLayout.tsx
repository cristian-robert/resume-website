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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 animate-gradient-x -z-10" />
      
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
