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
      {/* Background removed to use aurora background */}

      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
