import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold dark:text-white">
          Cristian-Robert Iosef
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="#about"
            className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
