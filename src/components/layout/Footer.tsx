"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1221] border-t border-[#1A2537] py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h4 className="text-white font-bold mb-2">Cristian-Robert Iosef</h4>
            <p className="text-gray-400">Senior QA Automation Engineer</p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://linkedin.com/in/cristian-robert-iosef"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:cristian-robert.iosef@outlook.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
