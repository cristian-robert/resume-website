"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

type MenuItem = {
  href: string;
  label: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold dark:text-white truncate max-w-[200px]"
          >
            Cristian-Robert Iosef
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800 md:hidden">
            <div className="py-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
